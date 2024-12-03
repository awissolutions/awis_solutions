import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faClock,
  faLightbulb,
  faHandshake,
  faUsers,
  faMaximize
} from "@fortawesome/free-solid-svg-icons"; // Use solid icons

const WhyUs = () => {
  const features = [
    {
      title: "Accuracy and Reliability",
      description:
        "Our meticulous attention to detail guarantees your financial records are always accurate and up-to-date.",
      icon: faBullseye,
    },
    {
      title: "Time and Cost Savings",
      description:
        "Outsource your financial tasks to us and focus on growing your business while reducing overhead costs.",
      icon: faClock,
    },
    {
      title: "Strategic Insights",
      description:
        "We don’t just do your finances; we provide valuable insights to help you make informed business decisions.",
      icon: faLightbulb,
    },
    {
      title: "Reliable Support",
      description:
        "Count on us for consistent, reliable support to keep your financial operations running smoothly.",
      icon: faHandshake,
    },
    {
      title: "Expert Team",
      description:
        "Work with seasoned professionals who understand the complexities of financial management.",
      icon: faUsers,
    },
    {
      title: "Tailored Solutions",
      description:
        "Get customized financial strategies designed to meet your specific business needs and goals.",
      icon: faMaximize,
    },
  ];

  return (
    <section
      id="why-us"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white">
            Why Choose awis solutions Bookkeeping And Accounting Services?
          </h2>
          <p className="mt-4 text-base text-body-color dark:text-dark-6">
            At awis solutions, we understand the unique challenges faced by small
            business owners. Our services go beyond numbers, providing value
            that moves your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-primary dark:hover:bg-blue-950 p-6 text-black shadow-lg transition hover:bg-gray-3 dark:hover:bg-primary dark:text-white"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="mb-4 text-3xl text-black dark:text-white"
              />
              <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
