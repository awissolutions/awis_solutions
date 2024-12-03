import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faCalculator,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons"; // Solid icons

const Boarding = () => {
  const steps = [
    {
      title: "Introductory Call",
      description: "Call or text us now. Let’s discuss your situation, needs & objectives.",
      icon: faPhone,
    },
    {
      title: "Assessment",
      description: "We’ll dive deep into your operations and books to understand where we can help you best.",
      icon: faCalculator,
    },
    {
      title: "1 Week Results",
      description: "Our team gets to work quickly. In the first week you’ll see better financial systems, control and clarity.",
      icon: faCalendarAlt,
    },
  ];

  return (
    <section className="pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] ">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            You’re Just 3 Steps Away
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400" >
            It’s easy to get started. Let’s break down the 3 simple steps to get you the results you need.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 lg:mt-20 ">
          {steps.map((step, i) => (
            <div
              key={i}
              className="w-64 h-64 flex flex-col justify-center items-center   rounded-lg shadow-lg hover:shadow-xl transition"
              style={{
                backgroundColor: "rgb(23 37 84)", // Blue background color
                // border:"solid white 1px",
                color: "white", // Text color white
              }}
            >
              <FontAwesomeIcon
                icon={step.icon}
                style={{
                  fontSize: "2rem", // Icon size
                  marginBottom: "1rem",
                }}
                className="text-white"
              />
              <h3 className="text-lg font-semibold text-center">{step.title}</h3>
              <p className="mt-2 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boarding;
