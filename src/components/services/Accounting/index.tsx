import React from "react";
import Image from "next/image";
const Accounting = () => {
  return (
    <section className="bg-primary sm:pt-0 text-white flex dark:bg-dark-2 justify-center items-center min-h-screen px-8">
      {/* Left Section */}
      <div className="flex flex-col justify-center max-w-md">
        <h1 className="text-4xl font-bold leading-tight">
          Accounting Services That{" "}
          <span className="text-white">Drive Results</span>
        </h1>
        <p className="mt-4 text-lg">
          Gain clarity and control over your business finances with our
          comprehensive accounting services, freeing you to focus on growth.
        </p>
        <button className="mt-6 bg-white text-black  py-3 px-6 rounded hover:bg-slate-100 dark: bg-dark:text-black">
           <a href="/contact">Schedule a Consultation</a>
        </button>
      </div>

      {/* Right Section */}
      <div className="relative w-1/2 hidden justify-center items-center  lg:flex md:flex">
        <div className="bg-transparent rounded-lg w-4/5 h-4/5 flex justify-center items-center">
          <Image
            src="/images/services/accounting/calculator-1.png"
            alt="Calculator and dollar sign"
            width={500}
            height={400}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Accounting;
