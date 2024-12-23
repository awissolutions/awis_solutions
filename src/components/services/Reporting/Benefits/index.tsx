
import {  Download, AlertCircle, Users} from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ReportingBenefits () {
  const benefits = [
    {
      title: "Time Savings",
      description: "Reduce report creation time by up to 80% with automated workflows",
      icon: <Download className="w-12 h-12 text-primary" />
    },
    {
      title: "Enhanced Accuracy",
      description: "Eliminate human error with automated data validation and verification",
      icon: <AlertCircle className="w-12 h-12 text-primary" />
    },
    {
      title: "Team Collaboration",
      description: "Enable seamless cooperation with real-time sharing and permissions",
      icon: <Users className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-dark-2 py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
          <p className="text-gray-600 dark:text-gray-300">Experience the advantages of modern reporting solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
