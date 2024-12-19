import React, { useState } from 'react';
import { LineChart as LineChartIcon,  Download, AlertCircle, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';


const Features = () => {
  const features = [
    {
      title: "Automated Reporting",
      description: "Save time with automated report generation and scheduling",
      details: [
        "Scheduled report generation",
        "Automated data collection",
        "Custom delivery options",
        "Multiple format support"
      ],
      icon: <Download className="w-12 h-12 text-primary" />
    },
    {
      title: "Data Accuracy",
      description: "Ensure precision with our advanced validation systems",
      details: [
        "Data verification",
        "Error detection",
        "Audit trails",
        "Reconciliation tools"
      ],
      icon: <AlertCircle className="w-12 h-12 text-primary" />
    },
    {
      title: "Customization",
      description: "Tailor reports to match your specific requirements",
      details: [
        "Custom templates",
        "Flexible layouts",
        "Branded reporting",
        "Custom metrics"
      ],
      icon: <Users className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 dark:text-gray-300">Advanced capabilities for comprehensive financial reporting</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;