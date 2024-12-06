import SectionTitle from "../Common/SectionTitle";

const PrivacyPolicy = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mt-9">
        <SectionTitle
          subtitle="Privacy Policy"
          title="Your Privacy Matters to Us"
          paragraph="We value your trust and are committed to protecting any information you share with us. Please review our privacy policy to understand how we handle your data."
          width="640px"
          center
        />

        <div className="mt-[40px] space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Information We Collect
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our website does not require you to create an account or provide payment information. However, we may collect certain technical data, such as your IP address, browser type, and device information, to enhance your browsing experience. Additionally, if you contact us directly, we may collect your name, email address, or any other information you choose to provide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              How We Use Your Information
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              The information we collect is used to improve our website, respond to your inquiries, and ensure our services are functioning optimally. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Information Sharing and Disclosure
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We do not share your personal information with third parties unless required by law or to protect our rights. Any technical data collected may be shared with service providers who assist us in operating our website, under strict confidentiality agreements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Data Security
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We use appropriate security measures to protect any data collected through our website. While we strive to safeguard your information, please note that no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Your Rights
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              If you have shared personal information with us (e.g., via direct contact), you have the right to request access, correction, or deletion of your data. To exercise these rights, please contact us using the details below.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Updates to This Privacy Policy
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly to stay informed about how we protect your information.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Contact Us
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at: <br />
              <strong>Email:</strong> contact@awissolutions.com <br />
              <strong>Phone:</strong> (+92)  343 0057856
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
