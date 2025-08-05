import PropertyCard from "./PropertyCard";
import { properties } from "./Data/Properties";
import { Button } from "./ui/button";
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
          <Button
            size="lg"
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
