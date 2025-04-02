import { Request, Response } from 'express';
import { Visitor } from '../model/Visitor';

export const visitorController = {
  getAllVisitors: async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const visitors = await Visitor.find()
        .sort({ visitedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();

      const total = await Visitor.countDocuments();

      res.json({
        data: visitors,
        meta: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  getVisitorStats: async (req: Request, res: Response) => {
    try {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const [totalVisits, uniqueIPs, visitsByDay, deviceDistribution, topReferrers] = await Promise.all([
        Visitor.countDocuments(),
        Visitor.aggregate([{ $group: { _id: "$ip" } }, { $count: "count" }]),
        Visitor.aggregate([
          { $match: { visitedAt: { $gte: sevenDaysAgo } } },
          { 
            $group: { 
              _id: { $dateToString: { format: "%Y-%m-%d", date: "$visitedAt" } },
              count: { $sum: 1 } 
            }
          },
          { $sort: { _id: 1 } }
        ]),
        Visitor.aggregate([
          { 
            $group: { 
              _id: "$deviceType",
              count: { $sum: 1 } 
            }
          }
        ]),
        Visitor.aggregate([
          { $match: { referrer: { $ne: "direct" } } },
          { 
            $group: { 
              _id: "$referrer",
              count: { $sum: 1 } 
            }
          },
          { $sort: { count: -1 } },
          { $limit: 5 }
        ])
      ]);

      res.json({
        totalVisits,
        uniqueIPs: uniqueIPs[0]?.count || 0,
        visitsByDay: visitsByDay.map(day => ({
          date: day._id,
          visits: day.count
        })),
        deviceDistribution: deviceDistribution.reduce((acc, curr) => {
          acc[curr._id || 'unknown'] = curr.count;
          return acc;
        }, {} as Record<string, number>),
        topReferrers,
        visitTrends: {
          last24Hours: await Visitor.countDocuments({ 
            visitedAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } 
          }),
          lastWeek: await Visitor.countDocuments({ 
            visitedAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } 
          }),
          lastMonth: await Visitor.countDocuments({ 
            visitedAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } 
          })
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
};