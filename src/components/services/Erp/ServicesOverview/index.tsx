
import { ChevronDown, ArrowRight, Check, Users, BarChart, Clock, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    {
      title: "ERP Implementation",
      description: "End-to-end implementation of leading ERP solutions tailored to your business needs",
      icon: <BarChart className="w-12 h-12 text-primary" />,
    },
    {
      title: "Business Process Optimization",
      description: "Streamline and enhance your operations through careful analysis and optimization",
      icon: <Users className="w-12 h-12 text-primary" />,
    },
    {
      title: "Change Management",
      description: "Ensure smooth transition and adoption with our comprehensive change management approach",
      icon: <Clock className="w-12 h-12 text-primary" />,
    },
    {
      title: "Training & Support",
      description: "Comprehensive training and ongoing support for your team's success",
      icon: <Shield className="w-12 h-12 text-primary" />,
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300">Comprehensive ERP solutions to drive your business forward</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesOverview;