import { Card } from "@/components/ui/card";
export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Demand Analysis",
      description: "Forecasting to predict future demands",
    },
    {
      number: "02",
      title: "Vendor Selection",
      description: "Automated vendor matching and qualification",
    },
    {
      number: "03",
      title: "Purchase Orders",
      description: "Streamlined PO creation and approval workflow",
    },
    {
      number: "04",
      title: "Contract Management",
      description: "Digital contract creation and lifecycle management",
    },
  ];  

  return (
    <section className="bg-gray-50 py-20 dark:bg-dark-2">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Your path to procurement excellence
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-6">
              <div className="mb-4 text-4xl font-bold dark:text-primary ">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </Card>
          ))}
          
        </div>
      </div>
    </section>
  );
}
