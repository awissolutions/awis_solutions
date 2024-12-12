"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import {
  MdHelpOutline,
  MdBuild,
  MdAccessibilityNew,
  MdCode,
  MdPalette,
  MdDevices,
} from "react-icons/md";

function AccountingServicesPage() {
  const services = [
    {
      icon: MdHelpOutline,
      title: "Accounting System Setup and Optimization",
      content: "Streamline your financial processes with our comprehensive accounting system services. We'll set up or convert your system to industry-leading platforms like QuickBooks Online or NetSuite, design a tailored chart of accounts, and create custom financial reporting packages. Our experts can operate across various small business software and ERPs, ensuring a solution that fits your unique needs."
    },
    {
      icon: MdBuild,
      title: "Financial Health and Cleanup",
      content: "Transform your financial record-keeping with our comprehensive accounting cleanup services. Our expert team meticulously examines your financial documents, identifying and resolving discrepancies while establishing robust accounting practices. We'll streamline your chart of accounts, enhance reporting systems, and deliver actionable insights that empower smarter business decisions. From precision auditing to strategic financial organization, we turn your financial records into a powerful tool for growth and clarity."
    },
    {
      icon: MdAccessibilityNew,
      title: "Revenue Recognition and Compliance",
      content: "Navigate the complex landscape of revenue recognition with our specialized consulting services. We dive deep into your unique business model, crafting tailored sales workflows that not only meet ASC 606 standards but transform your financial processes. Our expert team will optimize your systems, implementing automated integrations that eliminate manual errors and provide real-time financial visibility. From strategic assessment to seamless execution, we turn your revenue reporting from a challenge into a competitive advantage."
    },
    {
      icon: MdCode,
      title: "Invoice Management and Collections",
      content: "Let's optimize your cash flow. We'll handle everything from generating and sending invoices to providing collections support, ensuring you get paid faster. Our team performs weekly or monthly Point of Sale (POS) reconciliations with your accounting system, maintaining accuracy in your financial records. You can focus on growing your business while we manage the financial details."
    },
    {
      icon: MdPalette,
      title: "Accounts Payable and Expense Management",
      content: "Optimize your financial operations with our comprehensive Accounts Payable and expense management services, where we transform your financial workflow through expert bill processing, precise vendor tracking, and seamless transaction management across platforms like Bill.com and QuickBooks Online. Our dedicated team provides end-to-end financial solutions, handling everything from detailed bill coding and weekly AP reconciliations to intricate expense categorization, credit card transaction synchronization, and efficient employee reimbursement processing—delivering not just administrative support, but a strategic approach that gives you unparalleled visibility and control over your cash flow, ultimately empowering smarter business decisions and driving operational excellence."
    },
    {
      icon: MdDevices,
      title: "Strategic Financial Analysis and Reporting",
      content: "We go beyond standard month-end closes to provide deep insights into your business performance. Our team delivers customized financial reporting packages, conducts monthly review meetings to interpret results, and performs off-cycle modeling for strategic planning. We also support due diligence processes with specialized reporting and financial modeling, ensuring you're always prepared for critical business decisions and growth opportunities."
    }
  ];

  return (
    <div className="container mx-auto mb-10 mt-5 bg-white px-4 py-6 transition-all dark:bg-dark">
      {/* Row for h1 and p */}
      <div className="mb-8 items-start md:flex">
        {/* Heading (h1) */}
        <h1 className="mb-2 mr-5 text-3xl font-bold text-black dark:text-white sm:text-2xl md:text-3xl">
          Outsourced Accounting <br /> Services
        </h1>

        {/* Paragraph (p) */}
        <p className="text-sm text-gray-800 dark:text-gray-300 sm:text-base md:text-sm">
          Streamline your financial operations with our comprehensive outsourced
          accounting services. From meticulous record-keeping to insightful
          reporting, we provide the tools and expertise you need to make
          informed business decisions. Let us handle the numbers so you can
          focus on growing your business.
        </p>
      </div>

      {/* Responsive grid: 1 column on mobile, 2 columns on medium screens, 3 columns on desktop */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Accordion key={index} type="single" collapsible className="h-full">
            <AccordionItem value={`item-${index + 1}`} className="h-full">
              <AccordionTrigger className="flex w-full cursor-pointer items-center justify-center rounded-3xl border border-gray-300 p-6 hover:bg-gray-100 focus:outline-none dark:border-gray-700 dark:hover:bg-gray-600">
                <service.icon className="mr-3 text-xl text-black dark:text-white" />
                <span className="text-center text-black no-underline dark:text-white">
                  {service.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="h-full max-h-full overflow-hidden border-0 text-center transition-all duration-300 ease-in-out">
                <div className="mt-2 h-full rounded-xl border border-gray-300 bg-gray-100 p-4 text-center dark:border-gray-700 dark:bg-gray-800">
                  {service.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default AccountingServicesPage;