import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Waqar Ahmed Syed",
    designation: "ERP Implementation Expert",
    image: "/images/team/waqar.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    linkedinLink:"/#"
  },
  {
    id: 2,
    name: "Sheraz Hashmi",
    designation: "Accounting and Finance Specialist",
    image: "/images/team/sheraz.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    linkedinLink:"/#"

  },
  {
    id: 3,
    name: "Adnan Zahid",
    designation: "Demand and Procurement Manager",
    image: "/images/team/awis2.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    linkedinLink:"/#"

  },
  {
    id: 4,
    name: "Ikram Younas",
    designation: "Corporate Reporting and ERP Consultant",
    image: "/images/team/user4.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
    linkedinLink: "/#"
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-2 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph=""
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center ">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
