import SectionTitle from "../Common/SectionTitle";

const PrivacyPolicy = () => {
  return (
    <section className="relative  z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mt-9">
        <SectionTitle
          subtitle="Privacy Policy"
          title="Your Privacy Matters to Us"
          paragraph="We value your trust and are committed to protecting your personal and financial information. Please review our privacy policy to understand how we handle your data."
          width="640px"
          center
        />

        <div className="mt-[40px] space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Information We Collect
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We collect personal information you provide to us when you use
              our services, such as your name, contact details, financial
              records, and tax-related information. Additionally, we may
              automatically collect certain technical data, including IP
              address, browser type, and device information, when you interact
              with our website.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              How We Use Your Information
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              The information we collect is used to provide you with our
              bookkeeping services, maintain accurate financial records, comply
              with legal and regulatory requirements, and improve our
              offerings. We do not sell or rent your personal information to
              third parties.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Information Sharing and Disclosure
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We may share your information with trusted third-party service
              providers who assist us in delivering our services, such as tax
              software platforms or data storage providers. These third parties
              are required to maintain the confidentiality of your information
              and use it solely for the purposes specified by us. We may also
              disclose your information if required by law or to protect our
              legal rights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Data Security
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We implement robust technical and organizational measures to
              protect your data from unauthorized access, disclosure, alteration,
              or destruction. While we strive to protect your information, no
              data transmission over the internet can be guaranteed to be
              completely secure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Your Rights
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Under U.S. privacy laws, you have the right to access, correct, or
              delete your personal information held by us. To exercise these
              rights, please contact us at the email address provided below.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Updates to This Privacy Policy
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We encourage you
              to review this page periodically to stay informed about how we
              protect your data.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Contact Us
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at: <br />
              <strong>Email:</strong> privacy@yourbookkeeping.com <br />
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
