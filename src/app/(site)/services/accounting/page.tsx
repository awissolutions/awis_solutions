import Breadcrumb from "@/components/Common/Breadcrumb";
import LegalNotice from "@/components/LegalNotice";
import Accounting from "@/components/services/Accounting";
import TermsOfService from "@/components/Terms";
import OutsourcedAccountingServices from "@/components/services/OutsourcedAccountingServices";
import { Metadata } from "next";
import WhyOutsourcedAccounting from "@/components/services/WhyOutsourcedAccounting";
import AccountingFaq from "@/components/services/AccountingFaq";
import ChooseOutsource from "@/components/services/ChooseOutsource";

export const metadata: Metadata = {
  title: "Services | Accounting  | Awis Solutions",
  description: "Accounting services",
};

const Page = () => {
  return (
    <>
          <Breadcrumb pageName="accounting services" />

      {/* <Breadcrumb pageName="Terms of Service" /> */}
      <Accounting />
      <OutsourcedAccountingServices />
      <WhyOutsourcedAccounting />
      <ChooseOutsource/>
      <AccountingFaq/>
    </>
  );
};

export default Page;
