import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search, Filter, Edit, Trash2, Eye, MapPin, Calendar, Plus, MoreHorizontal
} from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Listings = () => {
  const location = useLocation();
  const newListing = location.state?.newListing;

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [listings, setListings] = useState([
    ...(newListing ? [newListing] : []),
    {
      id: 1, title: "Modern Downtown Apartment", price: "$450,000",
      location: "Downtown District", image: property1,
      status: "Published", views: 124, date: "2024-01-15",
      bedrooms: 2, bathrooms: 2, parking: 1, type: "Apartment"
    },
    {
      id: 2, title: "Family House with Garden", price: "$650,000",
      location: "Suburb Heights", image: property2,
      status: "Published", views: 89, date: "2024-01-10",
      bedrooms: 4, bathrooms: 3, parking: 2, type: "House"
    },
    {
      id: 3, title: "Elegant Duplex", price: "$550,000",
      location: "Green Valley", image: property3,
      status: "Draft", views: 0, date: "2024-01-08",
      bedrooms: 3, bathrooms: 2, parking: 2, type: "Duplex"
    },
  ]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this listing?");
    if (confirm) {
      setListings(prev => prev.filter(listing => listing.id !== id));
    }
  };

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || listing.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Listings</h1>
          <p className="text-muted-foreground">Manage and track all your property listings</p>
        </div>
        <NavLink to="/add-property">
          <Button><Plus className="mr-2 h-4 w-4" /> Add Property</Button>
        </NavLink>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title or location..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {["All", "Published", "Draft", "Sold"].map(status => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredListings.map((listing) => (
          <Card key={listing.id} className="shadow-card hover:shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge>{listing.status}</Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(listing.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">{listing.title}</h3>
              <p className="text-2xl font-bold">{listing.price}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" /> {listing.location}
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{listing.bedrooms} bed</span>
                <span>{listing.bathrooms} bath</span>
                <span>{listing.parking} parking</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span><Eye className="inline mr-1" /> {listing.views} views</span>
                <span><Calendar className="inline mr-1" /> {new Date(listing.date).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Listings;
