"use client"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Hero Section Component
const HeroReporting = () => {
  const sampleData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 75 },
    { month: "Mar", value: 85 },
    { month: "Apr", value: 78 },
    { month: "May", value: 90 },
    { month: "Jun", value: 95 },
  ];

  return (
    <section className="font-inter bg-white pb-20 pt-20 dark:bg-dark">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Transform Your Financial Data Into <span className="text-primary">Insights</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Professional financial reporting solutions that help you make
              data-driven decisions with confidence.
            </p>
            <div className="flex gap-4">
              <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90">
                Request Demo
              </button>
              <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                View Sample Reports
              </button>
            </div>
          </div>
          <div className="h-[400px] lg:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                {/* <Tooltip /> */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroReporting
