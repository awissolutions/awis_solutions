
import { LineChart, Download, AlertCircle, Users, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';


const ReportingCTA = () => (
  <section className="bg-primary text-white py-20">
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Reporting?</h2>
      <p className="text-xl mb-8">Join thousands of companies that trust our platform for their reporting needs</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary">
          Get Started!
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
      </div>
    </div>
  </section>
);

export default ReportingCTA;