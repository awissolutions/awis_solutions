"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const OurServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Monthly Bookkeeping",
      description:
        "Comprehensive monthly financial recording and reconciliation including transaction categorization, bank reconciliation, and financial statement preparation.",
      features: [
        "Transaction categorization",
        "Bank reconciliation",
        "Monthly financial statements",
        "Error checking and correction",
      ],
    },
    {
      title: "Payroll Management",
      description:
        "Complete payroll processing services including tax calculations, direct deposits, and compliance reporting.",
      features: [
        "Payroll processing",
        "Tax calculations",
        "Direct deposit management",
        "Compliance reporting",
      ],
    },
    {
      title: "Tax Preparation",
      description:
        "Professional tax preparation services ensuring compliance and maximizing legitimate deductions.",
      features: [
        "Tax return preparation",
        "Deduction optimization",
        "Compliance checks",
        "Tax planning advice",
      ],
    },
    {
      title: "Financial Reporting",
      description:
        "Detailed financial reports and analysis to help you make informed business decisions.",
      features: [
        "Balance sheets",
        "Income statements",
        "Cash flow analysis",
        "Custom reports",
      ],
    },
  ];

  return (
    <section className="font-inter bg-gray-50 pb-20 pt-20 dark:bg-dark-2 lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl md:text-[40px]">
            Our Comprehensive Services
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-body-color dark:text-dark-6">
            Discover our full range of bookkeeping and financial management
            services designed to support your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-[var(--radius)] border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-body-color dark:text-dark-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-body-color dark:text-dark-6"
                    >
                      <span className="mr-3 h-2 w-2 rounded-full bg-primary dark:bg-white"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurServices;
