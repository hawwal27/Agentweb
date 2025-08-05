

export type Property = {
  id: string;
  title: string;
  location: string;
  price: number; // stored as number for filtering/sorting
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  featured?: boolean;
  description?: string;
  amenities?: string[];
};

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Luxury 3-Bedroom Apartment in Victoria Island",
    location: "Victoria Island, Lagos",
    price: 800000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 3,
    bathrooms: 3,
    area: "120 sqm",
    type: "Apartment",
    featured: true,
    description: "Modern luxury apartment with stunning ocean views, fully furnished with premium amenities.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Swimming Pool", "Gym"]
  },
  {
    id: "2",
    title: "Spacious 4-Bedroom Duplex in Lekki",
    location: "Lekki Phase 1, Lagos",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 4,
    bathrooms: 4,
    area: "200 sqm",
    type: "Duplex",
    featured: true,
    description: "Beautiful duplex in a serene environment with modern facilities and ample parking space.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Garden", "Balcony"]
  },
  {
    id: "3",
    title: "Executive 2-Bedroom Flat in Ikoyi",
    location: "Ikoyi, Lagos",
    price: 650000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 2,
    bathrooms: 2,
    area: "85 sqm",
    type: "Apartment",
    featured: false,
    description: "Well-maintained apartment in prime Ikoyi location with easy access to business districts.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Air Conditioning"]
  },
  {
    id: "4",
    title: "Modern Office Space in Abuja",
    location: "Central Business District, Abuja",
    price: 450000,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 0,
    bathrooms: 2,
    area: "150 sqm",
    type: "Office",
    featured: false,
    description: "Professional office space perfect for growing businesses with modern amenities.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Conference Room", "Reception"]
  },
  {
    id: "5",
    title: "Cozy 1-Bedroom Studio in Surulere",
    location: "Surulere, Lagos",
    price: 250000,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 1,
    bathrooms: 1,
    area: "45 sqm",
    type: "Studio",
    featured: false,
    description: "Perfect starter home for young professionals with all essential amenities nearby.",
    amenities: ["WiFi", "Security", "Generator", "Kitchen"]
  },
  {
    id: "6",
    title: "Family 5-Bedroom House in Magodo",
    location: "Magodo, Lagos",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bedrooms: 5,
    bathrooms: 5,
    area: "300 sqm",
    type: "House",
    featured: true,
    description: "Spacious family home with large compound and modern facilities in a quiet neighborhood.",
    amenities: ["WiFi", "Parking", "Security", "Generator", "Garden", "Boys Quarter", "Swimming Pool"]
  }
];
