import Breadcrumb from "@/components/Common/Breadcrumb";
import LegalNotice from "@/components/LegalNotice";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Legal Notice | Awis Solutions",
  description: "Legal Notice",
};

const Page = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Legal Notice" /> */}
      <LegalNotice/>
    </>
  );
};

export default Page;
