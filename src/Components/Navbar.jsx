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
// If you're using React Router:
// import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "properties", label: "About" },
    { to: "about", label: "Properties" },
    { to: "contact", label: "Contact" },
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
          <div className="hidden md:flex space-x-4">
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

            {/* Dashboard link - only visible when signed in */}
            <SignedIn>
              {/* Using regular <a>. If using React Router, switch to <RouterLink to="/dashboard"> */}
              <a
                href="/dashboard"
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </a>
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
                  className="cursor-pointer hover:text-amber-500 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Dashboard Link (signed in only) */}
            <SignedIn>
              <li>
                <RouterLink
                  to="Dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-600 hover:text-amber-600 transition"
                >
                  Dashboard
                </RouterLink>
              </li>
            </SignedIn>

            <li>
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
              >
                <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-full shadow hover:bg-amber-600 transition">
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
