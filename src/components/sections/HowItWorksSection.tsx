import React from "react";
import { Card } from "@/components/ui/card";
import { 
  FileCheck, 
  Brain, 
  Users, 
  Activity,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: FileCheck,
      title: "Intake & Assessment",
      description: "Our AI assistant gathers comprehensive health details from hospital records or direct input to create a complete patient profile.",
      details: [
        "Automatic data extraction from EHR systems",
        "Patient questionnaire integration", 
        "Medical history analysis",
        "Risk factor identification"
      ],
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      step: "02", 
      icon: Brain,
      title: "AI Discharge Plan Generation",
      description: "Advanced AI algorithms draft personalized discharge instructions, medications, and comprehensive care guidelines based on the patient's specific condition.",
      details: [
        "Personalized medication schedules",
        "Recovery milestone planning",
        "Risk-based care protocols",
        "Follow-up appointment scheduling"
      ],
      color: "text-trust",
      bgColor: "bg-trust/10"
    },
    {
      step: "03",
      icon: Users,
      title: "Real-Time Collaboration", 
      description: "Care providers can review, adjust, and approve the AI-generated plan with seamless collaboration tools before sending to patients.",
      details: [
        "Multi-provider review system",
        "Real-time plan modifications",
        "Approval workflow management",
        "Secure team communication"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    },
    {
      step: "04",
      icon: Activity,
      title: "Post-Discharge Support",
      description: "Continuous AI monitoring sends personalized reminders, tracks recovery progress, and connects with healthcare providers as needed.",
      details: [
        "Automated medication reminders",
        "Recovery progress tracking",
        "24/7 AI support chat",
        "Emergency alert system"
      ],
      color: "text-success", 
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-light/50 px-4 py-2 rounded-full shadow-healthcare mb-4">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">How It Works</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Simple Process,{" "}
            <span className="bg-gradient-to-r from-primary to-trust bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our four-step process ensures comprehensive, accurate, and compassionate discharge management 
            from initial assessment to complete recovery support.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="relative overflow-hidden bg-white border-0 shadow-healthcare hover:shadow-healthcare-medium transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex p-4 rounded-2xl ${step.bgColor}`}>
                        <step.icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          Step {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Indicator */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className={`w-32 h-32 rounded-full ${step.bgColor} flex items-center justify-center`}>
                        <step.icon className={`h-16 w-16 ${step.color}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-healthcare">
                        <span className="text-2xl font-bold text-primary">{step.step}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-healthcare">
                      <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-light to-accent rounded-2xl p-8 shadow-healthcare-strong">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              See Our AI Platform in Action
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience firsthand how our intelligent discharge management system can transform 
              your healthcare workflow and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-healthcare">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Provider Rating</div>
              </Card>
              <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-healthcare">
                <div className="text-2xl font-bold text-secondary">50%</div>
                <div className="text-sm text-muted-foreground">Time Savings</div>
              </Card>
              <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-healthcare">
                <div className="text-2xl font-bold text-success">99.7%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;