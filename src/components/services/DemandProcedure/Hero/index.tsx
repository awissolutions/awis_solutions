import {
  LineChart,
  BarChart,
  PieChart,
  TrendingUp,
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
              <span>Financial EDA Platform</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Design <span className="text-primary">Trading Systems</span> With
              Precision
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Automate your trading strategies with advanced financial engineering
              tools
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* <Button size="lg" className="group">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button> */}
            </div>
          </div>
          {/* Right Section */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <Card className="border-none bg-primary/5 p-6">
              <LineChart className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Strategy Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Visual strategy builder
              </p>
            </Card>
            {/* Card 2 */}
            <Card className="border-none bg-primary/5 p-6">
              <BarChart className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Backtesting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Historical performance analysis
              </p>
            </Card>
            {/* Card 3 */}
            <Card className="border-none bg-primary/5 p-6">
              <PieChart className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Risk Analysis</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Advanced risk metrics
              </p>
            </Card>
            {/* Card 4 */}
            <Card className="border-none bg-primary/5 p-6">
              <TrendingUp className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Live Trading</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time execution
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
