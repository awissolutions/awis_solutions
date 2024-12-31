import React from "react";
import { Cpu, Layers, Code, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white py-20 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Design Automation & Inventor iLogic Solutions
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
              Streamline your design and manufacturing processes with our
              advanced CAD automation solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-slate-100 hover:text-black">
                Start Now
              </Button>
              <Button variant="outline" size="lg" className="dark:hover:bg-dark">
                Request Demo
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Cpu className="h-8 w-8 text-primary" />
                  <span className="font-semibold">CAD Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="h-8 w-8 text-primary" />
                  <span className="font-semibold">iLogic Scripting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-8 w-8 text-primary" />
                  <span className="font-semibold">Rapid Design Iterations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-8 w-8 text-primary" />
                  <span className="font-semibold">Automation Testing</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
