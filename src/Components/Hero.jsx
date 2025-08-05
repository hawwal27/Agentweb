"use client";

import { useEffect, useState } from "react";
import { Search, MapPin, Home as HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const backgroundImages = [
  "https://cdn.houseplansservices.com/content/e8f9m1vq6pnjhtd5h1u0tj16cc/w575.jpg?v=9",
  "",
  "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative text-primary-foreground transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0 transition-opacity duration-1000" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Next
            <span className="block text-accent"> Lovable Home</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover amazing properties with trusted agents across Nigeria. Your
            dream home is just a search away.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-2xl backdrop-blur-sm bg-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Location (e.g., Lagos, Abuja)"
                  className="pl-10 h-12 text-gray-600"
                />
              </div>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="duplex">Duplex</SelectItem>
                  <SelectItem value="office">Office Space</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500k">₦0 - ₦500k</SelectItem>
                  <SelectItem value="500k-1m">₦500k - ₦1M</SelectItem>
                  <SelectItem value="1m-2m">₦1M - ₦2M</SelectItem>
                  <SelectItem value="2m-5m">₦2M - ₦5M</SelectItem>
                  <SelectItem value="5m+">₦5M+</SelectItem>
                </SelectContent>
              </Select>

              <Link to='/search'>
                <Button
                  size="lg"
                  className="h-12 bg-primary hover:bg-primary-dark"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-accent/20 rounded-full p-4 mb-4">
              <HomeIcon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">500+ Properties</h3>
            <p className="opacity-80">Wide range of verified listings</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-accent/20 rounded-full p-4 mb-4">
              <Search className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
            <p className="opacity-80">Find exactly what you're looking for</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-accent/20 rounded-full p-4 mb-4">
              <MapPin className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
            <p className="opacity-80">Properties in the best neighborhoods</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
