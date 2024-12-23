import React from 'react';
import { ShoppingCart, TrendingUp, FileText, Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Hero ()  {
  return(
  <section className="bg-white dark:bg-dark py-20">
    <div className="container max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Streamline Your Procurement Process
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            End-to-end procurement management solution for modern businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start ">
            <Button size="lg" className='bg-primary '>
              Request Demo
            </Button>
            
          </div>
        </div>
        <div className="flex-1">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-8 h-8 text-primary" />
                <span className="font-semibold">Automated Ordering</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="font-semibold">Demand Forecasting</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-8 h-8 text-primary" />
                <span className="font-semibold">Contract Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-8 h-8 text-primary" />
                <span className="font-semibold">Process Automation</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>)
}