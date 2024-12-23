import {
  ShoppingCart,
  TrendingUp,
  FileText,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white py-20 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>Demand Procurement Platform</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Optimize Your <span className="text-primary">Procurement Process</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              End-to-end solutions for efficient demand forecasting, order management, and supply chain optimization.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Features
              </Button>
            </div>
          </div>
          {/* Right Section */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <Card className="border-none bg-primary/5 p-6">
              <ShoppingCart className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Automated Ordering</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Streamline procurement with ordering tools.
              </p>
            </Card>
            {/* Card 2 */}
            <Card className="border-none bg-primary/5 p-6">
              <TrendingUp className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Demand Forecasting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Predict future demand with data-driven insights.
              </p>
            </Card>
            {/* Card 3 */}
            <Card className="border-none bg-primary/5 p-6">
              <FileText className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Contract Management</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Centralized tools for managing supplier contracts.
              </p>
            </Card>
            {/* Card 4 */}
            <Card className="border-none bg-primary/5 p-6">
              <Settings className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Process Automation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Automate repetitive tasks to save time and reduce errors.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
