import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faComments,
  faHandshake,
  faShoppingCart,
  faChartBar,
  faLaptop,
  faHome,
  faWrench,
} from "@fortawesome/free-solid-svg-icons"; // Use solid icons

const Industries = () => {
  const industriesData = [
    { title: "E-commerce & Online Businesses", icon: faShoppingCart },
    { title: "Contractors", icon: faWrench },
    { title: "Marketing & SEO Companies", icon: faChartBar },
    { title: "Hospitality", icon: faUtensils },
    { title: "Real Estate & Property Management", icon: faHome },
    { title: "Interpreting & Translation", icon: faComments },
    { title: "Technology & Software Companies", icon: faLaptop },
    { title: "Non-Profit Organizations", icon: faHandshake },
  ];

  return (
    <section className="pb-8 pt-20 dark:bg-slate-800 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Industries We Serve
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We provide specialized bookkeeping and accounting services for a
            variety of industries, including:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 lg:mt-20">
          {industriesData.map((industry, i) => (
            <div
              key={i}
              className="w-64 h-64 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition"
              style={{
                backgroundColor: "rgb(55, 88, 249)",
                // border:"solid white 1px",
                color: "white",
              }}
            >
              {/* Font Awesome Solid Icon */}
              <FontAwesomeIcon
                icon={industry.icon}
                style={{
                  fontSize: "2rem", // Icon size
                  marginBottom: "1rem",
                }}
                className="text-white"
              />
              {/* Title */}
              <h3 className="text-lg font-semibold text-center">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
