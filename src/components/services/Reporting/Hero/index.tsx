import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Hero Section Component
const Hero = () => {
  const sampleData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 75 },
    { month: 'Mar', value: 85 },
    { month: 'Apr', value: 78 },
    { month: 'May', value: 90 },
    { month: 'Jun', value: 95 }
  ];

  return (
    <section className="font-inter bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Financial Data Into Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Professional financial reporting solutions that help you make data-driven decisions with confidence.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90">
                Request Demo
              </button>
              <button className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700">
                View Sample Reports
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
