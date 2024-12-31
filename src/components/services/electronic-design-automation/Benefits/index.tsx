import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  TrendingUp,
  Clock,
  Shield,
  Database,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Benefits() {
  return (
    <section className="bg-white py-20 dark:bg-dark">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
              Design Automation Benefits
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Faster Design Iterations",
                  description: "Accelerate your product development with automated design updates using iLogic scripting.",
                },
                {
                  title: "Increased Accuracy",
                  description: "Reduce human errors by automating complex tasks, ensuring precise designs every time.",
                },
                {
                  title: "Streamlined Workflow",
                  description: "Integrate CAD automation seamlessly into your existing design processes for greater efficiency.",
                },
                {
                  title: "Enhanced Collaboration",
                  description: "Share standardized templates and rules to enhance team collaboration and consistency.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="rounded-full bg-primary/10 p-2 h-fit">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Section */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                stat: "2x Faster",
                label: "Design Updates",
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                stat: "99.9%",
                label: "Automation Reliability",
              },
              {
                icon: <Database className="w-8 h-8 text-primary" />,
                stat: "100+ Templates",
                label: "Design Libraries",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                stat: "24/7",
                label: "Automated Monitoring",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center bg-primary/5 border-none">
                <div className="rounded-full bg-primary/10 p-3 inline-flex mb-4">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
