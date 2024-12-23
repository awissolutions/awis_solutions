import React from "react";
import { Cpu, Layers, Code, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Hero  ()  {
  return(
  <section className="bg-white py-20 dark:bg-gray-800">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Advanced Electronic Design Automation
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Accelerate your chip design workflow with powerful EDA tools
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button size="lg">Start Trial</Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Cpu className="h-8 w-8 text-primary" />
                <span className="font-semibold">RTL Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-8 w-8 text-primary" />
                <span className="font-semibold">Physical Layout</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-8 w-8 text-primary" />
                <span className="font-semibold">Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-8 w-8 text-primary" />
                <span className="font-semibold">Power Analysis</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
)}
