import React, { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Check,
  Users,
  BarChart,
  Clock,
  Shield,
} from "lucide-react";
import  {Card} from "@/components/ui/card";

// Hero Section Component
const Hero = () => {
  return (
    <section className="font-inter   pb-20 pt-20 dark:from-gray-900 dark:to-gray-800 lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto mt-5 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Transform Your Business with Expert <span className="text-primary">ERP</span> Solutions
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Streamline operations, boost efficiency, and drive growth with our
              comprehensive ERP implementation and consulting services.
            </p>
            <div className="flex gap-4">
              <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90">
                Schedule Consultation
              </button>
              {/* <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                Learn More
              </button> */}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 ">
              <Card className="p-6 border border-primary">
                <Users className="mb-4 h-8 w-8 text-primary " />
                <h3 className="mb-2 font-semibold">Expert Team</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Seasoned consultants with industry expertise
                </p>
              </Card>
              <Card className="p-6 border border-primary">
                <BarChart className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">Proven Results</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Measurable business improvements
                </p>
              </Card>
              <Card className="p-6 border border-primary">
                <Clock className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">Quick ROI</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Fast implementation and value delivery
                </p>
              </Card>
              <Card className="p-6 border border-primary">
                <Shield className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">Secure Process</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Protected data and operations
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
