import { useEffect, useState, useMemo } from "react";
import Footer from "../Footer";
import PropertyCard from "../PropertyCard";

import { mockProperties } from "../Data/Property";
import { Button } from "@/components/ui/button";

const backgrounds = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
];

const SearchPage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("all");
  const [price, setPrice] = useState("all");

  // Rotate background every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filtered = useMemo(() => {
    return mockProperties.filter((p) => {
      const matchesLocation = !location || p.location.toLowerCase().includes(location.toLowerCase());
      const matchesType = type === "all" || p.type === type;
      const matchesPrice =
        price === "all" ||
        (price === "0-500" && p.price <= 500) ||
        (price === "500-1000" && p.price > 500 && p.price <= 1000) ||
        (price === "1000+" && p.price > 1000);
      return matchesLocation && matchesType && matchesPrice;
    });
  }, [location, type, price]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section with background image */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white transition-all duration-700"
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      >
        <div className="bg-black/60 w-full h-full absolute top-0 left-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Find Your Dream Home</h1>
          <p className="text-lg md:text-xl mb-6">Search from thousands of properties across Nigeria</p>

          {/* Search Filters */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md max-w-4xl mx-auto text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Location (e.g. Lagos)"
                className="p-2 border rounded"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <select
                className="p-2 border rounded"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="duplex">Duplex</option>
              </select>
              <select
                className="p-2 border rounded"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="all">Any Price</option>
                <option value="0-500">₦0 - ₦500k</option>
                <option value="500-1000">₦500k - ₦1M</option>
                <option value="1000+">₦1M+</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Search Results</h2>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">No properties match your filters.</p>
            <Button onClick={() => {
              setLocation('');
              setType('all');
              setPrice('all');
            }}>
              Reset Filters
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default SearchPage;
// import { useEffect, useState } from "react";
// import { mockProperties } from "../Data/Property";

// const backgrounds = [
//   "/images/bg1.jpg",
//   "/images/bg2.jpg",
//   "/images/bg3.jpg",
// ];

// const SearchPage = () => {
//   const [bgIndex, setBgIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % backgrounds.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center text-white p-10"
//       style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
//     >
//       <h1 className="text-4xl font-bold mb-6">Find Your Dream Home 🏠</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {mockProperties.map((property) => (
//           <div key={property.id} className="bg-white/20 backdrop-blur p-4 rounded shadow">
//             <img src={property.image} alt={property.title} className="w-full h-40 object-cover rounded" />
//             <h2 className="text-xl font-semibold mt-2">{property.title}</h2>
//             <p>{property.location}</p>
//             <p className="font-bold">{property.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;
