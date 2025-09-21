import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-healthcare-ai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-healthcare">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm font-medium text-foreground">HIPAA Compliant & Secure</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Streamline Your{" "}
                <span className="bg-gradient-to-r from-primary to-trust bg-clip-text text-transparent">
                  Discharge Process
                </span>{" "}
                with AI-Powered Assistance
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Effortless, Accurate, and Compassionate Discharge Management – For Patients and Healthcare Providers. 
                Reduce errors, speed up procedures, and provide exceptional post-discharge support.
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: "⚡", text: "50% Faster Discharge" },
                { icon: "🎯", text: "99% Accuracy Rate" },
                { icon: "💙", text: "Patient-Centered Care" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-healthcare">
                  <span className="text-2xl">{benefit.icon}</span>
                  <span className="font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Discharge Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="medical" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">Trusted by</div>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-white/70 backdrop-blur-sm rounded-md text-sm font-medium text-foreground">500+ Hospitals</div>
                <div className="px-3 py-1 bg-white/70 backdrop-blur-sm rounded-md text-sm font-medium text-foreground">50,000+ Patients</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-healthcare-strong">
              <img
                src={heroImage}
                alt="Healthcare AI Dashboard showing discharge planning interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-healthcare-medium">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">AI Active</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-healthcare-medium">
              <div className="text-2xl font-bold text-primary">98.7%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;