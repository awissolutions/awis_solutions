// src/app/accounting-solutions/page.js
import React from "react";

export default function WhyOutsourcedAccounting() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-8 lg:flex-row">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="mb-4 text-3xl font-bold text-purple-900">
          How Outsourced Accounting Solves Key Business Issues
        </h2>
        <p className="mb-4 text-gray-600">
          Our accounting services address critical financial management
          challenges faced by businesses of all sizes:
        </p>
        <ul className="list-inside list-disc space-y-2 text-gray-600">
          <li>
            <strong>Strategic Decision-Making:</strong> Provides in-depth
            financial analysis and insights for informed business choices.
          </li>
          <li>
            <strong>Growth Management:</strong> Offers scalable solutions that
            adapt to your business expansion needs.
          </li>
          <li>
            <strong>Compliance and Risk:</strong> Ensures adherence to changing
            regulations and identifies potential financial risks.
          </li>
          <li>
            <strong>Cost Optimization:</strong> Delivers professional-level
            accounting at a fraction of the cost of an in-house team.
          </li>
          <li>
            <strong>Performance Tracking:</strong> Implements robust financial
            reporting for clear visibility into business performance.
          </li>
        </ul>
        <p className="mt-4 text-gray-600">
          By leveraging our expertise, you can transform financial management
          from a challenge into a strategic advantage.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative flex-1">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="/images/services/accounting/accountant.png"
            alt="Professional accountant"
            className="h-64 w-full object-cover lg:h-auto"
          />
        </div>
        <div className="absolute left-8 top-8 max-w-sm rounded-lg bg-white p-4 shadow-lg">
          <h3 className="font-semibold text-purple-900">
            Full-Spectrum Accounting
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            From bookkeeping to strategic insights.
          </p>
        </div>
      </div>
    </div>
  );
}
