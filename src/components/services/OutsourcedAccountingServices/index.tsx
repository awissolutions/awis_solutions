// src/app/accounting-services/page.js
import React from "react";

// Services data (could come from a database or API instead)
const services = [
  {
    title: "Accounting System Setup and Optimization",
    icon: "💻", // Replace with SVG or font icons if needed
    description:
      "Optimize your accounting system for better financial management and efficiency.",
  },
  {
    title: "Invoice Management and Collections",
    icon: "📸",
    description:
      "Streamline invoice creation, tracking, and collection processes.",
  },
  {
    title: "Financial Health and Cleanup",
    icon: "📈",
    description:
      "Review and clean up your financial records for better decision-making.",
  },
  {
    title: "Accounts Payable and Expense Management",
    icon: "💳",
    description:
      "Effectively manage your accounts payable and control expenses.",
  },
  {
    title: "Revenue Recognition and Compliance",
    icon: "📅",
    description:
      "Ensure compliance and accuracy in revenue recognition practices.",
  },
  {
    title: "Strategic Financial Analysis and Reporting",
    icon: "📊",
    description:
      "Gain insights from financial analysis and accurate reporting.",
  },
];

export default function OutsourcedAccountingServices() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-purple-900">
          Outsourced Accounting Services
        </h2>
        <p className="text-gray-600 mt-2">
          Streamline your financial operations with our comprehensive outsourced
          accounting services. From meticulous record-keeping to insightful
          reporting, we provide the tools and expertise you need to make
          informed business decisions. Let us handle the numbers so you can
          focus on growing your business.
        </p>
      </div>

      {/* Services List */}
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-4 bg-white"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">{service.icon}</span>
              <h3 className="text-lg font-semibold text-purple-900">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
