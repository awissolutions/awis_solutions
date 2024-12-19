
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, TechCorp",
      content: "The ERP implementation transformed our operations. We've seen a 40% increase in efficiency.",
      image: "/images/testimonials/author-03.png"
    },
    {
      name: "Sarah Johnson",
      position: "COO, Manufacturing Inc",
      content: "Professional team, smooth implementation, and outstanding results. Highly recommended!",
      image: "/images/testimonials/author-02.png"
    },
    {
      name: "Michael Brown",
      position: "CTO, Global Solutions",
      content: "Their expertise in change management made our transition seamless and successful.",
      image: "/images/testimonials/author-01.png"
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-300">See what our clients say about working with us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;