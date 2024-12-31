import React from 'react';
import { Code, Settings, Shield, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Features() {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "iLogic Scripting Automation",
      description: "Automate the generation of 2D drawings, 3D models, and design data using Inventor iLogic scripts, ensuring efficiency and accuracy.",
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Rapid Design Iterations",
      description: "Leverage iLogic rule libraries and templates to quickly iterate and modify designs, saving time and increasing productivity.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Robust Testing & Validation",
      description: "Test and validate automation rules and scripts to ensure design integrity and reliability in manufacturing environments.",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Seamless Integration",
      description: "Easily integrate automation into existing design workflows to streamline processes and reduce manual effort.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Innovative Design Automation Features</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Streamline your design and manufacturing processes with powerful automation and CAD scripting solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
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
}
