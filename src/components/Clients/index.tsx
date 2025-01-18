import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-auto ">
        <div className="mx-1 flex flex-wrap items-center justify-center gap-2 xl:gap-1">
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
