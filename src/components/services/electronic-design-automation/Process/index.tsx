import { Shield, Settings, ZoomIn, GitBranch } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Process() {
  const steps = [
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Design Strategy",
      description: "Build your trading strategy using visual tools or code",
    },
    {
      icon: <ZoomIn className="h-6 w-6 text-primary" />,
      title: "Backtest",
      description: "Test performance against historical market data",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Optimize",
      description: "Fine-tune parameters and risk controls",
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      title: "Deploy",
      description: "Launch your strategy in live markets",
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            From Strategy to Execution
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Streamlined workflow for algorithmic trading development
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center bg-primary/5 border-none">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
