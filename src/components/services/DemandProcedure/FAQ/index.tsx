'use client'
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Explicitly define the type as number | null

  const faqData = [
    {
      question: "What do your procurement services include?",
      answer:
        "Our comprehensive procurement services cover vendor sourcing, contract negotiation, purchase order management, supply chain optimization, and ongoing vendor performance monitoring.",
    },
    {
      question:
        "How are your procurement services different from traditional purchasing departments?",
      answer:
        "Unlike traditional purchasing departments, we leverage advanced tools, data-driven strategies, and market insights to deliver cost savings, efficiency, and enhanced supplier relationships.",
    },
    {
      question: "Do I need to switch to a specific system to use your services?",
      answer:
        "No, we integrate seamlessly with your existing procurement systems and platforms, ensuring a smooth transition and minimal disruption to your operations.",
    },
    {
      question: "How much do your procurement services cost?",
      answer:
        "Our pricing is customized to align with your business goals and procurement needs. Contact us to discuss your requirements and receive a tailored quote.",
    },
    {
      question: "How involved will I need to be in the procurement process?",
      answer:
        "We manage the majority of the procurement process, keeping you updated with key insights and decisions while minimizing your day-to-day involvement.",
    },
    {
      question: "Can your procurement services help if I have supply chain issues?",
      answer:
        "Yes, we specialize in resolving supply chain challenges, offering solutions such as alternative vendor sourcing, risk management, and process optimization to ensure smooth operations.",
    },
  ];


  return (
    <section className="font-inter bg-white pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
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
