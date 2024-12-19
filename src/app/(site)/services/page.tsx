
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ServicesGrid from "@/components/services/ServicesGrid";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Services | Accounting  | Awis Solutions",
  description: "Accounting services",
};

const Page = () => {
  return (
    <>
      <div className="mt-40">
        {/* <Breadcrumb  /> */}

        {/* <Breadcrumb pageName="Terms of Service" /> */}
        <ServicesGrid />
      </div>
    </>
  );
};

export default Page;
