import Breadcrumb from "@/components/Common/Breadcrumb";
import LegalNotice from "@/components/LegalNotice";
import TermsOfService from "@/components/Terms";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Legal Notice | Awis Solutions",
  description: "Legal Notice",
};

const Page = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Terms of Service" /> */}
      <TermsOfService/>
    </>
  );
};

export default Page;
