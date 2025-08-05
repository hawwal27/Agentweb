import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "../Components/ui/badge";

const PropertyCardAlt = () => {
  const sampleProperty = {
    id: "sample-1",
    title: "Modern 3 Bedroom Apartment",
    location: "Lagos, Nigeria",
    price: "₦1,200,000",
    image: "https://www.samslist.us/wp-content/uploads/2020/11/cool-house-pool-arq-pinterest_63660.jpg", // Make sure this exists in /public/images
    bedrooms: 3,
    bathrooms: 2,
    area: "120 sqm",
    type: "Apartment",
    featured: true,
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56">
        <img
          src={sampleProperty.image}
          alt={sampleProperty.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Type Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant={sampleProperty.featured ? "default" : "secondary"} className="capitalize font-semibold">
            {sampleProperty.type}
          </Badge>
        </div>

        {/* Featured Tag */}
        {sampleProperty.featured && (
          <div className="absolute top-4 left-28 z-10">
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 p-2 bg-card/80 rounded-full hover:bg-card z-10">
          <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500" />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
            {sampleProperty.title}
          </h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{sampleProperty.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{sampleProperty.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{sampleProperty.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{sampleProperty.area}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-bold text-primary">{sampleProperty.price}</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary-dark">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardAlt;
