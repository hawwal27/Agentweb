import React from "react";
import { NavLink } from "react-router-dom";
import {
  Building2,
  Eye,
  DollarSign,
  TrendingUp,
  Plus,
  Calendar,
  MapPin
} from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

// Reusable Components (simplified versions)

// Button
function Button({ children, className = "", variant = "default", ...props }) {
  const baseStyle =
    "inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all";
  const variants = {
    default: "bg-primary text-white hover:opacity-90",
    outline: "border border-input text-foreground bg-white hover:bg-accent"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

// Card
function Card({ children, className = "" }) {
  return <div className={`rounded-lg border bg-white p-4 ${className}`}>{children}</div>;
}
function CardHeader({ children, className = "" }) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}
function CardContent({ children, className = "" }) {
  return <div className={`${className}`}>{children}</div>;
}
function CardTitle({ children, className = "" }) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}

// StatsCard
function StatsCard({ title, value, change, changeType, icon: Icon }) {
  const changeColor =
    changeType === "positive"
      ? "text-green-600"
      : changeType === "negative"
      ? "text-red-600"
      : "text-muted-foreground";
  return (
    <Card className="shadow-card">
      <div className="flex items-center space-x-4">
        <Icon className="h-6 w-6 text-muted-foreground" />
        <div className="space-y-1">
          <h4 className="text-sm text-muted-foreground">{title}</h4>
          <p className="text-lg font-bold text-foreground">{value}</p>
          <p className={`text-xs ${changeColor}`}>{change}</p>
        </div>
      </div>
    </Card>
  );
}

// Data
const recentListings = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$450,000",
    location: "Downtown District",
    image: property1,
    status: "Published",
    views: 124
  },
  {
    id: 2,
    title: "Family House with Garden",
    price: "$650,000",
    location: "Residential Area",
    image: property2,
    status: "Published",
    views: 89
  },
  {
    id: 3,
    title: "Elegant Duplex",
    price: "$550,000",
    location: "Suburb Heights",
    image: property3,
    status: "Draft",
    views: 0
  }
];

// Main Component
 const Dashboard =() =>{
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your property listings and track performance
          </p>
        </div>
        <NavLink to="/add-property">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
            <Plus className="mr-2 h-4 w-4" />
            Add New Property
          </Button>
        </NavLink>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Listings"
          value="12"
          change="+2 this month"
          changeType="positive"
          icon={Building2}
        />
        <StatsCard
          title="Published"
          value="8"
          change="Active listings"
          changeType="neutral"
          icon={Eye}
        />
        <StatsCard
          title="Total Views"
          value="1,247"
          change="+18% this week"
          changeType="positive"
          icon={TrendingUp}
        />
        <StatsCard
          title="Est. Revenue"
          value="$2.4M"
          change="Portfolio value"
          changeType="neutral"
          icon={DollarSign}
        />
      </div>

      {/* Recent Listings + Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Listings */}
        <div className="lg:col-span-2">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg font-semibold">Recent Listings</CardTitle>
              <NavLink to="/listings">
                <Button variant="outline" className="text-sm">
                  View All
                </Button>
              </NavLink>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentListings.map((listing) => (
                <div
                  key={listing.id}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                >
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium text-foreground">{listing.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {listing.location}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-semibold text-primary">{listing.price}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          listing.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {listing.status}
                      </span>
                      <span className="text-muted-foreground">{listing.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions + Performance */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <NavLink to="/add-property" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Property
                </Button>
              </NavLink>
              <NavLink to="/listings" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Building2 className="mr-2 h-4 w-4" />
                  Manage Listings
                </Button>
              </NavLink>
              <NavLink to="/profile" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Viewing
                </Button>
              </NavLink>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">This Week</span>
                  <span className="text-sm font-medium text-green-600">+18% views</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your listings performed 18% better than last week
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Dashboard