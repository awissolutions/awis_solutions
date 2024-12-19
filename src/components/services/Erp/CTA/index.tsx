// Call to Action Component
const CTA = () => {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-6 text-3xl font-bold">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-8 text-lg">
          Schedule a free consultation with our ERP experts today
        </p>
        <div className="flex justify-center gap-4">
          <button className="rounded-lg bg-white px-8 py-3  text-dark dark:text-dark hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
