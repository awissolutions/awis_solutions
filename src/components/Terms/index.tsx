import SectionTitle from "../Common/SectionTitle";

const TermsOfService = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mt-4">
        <SectionTitle
          subtitle="Terms of Service"
          title="Our Terms of Service"
          paragraph="These terms govern your access to and use of our bookkeeping services and website. By engaging with our services, you agree to be bound by these terms."
          width="640px"
          center
        />

        <div className="mt-[40px] space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Acceptance of Terms
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              By using our website and services, you agree to comply with and
              be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services or website.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Description of Services
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our company provides bookkeeping services, including financial
              record management, reconciliation, and reporting. The services
              offered are subject to the details agreed upon in our service
              agreement with you.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              User Responsibilities
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              You are responsible for providing accurate and complete
              information necessary for us to deliver our services. Failure to
              provide timely or correct data may result in delays or errors, for
              which we are not liable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Fees and Payment
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our services are provided at the rates agreed upon in the service
              agreement. Payment terms will be outlined in your agreement. Any
              overdue payments may be subject to late fees as specified in the
              agreement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Limitation of Liability
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              To the fullest extent permitted by law, our company shall not be
              liable for any indirect, incidental, or consequential damages
              arising from the use of our services or website. Our liability
              will not exceed the amount you paid for our services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Termination of Services
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Either party may terminate the service agreement at any time by
              providing written notice. Upon termination, any outstanding fees
              for services rendered must be paid in full.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Confidentiality
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We are committed to maintaining the confidentiality of your
              financial and business information. All data shared with us will
              be used solely for the purpose of delivering our services and will
              not be disclosed to third parties without your consent, except as
              required by law.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Changes to These Terms
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We reserve the right to modify these Terms of Service at any time.
              Any changes will be posted on this page with a revised date. Your
              continued use of our services after changes are posted indicates
              your acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Governing Law
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              These Terms of Service are governed by the laws of [where company is registred]. Any disputes arising from these terms will be
              resolved in the courts of [where company is registred].
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              Contact Us
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              If you have any questions or concerns about these Terms of
              Service, please contact us: <br />
              <strong>Email:</strong> contact@awissolutions.com <br />
              <strong>Phone:</strong> (+92) 343 007856
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
