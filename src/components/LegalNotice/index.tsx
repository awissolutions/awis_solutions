import SectionTitle from "../Common/SectionTitle";

const LegalNotice = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Legal Notice"
          title="Important Legal Information"
          paragraph="This page outlines the legal terms and conditions that govern your use of our website and services. Please review it carefully to ensure you understand your rights and obligations."
          width="640px"
          center
        />

        <div className="mt-[40px] space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Company Information
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              <strong>Company Name:</strong> Awis Solutions <br />
              <strong>Business Address:</strong> 123 Main Street, Suite 101,
              City, State, ZIP Code <br />
              <strong>Email:</strong> contact@awissolutions.com <br />
              <strong>Phone:</strong> (+92) 343 0057856 <br />
              <strong>Business Registration Number:</strong> 987654321 <br />
              <strong>Tax Identification Number (TIN):</strong> 12-3456789
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Intellectual Property
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              All content on this website, including text, images, graphics,
              logos, and code, is the property of Your Bookkeeping Co. or its
              licensors. Unauthorized use, reproduction, or distribution of this
              content is strictly prohibited. Any trademarks displayed are the
              property of their respective owners.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Disclaimer
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              The information provided on this website is for general
              informational purposes only and does not constitute professional
              advice. While we strive to ensure accuracy, we do not guarantee
              the completeness or reliability of the information. For specific
              financial or legal advice, please consult a qualified
              professional.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Limitation of Liability
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Your Bookkeeping Co. shall not be held liable for any damages
              resulting from the use or inability to use this website, including
              but not limited to direct, indirect, incidental, or consequential
              damages. This limitation applies to the fullest extent permitted
              by applicable law.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              External Links
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our website may contain links to third-party websites. These links
              are provided for your convenience, and we do not endorse or assume
              responsibility for the content or practices of these external
              sites. We encourage you to review their terms and privacy policies
              before interacting with them.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Governing Law
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              This Legal Notice and any disputes arising from the use of this
              website are governed by the laws of [where company is registred].
              By accessing this website, you agree to submit to the exclusive
              jurisdiction of the courts located in [where company is
              registred].
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Updates to This Legal Notice
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We reserve the right to update this Legal Notice at any time to
              reflect changes in our practices or legal requirements. Please
              review this page periodically to stay informed of any updates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Contact Us
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              If you have any questions about this Legal Notice or our website,
              please contact us at: <br />
              <strong>Email:</strong> contact@awissolutions.com <br />
              <strong>Phone:</strong> (+92) 343 0057856
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;
