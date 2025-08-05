import React from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "./Data/Properties";
import { ArrowRight } from "lucide-react";

const FeaturedProperties = () => {
  const featuredProperties = properties.filter((property) => property.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium properties offering the best value and locations for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors duration-300 group"
          >
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
