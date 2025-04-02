import { Request, Response } from 'express';
import { Visitor } from '../model/Visitor';

export const visitorController = {
  getAllVisitors: async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const [visitors, total] = await Promise.all([
        Visitor.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
        Visitor.countDocuments()
      ]);

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

      const [
        totalVisits,
        uniqueIPs,
        visitsByDay,
        deviceDistribution,
        topReferrers
      ] = await Promise.all([
        Visitor.countDocuments(),
        Visitor.distinct('ip').then(ips => ips.length),
        Visitor.aggregate([
          { $match: { createdAt: { $gte: sevenDaysAgo } } },
          { 
            $group: { 
              _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
              count: { $sum: 1 } 
            }
          },
          { $sort: { _id: 1 } }
        ]),
        Visitor.aggregate([
          { $group: { _id: '$deviceType', count: { $sum: 1 } } }
        ]),
        Visitor.aggregate([
          { $match: { referrer: { $ne: 'direct' } } },
          { $group: { _id: '$referrer', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 5 }
        ])
      ]);

      res.json({
        totalVisits,
        uniqueIPs,
        visitsByDay: visitsByDay.map(day => ({
          date: day._id,
          visits: day.count
        })),
        deviceDistribution: deviceDistribution.reduce((acc, curr) => ({
          ...acc,
          [curr._id || 'unknown']: curr.count
        }), {} as Record<string, number>),
        topReferrers,
        visitTrends: {
          last24Hours: await Visitor.countDocuments({ 
            createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } 
          }),
          lastWeek: await Visitor.countDocuments({ 
            createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } 
          }),
          lastMonth: await Visitor.countDocuments({ 
            createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } 
          })
        }
      });
    } catch (error) {
      console.error('Error fetching visitor stats:', error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  getVisitorBySession: async (req: Request, res: Response) => {
    try {
      const { sessionId } = req.params;
      const visitor = await Visitor.findOne({ sessionId });

      if (!visitor) {
        return res.status(404).json({ error: 'Visitor not found' });
      }

      res.json(visitor);
    } catch (error) {
      console.error('Error fetching visitor by session:', error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  getExcludedRoutes: async (req: Request, res: Response) => {
    try {
      res.json({
        excludedRoutes: [
          '/api',
          '/admin',
          '/static',
          '/healthcheck',
          '/_next',
          '/favicon.ico',
          '/visitors/stats'
        ],
        note: 'These routes are excluded from visitor tracking'
      });
    } catch (error) {
      console.error('Error fetching excluded routes:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
};