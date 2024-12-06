import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import LegalNotice from "@/components/LegalNotice";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Legal Notice | Awis Solutions",
  description: "Legal Notice",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Legal Notice" />
      <LegalNotice/>
    </>
  );
};

export default PricingPage;
