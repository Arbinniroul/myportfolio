import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { Users, Monitor, Globe, Clock } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/client';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

interface Visitor {
  _id: string;
  ip: string;
  browser: string;
  os: string;
  deviceType: string;
  referrer: string;
  visitedAt: string;
}

interface StatsData {
  totalVisits: number;
  uniqueIPs: number;
  visitsByDay: Array<{ date: string; visits: number }>;
  deviceDistribution: Record<string, number>;
  topReferrers: Array<{ _id: string; count: number }>;
  visitTrends: {
    last24Hours: number;
    lastWeek: number;
    lastMonth: number;
  };
}


const DEFAULT_STATS: StatsData = {
  totalVisits: 0,
  uniqueIPs: 0,
  visitsByDay: [],
  deviceDistribution: {
    mobile: 0,
    desktop: 0,
    tablet: 0,
    other: 0
  },
  topReferrers: [],
  visitTrends: {
    last24Hours: 0,
    lastWeek: 0,
    lastMonth: 0
  }
};

export const Dashboard: React.FC = () => {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [stats, setStats] = useState<StatsData>(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [visitorsRes, statsRes] = await Promise.all([
          apiClient.get('/api/visitors?limit=10'),
          apiClient.get('/api/visitors/stats')
        ])
        setVisitors(visitorsRes.data?.data || []);
        setStats({
          ...DEFAULT_STATS,
          ...statsRes.data, 
          deviceDistribution: {
            ...DEFAULT_STATS.deviceDistribution,
            ...(statsRes.data?.deviceDistribution || {}) 
          }
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const statsCards = [
    {
      title: 'Total Visitors',
      value: (stats.totalVisits)/2,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Unique IPs',
      value: stats.uniqueIPs,
      icon: Globe,
      color: 'bg-green-500',
    },
    {
      title: 'Mobile Users',
      value: stats.deviceDistribution.mobile,
      icon: Monitor,
      color: 'bg-purple-500',
    },
    {
      title: 'Today\'s Visits',
      value: stats.visitTrends.last24Hours,
      icon: Clock,
      color: 'bg-orange-500',
    },
  ];
  const Navigate=useNavigate();

  const handleLogout = ()=>{
      localStorage.removeItem('token');
      Navigate('/');

      
  }

  const browserData = Object.entries(stats.deviceDistribution)
    .map(([name, value]) => ({ name, value }))
    .filter(item => item.value > 0); 

  if (loading) {
    return <div className="text-center py-8">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>
        <button onClick={handleLogout} className='px-2 py-1 bg-black text-white rounded-md hover:bg-gray-700 absolute right-0 top-4 mr-5'>Logout</button>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`${card.color} p-3 rounded-lg`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">{card.title}</p>
                  <p className="text-2xl font-semibold">{card.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Visits Last 7 Days</h2>
            <div className="h-80">
              {stats.visitsByDay.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.visitsByDay}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="visits" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No visit data available
                </div>
              )}
            </div>
          </div>


          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Device Distribution</h2>
            <div className="h-80">
              {browserData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={browserData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {browserData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No device data available
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
          <h2 className="text-xl font-semibold p-6 border-b">Recent Visitors</h2>
          <div className="overflow-x-auto">
            {visitors.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OS</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrer</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {visitors.map((visitor) => (
                    <tr key={visitor._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(visitor.visitedAt), 'MMM d, HH:mm')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.ip}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.deviceType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.os}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {visitor.referrer === 'direct' ? 'Direct' : visitor.referrer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-6 text-center text-gray-500">
                No recent visitor data available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};