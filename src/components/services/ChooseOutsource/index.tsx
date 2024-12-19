import React from 'react';

const ChooseOutsource = () => {
  return (
    <section className="font-inter bg-white dark:bg-dark pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] ">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-dark-2 dark:bg-white rounded-3xl p-8 relative">
              <div className="bg-white/20 dark:bg-slate-100 backdrop-blur-sm rounded-xl p-4 max-w-[280px] ml-auto relative z-10">
                <h3 className="text-white dark:text-dark font-bold text-xl mb-1">Strategic Financial Oversight</h3>
                <p className="text-white dark:text-dark text-sm">Integrated Accounting Services</p>
              </div>
              <div className="absolute left-8 top-1/2 -translate-y-1/2 ">
                <div className="w-24 h-24 bg-primary rounded-full"></div>
                <div className="w-2 h-32 bg-primary mx-auto my-2"></div>
                <div className="w-24 h-24 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 mt-11">
            <h2 className="text-dark dark:text-white mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-[40px]">
              Why Choose Outsourced Accounting Services?
            </h2>
            
            <p className="text-body-color dark:text-white text-base leading-relaxed mb-8">
              The value of professional accounting services is undeniable. Outsourced accounting 
              is essential for business efficiency, from maintaining accurate financial records to 
              providing strategic insights. Partnering with indinero offers added advantages:
            </p>

            <ul className="space-y-4">
              {[
                "Comprehensive financial oversight for informed decision-making and reporting readiness.",
                "Enhanced efficiency with advanced accounting solutions and industry expertise.",
                "Peace of mind with ensured accuracy, compliance, and strategic financial guidance."
              ].map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-body-color dark:text-white"
                >
                  <span className="inline-block w-2 h-2 bg-primary dark:bg-white dark:text-white  rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-body-color dark:text-white text-base leading-relaxed mt-8">
              Awis solutions accounting services integrate seamlessly into your business operations 
              and growth strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseOutsource;