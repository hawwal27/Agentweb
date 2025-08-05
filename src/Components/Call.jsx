import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import FeaturedProperties from "./FeaturedProperties";
import PropertyCard from "./PropertyCard";
import Footer from "./Footer";

const Call = () => {
  return (
    <div>
        <Navbar />
        
      <section id="home">
      <Hero />
      </section>

      <section id="properties">
        <FeaturedProperties />
      </section>

      <section id="about">
        <PropertyCard />
      </section>
      <Footer />
    </div>
  );
};

export default Call;
