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
  // Convert title to URL-friendly format
  const formatUrlTitle = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')  // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '');  // Remove non-alphanumeric characters except hyphens
  };

  return (
    <div
      className={`flex flex-col justify-between rounded-lg p-6 shadow-md ${bgColor} text-white`}
    >
      <div className="flex items-center space-x-3">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mt-4 text-sm">{description}</p>
      <a 
        href={`https://awissolutions.com/services/${formatUrlTitle(title)}`} 
        className="mt-4 self-end"
      >
        <button
          className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-200 focus:outline-none"
          aria-label={`Learn more about ${title}`}
        >
          →
        </button>
      </a>
    </div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <div className="dark:bg-dark-2">
      <div className="mx-52 grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
        <ServiceCard
          title="CFO Services"
          description="You need a partner that can steer you through pivotal moments. Through budgeting and forecasting, cash flow management, and strategic planning, our CFOs ensure your financial strategy is effective."
          bgColor="bg-gray-100 text-black"
          icon={<i className="fas fa-chart-line" />}
        />
        <ServiceCard
          title="Accounting"
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
        <ServiceCard
          title="Reporting Services"
          description="Gain actionable insights with comprehensive, customized financial reporting that provides clear visibility into your business performance."
          bgColor="bg-blue-500"
          icon={<i className="fas fa-file-alt" />}
        />
        <ServiceCard
          title="Bookkeeping Services"
          description="Maintain accurate, up-to-date financial records with our meticulous bookkeeping solutions, ensuring compliance and financial clarity."
          bgColor="bg-green-500"
          icon={<i className="fas fa-book" />}
        />
        <ServiceCard
          title="ERP Implementation & Consulting"
          description="Optimize your business processes with our expert ERP implementation and consulting services, tailored to streamline your operations and drive efficiency."
          bgColor="bg-indigo-600"
          icon={<i className="fas fa-industry" />}
        />
        <ServiceCard
          title="Demand & Procurement Management"
          description="Strategically manage your supply chain with our comprehensive demand forecasting and procurement solutions to reduce costs and improve operational efficiency."
          bgColor="bg-red-500"
          icon={<i className="fas fa-shopping-cart" />}
        />
        <ServiceCard
          title="Electronic Design Automation"
          description="Leverage cutting-edge electronic design automation tools and expertise to accelerate your product development and innovation cycles."
          bgColor="bg-teal-500"
          icon={<i className="fas fa-microchip" />}
        />
      </div>
    </div>
  );
};

export default ServicesGrid;