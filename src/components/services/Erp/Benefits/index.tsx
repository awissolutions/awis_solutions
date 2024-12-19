import { Card } from "@/components/ui/card";
import { BarChart,DollarSign,Brain,TrendingUp,Shield,Target } from 'lucide-react';

import icons from "react-icons"
const Benefits = () => {
  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Streamline operations and reduce manual processes",
      icon: <BarChart className="h-12 w-12 text-primary" />,
    },
    {
      title: "Cost Savings",
      description: "Reduce operational costs and improve resource allocation",
      icon: <DollarSign className="h-12 w-12 text-primary" />,
    },
    {
      title: "Better Decision Making",
      description: "Access real-time data and insights for informed decisions",
      icon: <Brain className="h-12 w-12 text-primary" />,
    },
    {
      title: "Scalability",
      description: "Grow your business with a flexible, scalable solution",
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
    },
    {
      title: "Enhanced Security",
      description: "Protect your data with enterprise-grade security",
      icon: <Shield className="h-12 w-12 text-primary" />,
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with modern business processes",
      icon: <Target className="h-12 w-12 text-primary" />,
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Benefits of Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Transform your business with our ERP solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 dark:bg-dark border border-primary">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
              <p className="text-black dark:text-gray-300">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
