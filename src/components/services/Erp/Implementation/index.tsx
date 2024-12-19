import { ChevronDown, ArrowRight, CheckCircle2, CircleDot } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Implementation = () => {
  const steps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your current processes and define project scope",
      details: [
        "Business requirements gathering",
        "System evaluation",
        "Project timeline creation",
        "Resource allocation",
      ],
    },
    {
      title: "Design & Configuration",
      description: "Customizing the solution to match your needs",
      details: [
        "System architecture design",
        "Custom configurations",
        "Integration planning",
        "Security setup",
      ],
    },
    {
      title: "Development & Testing",
      description: "Building and validating the solution",
      details: [
        "Custom development",
        "Integration implementation",
        "Quality assurance",
        "User acceptance testing",
      ],
    },
    {
      title: "Deployment & Training",
      description: "Rolling out the solution and ensuring adoption",
      details: [
        "Data migration",
        "User training",
        "Go-live support",
        "Performance monitoring",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Our Implementation Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A systematic approach to ensure project success
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-primary/20 lg:block" />

          {steps.map((step, index) => (
            <div key={index} className="relative mb-8 lg:mb-0">
              <div
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2 lg:px-8">
                  <Card className="p-6">
                    <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Implementation;
