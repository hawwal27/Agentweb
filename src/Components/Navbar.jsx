import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Home, Phone, Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home", type: "scroll" },
    { to: "properties", label: "About", type: "scroll" },
    { to: "about", label: "Properties", type: "scroll" },
    { to: "contact", label: "Contact", type: "scroll" },
  ];

  return (
    <nav className="bg-card border-b sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Home className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary">clozagent</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Dashboard link (desktop) */}
            <SignedIn>
              <RouterLink
                to="/dashboard"
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </RouterLink>
            </SignedIn>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact Agent Button */}
            <button className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              Contact Agent
            </button>

            {/* Auth Buttons */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary-dark transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-800 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-primary transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Dashboard link (mobile) */}
            <SignedIn>
              <li>
                <RouterLink
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-600 hover:text-primary transition"
                >
                  Dashboard
                </RouterLink>
              </li>
            </SignedIn>

            {/* CTA on mobile */}
            <li>
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
              >
                <button className="mt-4 bg-primary text-white px-5 py-2 rounded-full shadow hover:bg-primary-dark transition">
                  Browse Homes
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
