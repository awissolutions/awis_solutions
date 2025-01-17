'use client'
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ERPFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Explicitly define the type as number | null

  const faqData = [
    {
      question: "What exactly do your ERP solutions cover?",
      answer:
        "Our comprehensive ERP solutions include streamlined financial reporting, inventory management, supply chain optimization, CRM integration, and tailored business analytics to drive efficiency and growth.",
    },
    {
      question: "How are your ERP solutions different from traditional systems?",
      answer:
        "Unlike traditional systems, our ERP solutions leverage cutting-edge technology, real-time data integration, and a modular approach that adapts to your unique business needs for a seamless experience.",
    },
    {
      question: "Do I need to switch to a specific platform to use your ERP solutions?",
      answer:
        "No, our ERP solutions are highly flexible and integrate with most popular platforms, allowing you to enhance your existing systems without disruption.",
    },
    {
      question: "How much do your ERP solutions cost?",
      answer:
        "Our pricing is tailored to your business requirements, with scalable packages designed to fit businesses of all sizes. Contact us for a personalized quote.",
    },
    {
      question: "How involved will I need to be in the ERP implementation process?",
      answer:
        "We handle the majority of the implementation process, providing regular updates and involving you only in key decisions to ensure a smooth and hassle-free transition.",
    },
    {
      question: "Can your ERP solutions help me resolve operational challenges?",
      answer:
        "Yes, our ERP solutions are designed to address operational inefficiencies, streamline workflows, and provide actionable insights to overcome challenges and drive success.",
    },
  ];

  return (
    <section className="font-inter bg-white pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold leading-tight text-dark dark:text-white sm:text-3xl md:text-[40px]">
            FAQ about our ERP Services
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

export default ERPFaq;
