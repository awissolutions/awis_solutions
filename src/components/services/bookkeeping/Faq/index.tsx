"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  // Use proper typing for the state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does your bookkeeping cover?",
      answer:
        "Our bookkeeping services include monthly transaction categorization, bank reconciliation, financial statement preparation, payroll processing, tax preparation, and financial reporting.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing is based on your business size and needs. We offer customized packages starting from $X per month. Contact us for a detailed quote.",
    },
    {
      question: "Do I need to use specific software?",
      answer:
        "We work with most popular accounting software including QuickBooks, Xero, and FreshBooks. We can recommend the best solution for your business.",
    },
    {
      question: "How secure is my financial data?",
      answer:
        "We use bank-level encryption and security measures to protect your data. Our systems are regularly audited and updated to maintain the highest security standards.",
    },
    {
      question: "Can I switch from my current bookkeeper?",
      answer:
        "Yes, we make the transition process smooth and handle all the necessary steps to transfer your books without disrupting your business.",
    },
  ];

  return (
    <section className="font-inter bg-white dark:bg-dark pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div className="container max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-dark dark:text-white text-3xl font-bold leading-tight sm:text-4xl md:text-[40px] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body-color dark:text-dark-6 text-base leading-relaxed">
            Find answers to common questions about our bookkeeping services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-[var(--radius)] shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-dark dark:text-white font-semibold pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-body-color dark:text-dark-6">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
