import React from "react";
import { Heart, Brain, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "For Providers", href: "#providers" },
        { name: "For Patients", href: "#patients" },
        { name: "Pricing", href: "#pricing" },
      ]
    },
    {
      title: "Resources", 
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Knowledge Center", href: "#knowledge" },
        { name: "Case Studies", href: "#cases" },
        { name: "Blog", href: "#blog" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Contact Us", href: "#contact" },
        { name: "Training", href: "#training" },
        { name: "System Status", href: "#status" },
        { name: "Schedule Demo", href: "#demo" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Partners", href: "#partners" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-8 w-8 text-primary" />
                <Brain className="h-4 w-4 text-secondary absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Inspire Health Hub</h3>
                <p className="text-sm text-gray-300">Medical Discharge AI</p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-sm">
              Transforming healthcare with AI-powered discharge management. 
              Ensuring better outcomes for patients and efficiency for providers.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@inspirehealthhub.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">1-800-INSPIRE (467-7473)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Healthcare Innovation District</span>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div className="text-xs font-semibold text-white">HIPAA</div>
                <div className="text-xs text-gray-300">Compliant</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div className="text-xs font-semibold text-white">SOC 2</div>
                <div className="text-xs text-gray-300">Certified</div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © {currentYear} Inspire Health Hub. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-gray-300 text-sm">
                🏥 Trusted by 500+ Healthcare Facilities
              </div>
              <div className="text-gray-300 text-sm">
                💙 Serving 50,000+ Patients
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              This platform is designed to assist healthcare professionals and should not replace professional medical judgment.
              Always consult with qualified healthcare providers for medical decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;