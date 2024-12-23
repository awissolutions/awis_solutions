import { TrendingUp, Clock, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Benefits() {
  const benefits = [
    {
      title: "Time Savings",
      description: "Reduce procurement cycle time by up to 70%",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Cost Reduction",
      description: "Average 15-20% reduction in procurement costs",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      title: "Compliance",
      description: "100% policy compliance with automated checks",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Efficiency",
      description: "85% reduction in manual processing time",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Business Benefits</h2>
          <p className="text-gray-600 dark:text-dark">
            Transform your procurement operations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="mb-4 inline-flex rounded-full bg-primary p-3 dark:bg-dark dark:text-primary text-white">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
