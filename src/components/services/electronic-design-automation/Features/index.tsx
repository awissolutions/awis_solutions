import React from 'react';
import { LineChart, BarChart, PieChart, TrendingUp, Clock, Shield, Database, Settings, ZoomIn, GitBranch, ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export default function Features  ()  {
  const features = [
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "Strategy Development",
      description: "Visual strategy builder with drag-and-drop components and custom coding options",
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      title: "Advanced Backtesting",
      description: "Comprehensive historical testing with detailed performance metrics",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Risk Management",
      description: "Real-time risk monitoring and automated safety controls",
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Algorithmic Trading</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Everything you need to design, test, and deploy trading strategies
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg">
                <div className="rounded-full bg-primary/10 p-3 inline-flex mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
