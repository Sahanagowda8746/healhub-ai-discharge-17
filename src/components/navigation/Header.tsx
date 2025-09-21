import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Shield, Users, Brain } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Providers", href: "#providers" },
    { name: "For Patients", href: "#patients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-healthcare">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Heart className="h-8 w-8 text-primary" />
              <Brain className="h-4 w-4 text-secondary absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Inspire Health Hub</h1>
              <p className="text-xs text-muted-foreground">Medical Discharge AI</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-healthcare font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-healthcare font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full">
                Login
              </Button>
              <Button variant="hero" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;