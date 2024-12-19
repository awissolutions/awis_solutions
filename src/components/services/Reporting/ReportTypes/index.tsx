import {
  BarChart,
  PieChart,
  LineChart as LineChartIcon,
  FileText,
  TrendingUp,
  Download,
  AlertCircle,
  Users,
  ChevronDown,
} from "lucide-react";
import { Card} from "@/components/ui/card";


const ReportTypes = () => {
  const reports = [
    {
      title: "Financial Statements",
      description:
        "Comprehensive balance sheets, income statements, and cash flow reports",
      features: [
        "Balance Sheet Analysis",
        "Income Statement Breakdown",
        "Cash Flow Statements",
        "Equity Change Reports",
      ],
      icon: <FileText className="h-12 w-12 text-primary" />,
    },
    {
      title: "Performance Metrics",
      description: "Key performance indicators and financial ratios analysis",
      features: [
        "Profitability Ratios",
        "Liquidity Analysis",
        "Efficiency Metrics",
        "Growth Indicators",
      ],
      icon: <BarChart className="h-12 w-12 text-primary" />,
    },
    {
      title: "Trend Analysis",
      description: "Historical data analysis and future projections",
      features: [
        "Historical Trends",
        "Growth Analysis",
        "Seasonal Patterns",
        "Forecast Models",
      ],
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
    },
    {
      title: "Custom Reports",
      description: "Tailored reports meeting your specific business needs",
      features: [
        "Custom Metrics",
        "Industry Benchmarks",
        "Department Analysis",
        "Executive Dashboards",
      ],
      icon: <PieChart className="h-12 w-12 text-primary" />,
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Comprehensive Report Types
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose from our wide range of financial reporting solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {reports.map((report, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div>{report.icon}</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{report.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {report.description}
                  </p>
                  <ul className="space-y-2">
                    {report.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReportTypes;
