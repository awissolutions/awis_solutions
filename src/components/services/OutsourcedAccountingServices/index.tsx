"use client";

import React, { useState } from "react";

// Custom Accordion Item Component
const AccordionItem = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-300 dark:border-dark  dark:bg-dark mt-4">
      {/* Accordion Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-md font-semibold text-black dark:text-white">
            {title}
          </h3>
        </div>

        {/* Expand/Collapse Indicator */}
        <span className="text-xl">{isExpanded ? "−" : "+"}</span>
      </div>

      {/* Accordion Content */}
      {isExpanded && (
        <div className="bg-gray-50 p-4 text-dark dark:bg-dark dark:text-gray-300">
          {children}
        </div>
      )}
    </div>
  );
};

// Main Page Component
export default function AccountingServicesPage() {
  const services = [
    {
      icon: "🖥️",
      title: "Accounting System Setup and Optimization",
      content:
        "Streamline your financial processes with our comprehensive accounting system services. We'll set up or convert your system to industry-leading platforms like QuickBooks Online or NetSuite, design a tailored chart of accounts, and create custom financial reporting packages. Our experts can operate across various small business software and ERPs, ensuring a solution that fits your unique needs.",
    },
    {
      icon: "🛠️",
      title: "Financial Health and Cleanup",
      content:
        "Transform your financial record-keeping with our comprehensive accounting cleanup services. Our expert team meticulously examines your financial documents, identifying and resolving discrepancies while establishing robust accounting practices. We'll streamline your chart of accounts, enhance reporting systems, and deliver actionable insights that empower smarter business decisions.",
    },
    {
      icon: "💡",
      title: "Revenue Recognition and Compliance",
      content:
        "Navigate the complex landscape of revenue recognition with our specialized consulting services. We dive deep into your unique business model, crafting tailored sales workflows that meet ASC 606 standards. Our expert team implements automated integrations that eliminate manual errors and provide real-time financial visibility.",
    },
    {
      icon: "📋",
      title: "Invoice Management and Collections",
      content:
        "Optimize your cash flow with our comprehensive invoice management. We handle everything from generating and sending invoices to providing collections support. Our team performs weekly or monthly Point of Sale (POS) reconciliations, maintaining accuracy in your financial records while you focus on growing your business.",
    },
    {
      icon: "💸",
      title: "Accounts Payable and Expense Management",
      content:
        "Transform your financial workflow through expert bill processing, precise vendor tracking, and seamless transaction management. Our dedicated team provides end-to-end financial solutions, handling bill coding, AP reconciliations, expense categorization, and employee reimbursements to give you unparalleled visibility and control over your cash flow.",
    },
    {
      icon: "📊",
      title: "Strategic Financial Analysis and Reporting",
      content:
        "Go beyond standard month-end closes with deep financial insights. We deliver customized reporting packages, conduct monthly review meetings, and perform strategic financial modeling. Support your critical business decisions with comprehensive analysis that turns financial data into actionable strategy.",
    },
  ];

  return (
    <div className="container p-6 mt-10 mb-10 dark:bg-dark border rounded-3xl	">
      {/* Header Grid */}
      <div className="mb-10 grid gap-6 md:grid-cols-[2fr_3fr]">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Outsourced Accounting <br /> Services
        </h1>
        <p className="text-dark dark:text-white">
          Streamline your financial operations with our comprehensive outsourced
          accounting services. From meticulous record-keeping to insightful
          reporting, we provide the tools and expertise you need to make
          informed business decisions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <AccordionItem key={index} title={service.title} icon={service.icon}>
            {service.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}
