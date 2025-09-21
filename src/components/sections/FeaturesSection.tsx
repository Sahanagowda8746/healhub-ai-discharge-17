import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  FileText, 
  Users, 
  Bell, 
  Shield, 
  Clock,
  Activity,
  MessageSquare,
  ChevronRight
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Discharge Planning",
      description: "Automatically generate personalized discharge instructions based on comprehensive patient data analysis.",
      benefits: ["Custom care plans", "Risk assessment", "Medication optimization"],
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      icon: FileText,
      title: "Automated Documentation",
      description: "Generate all necessary paperwork including discharge summaries, prescriptions, and referrals in real-time.",
      benefits: ["HIPAA compliant", "Error reduction", "Time savings"],
      color: "text-trust",
      bgColor: "bg-trust/10"
    },
    {
      icon: Bell,
      title: "Real-Time Updates & Notifications",
      description: "Keep patients and care teams informed at every stage of the discharge process with intelligent notifications.",
      benefits: ["Instant alerts", "Progress tracking", "Team coordination"],
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    },
    {
      icon: Activity,
      title: "Post-Discharge Monitoring",
      description: "AI-driven reminders and support for medication schedules, follow-up appointments, and recovery milestones.",
      benefits: ["24/7 monitoring", "Recovery tracking", "Intervention alerts"],
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Ensure all medical discharge forms and prescriptions are accurate and compliant with healthcare regulations.",
      benefits: ["HIPAA compliant", "Audit trails", "Data encryption"],
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: MessageSquare,
      title: "Personalized Patient Care",
      description: "Interactive patient dashboard with AI support for immediate answers and continuous engagement.",
      benefits: ["24/7 AI chat", "Custom dashboard", "Family access"],
      color: "text-primary",
      bgColor: "bg-primary-light"
    }
  ];

  return (
    <section id="features" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-healthcare mb-4">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Core Features</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Seamless Discharge
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI platform transforms the discharge process with intelligent automation, 
            ensuring better outcomes for patients and efficiency for healthcare providers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group p-6 h-full bg-white/80 backdrop-blur-sm border-0 shadow-healthcare hover:shadow-healthcare-medium transition-all duration-300 slide-up">
              <div className="space-y-4">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-success" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-healthcare-strong max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Discharge Process?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of healthcare providers who trust our AI platform for better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Free Trial
              </Button>
              <Button variant="medical" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;