import { FileText, Settings, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "Demand Forecasting",
      description: "AI-powered demand prediction and inventory optimization",
      icon: <BarChart className="h-12 w-12 text-primary" />,
      details: [
        "Predictive analytics",
        "Inventory optimization",
        "Trend analysis",
        "Seasonal adjustments",
      ],
    },
    {
      title: "Procurement Automation",
      description: "Streamline purchasing processes and reduce manual work",
      icon: <Settings className="h-12 w-12 text-primary" />,
      details: [
        "Automated PO generation",
        "Approval workflows",
        "Vendor management",
        "Order tracking",
      ],
    },
    {
      title: "Contract Management",
      description: "Centralized contract lifecycle management",
      icon: <FileText className="h-12 w-12 text-primary" />,
      details: [
        "Contract repository",
        "Renewal alerts",
        "Compliance tracking",
        "Template management",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 dark:bg-dark-2">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Key Features</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Advanced capabilities for modern procurement teams
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
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
}
