'use client'
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Explicitly define the type as number | null

  const faqData = [
    {
      question: "What is Design Automation & Inventor iLogic?",
      answer:
        "Design Automation using Inventor iLogic is a process of automating design tasks within CAD software, specifically Autodesk Inventor, using iLogic rules and scripts to streamline workflows, enhance productivity, and reduce manual errors in the design process.",
    },
    {
      question: "How can iLogic improve my design process?",
      answer:
        "iLogic enables the automation of repetitive tasks such as model generation, drawing creation, and design updates. This reduces time spent on manual design changes, improves consistency across designs, and allows for faster iterations, leading to increased productivity.",
    },
    {
      question: "Do I need to be an expert in Inventor to use iLogic?",
      answer:
        "While having a basic understanding of Autodesk Inventor helps, iLogic is designed to be user-friendly for engineers. With its rule-based system, you can automate design tasks without needing advanced programming skills. However, some scripting knowledge can enhance your capabilities.",
    },
    {
      question: "Can iLogic integrate with my existing designs?",
      answer:
        "Yes, iLogic can be integrated with existing designs and templates within Autodesk Inventor. You can automate common design tasks across your current projects, making it easier to manage revisions and design iterations.",
    },
    {
      question: "What are the benefits of automating CAD designs?",
      answer:
        "Automating CAD designs with iLogic allows for faster design iterations, improved accuracy, and reduced manual errors. Additionally, it saves time by automating repetitive tasks and helps ensure that designs remain consistent across different teams and projects.",
    },
    {
      question: "How do I get started with Design Automation & iLogic?",
      answer:
        "To get started with Design Automation & iLogic, you can begin by identifying common design tasks that can be automated. Then, you can create or modify existing iLogic rules and scripts in Autodesk Inventor. If you need assistance, our team can help you integrate automation into your existing workflow.",
    },
  ];

  return (
    <section className="font-inter bg-white pb-20 pt-20 dark:bg-dark-2 lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold leading-tight text-dark dark:text-white sm:text-3xl md:text-[40px]">
            FAQ on Design Automation & Inventor iLogic
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-white">
            Frequently asked questions about our design automation services and iLogic scripting.
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
