
import { Metadata } from "next";
import ServicesGrid from "@/components/services/ServicesGrid";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Common/Breadcrumb";
export const metadata: Metadata = {
  title: "Services | Accounting  | Awis Solutions",
  description: "Accounting services",
};

const Page = () => {
  return (
    <>
      <div className="mt-40">
        {/* <Breadcrumb  /> */}

        <Breadcrumb pageName="services" />
        <ServicesGrid />
      </div>
    </>
  );
};

export default Page;
