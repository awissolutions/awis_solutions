import React from "react";
import Image from "next/image";
const Accounting = () => {
  return (
    <section className="bg-purple-900 text-white flex justify-center items-center min-h-screen px-8">
      {/* Left Section */}
      <div className="flex flex-col justify-center max-w-md">
        <h1 className="text-4xl font-bold leading-tight">
          Accounting Services That{" "}
          <span className="text-yellow-400">Drive Results</span>
        </h1>
        <p className="mt-4 text-lg">
          Gain clarity and control over your business finances with our
          comprehensive accounting services, freeing you to focus on growth.
        </p>
        <button className="mt-6 bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded hover:bg-yellow-300">
          Schedule a Consultation
        </button>
      </div>

      {/* Right Section */}
      <div className="relative w-1/2 flex justify-center items-center">
        <div className="bg-yellow-400 rounded-lg w-4/5 h-4/5 flex justify-center items-center">
          <Image
            src="/images/services/accounting/calculator-image.png"
            alt="Calculator and dollar sign"
            width={300}
            height={200}
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Accounting;
