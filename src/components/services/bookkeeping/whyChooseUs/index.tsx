import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
      icon: "👨‍💼"
    },
    {
      title: "Time Savings",
      description: "Focus on your business while we handle the numbers",
      icon: "⏰"
    },
    {
      title: "Cost Effective",
      description: "Lower costs compared to in-house bookkeeping staff",
      icon: "💰"
    },
    {
      title: "24/7 Access",
      description: "Cloud-based systems for anytime, anywhere access",
      icon: "🌐"
    }
  ];

  return (
    <section className="font-inter bg-white dark:bg-dark pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-dark dark:text-white text-3xl font-bold leading-tight sm:text-4xl md:text-[40px] mb-6">
            Why Choose Our Bookkeeping Services?
          </h2>
          <p className="text-body-color dark:text-dark-6 text-base leading-relaxed max-w-3xl mx-auto">
            We combine expertise, technology, and personalized service to deliver 
            superior bookkeeping solutions that help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-[var(--radius)] p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-4 block text-center">{benefit.icon}</span>
              <h3 className="text-dark dark:text-white font-semibold text-xl mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-body-color dark:text-white text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;