'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const BookkeepingServices = () => {
  // Ensure openIndex can hold either a number or null
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      icon: "💻",
      title: "Accurate Financial Record-Keeping",
      description:
        "Maintain precise and organized financial records with our systematic approach to bookkeeping. We ensure every transaction is properly documented and classified.",
    },
    {
      icon: "📊",
      title: "Real-Time Transaction Categorization",
      description:
        "Stay on top of your finances with immediate transaction processing and categorization. Our real-time system helps you understand your cash flow as it happens.",
    },
    {
      icon: "📑",
      title: "Monthly Financial Statement Preparation",
      description:
        "Receive comprehensive monthly financial statements that give you clear insights into your business's financial health and performance.",
    },
    {
      icon: "💳",
      title: "Accounts Payable and Receivable Management",
      description:
        "Efficiently manage your business's cash flow with our streamlined AP/AR processes. We help you stay on top of payments and collections.",
    },
    {
      icon: "🏦",
      title: "Bank and Credit Card Reconciliations",
      description:
        "Keep your financial records accurate with regular reconciliation of all your accounts. We ensure everything matches down to the penny.",
    },
    {
      icon: "☁️",
      title: "Cloud-Based Document Management",
      description:
        "Access your financial documents anytime, anywhere with our secure cloud-based storage system. Stay organized and paperless.",
    },
  ];

  // Fixing handleClick by explicitly typing `index` as number
  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-inter bg-white dark:bg-dark-2 pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div className="container max-w-6xl pt-6  mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-dark dark:text-white text-3xl font-bold leading-tight sm:text-4xl md:text-[40px] mb-6">
              Comprehensive Online Bookkeeping Services
            </h2>
          </div>
          <div>
            <p className="text-body-color dark:text-white text-base leading-relaxed">
              Streamline your financial operations with our comprehensive online bookkeeping solutions. 
              From meticulous record-keeping to insightful reporting, we provide the tools and expertise 
              you need to make informed business decisions. Let us handle the numbers so you can focus 
              on growing your business.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-[var(--radius)] shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                className="w-full p-6 text-left flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => handleClick(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-2xl flex-shrink-0 mt-1">{service.icon}</span>
                <div className="flex-grow pr-8">
                  <h3 className="text-dark dark:text-white font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  {openIndex === index && (
                    <div className="text-body-color dark:text-white text-base leading-relaxed">
                      {service.description}
                    </div>
                  )}
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary dark:text-white flex-shrink-0 transform transition-transform duration-200 mt-2 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookkeepingServices;
