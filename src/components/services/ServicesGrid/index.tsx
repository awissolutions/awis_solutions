// components/ServicesGrid.tsx
import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bgColor,
  icon,
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-lg p-6 shadow-md ${bgColor} text-white`}
    >
      <div className="flex items-center space-x-3">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mt-4 text-sm">{description}</p>
      <button
        className="mt-4 self-end rounded-full bg-white px-4 py-2 text-black hover:bg-gray-200 focus:outline-none"
        aria-label={`Learn more about ${title}`}
      >
        →
      </button>
    </div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <div className="dark:bg-dark-2">
      <div className="mx-52 grid grid-cols-1 gap-6 p-6 md:grid-cols-2 ">
        <ServiceCard
          title="CFO Services"
          description="You need a partner that can steer you through pivotal moments. Through budgeting and forecasting, cash flow management, and strategic planning, our CFOs ensure your financial strategy is effective."
          bgColor="bg-gray-100 text-black"
          icon={<i className="fas fa-chart-line" />}
        />
        <ServiceCard
          title="Accounting Services"
          description="Minimize stress, save time and money, and impress stakeholders with streamlined accounting operations managed by your dedicated team."
          bgColor="bg-purple-600"
          icon={<i className="fas fa-calculator" />}
        />
        <ServiceCard
          title="Payroll Services"
          description="Streamline your payroll processes with our fast, accurate, and compliant solutions tailored for your business needs."
          bgColor="bg-yellow-400 text-black"
          icon={<i className="fas fa-money-check" />}
        />
        <ServiceCard
          title="Business Tax Services"
          description="Take the guesswork out of taxes. Our expert services optimize your strategy, maximize benefits, and minimize liabilities, giving you peace of mind."
          bgColor="bg-yellow-100 text-black"
          icon={<i className="fas fa-dollar-sign" />}
        />
      </div>
    </div>
  );
};

export default ServicesGrid;
