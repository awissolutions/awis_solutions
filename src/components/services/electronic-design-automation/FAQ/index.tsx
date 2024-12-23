'use client'
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Explicitly define the type as number | null

  const faqData = [
    {
      question: "What exactly do your accounting services cover?",
      answer:
        "Our comprehensive accounting services include bookkeeping, financial reporting, tax preparation, payroll management, and strategic financial planning for businesses of all sizes.",
    },
    {
      question:
        "How are your accounting services different from traditional bookkeeping?",
      answer:
        "Unlike traditional bookkeeping, we offer a modern, technology-driven approach with real-time financial insights, automated processes, and strategic advisory services beyond basic number tracking.",
    },
    {
      question: "Do I need to switch to your software to use your services?",
      answer:
        "No, we integrate with most popular accounting software platforms and can work with your existing systems while providing our comprehensive service package.",
    },
    {
      question: "How much do your accounting services cost?",
      answer:
        "Our pricing is tailored to your business needs, with packages starting at competitive rates. Contact us for a customized quote based on your requirements.",
    },
    {
      question: "How involved will I need to be in the accounting process?",
      answer:
        "We aim to minimize your involvement while keeping you informed. You'll have access to real-time updates but won't need to handle day-to-day accounting tasks.",
    },
    {
      question: "Can your accounting services help me if I'm being audited?",
      answer:
        "Yes, we provide full audit support including documentation preparation, representation, and guidance throughout the audit process.",
    },
  ];

  return (
    <section className="font-inter bg-white pb-20 pt-20 dark:bg-dark-2 lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold leading-tight text-dark dark:text-white sm:text-3xl md:text-[40px]">
            FAQ on Our Accounting Services
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-white">
            The most frequently asked questions about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-[var(--radius)] border border-primary bg-white shadow-sm dark:border-dark-5 dark:bg-gray-800"
            >
              <button
                className="flex w-full items-center justify-between p-4 text-left transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 sm:p-5"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-semibold text-dark dark:text-white sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-gray-200 p-4 dark:border-gray-700 sm:p-5">
                  <p className="text-sm leading-relaxed text-body-color dark:text-white sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
