import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "../../ui/select";
import { Checkbox } from "../../ui/checkbox";
import { Separator } from "../../ui/separator";
import { Upload, X } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

const propertyTypes = ["House", "Apartment", "Duplex", "Villa", "Townhouse", "Condo"];
const amenities = [
  "Pool", "Garden", "Balcony", "Garage", "Gym", "Security",
  "Elevator", "AC", "Heating", "Fireplace", "Laundry", "Storage"
];

const AddProperty = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "", description: "", propertyType: "",
    price: "", location: "", bedrooms: "",
    bathrooms: "", parking: "", status: "For Sale",
  });

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setImages((prev) => [...prev, ...newFiles]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (isDraft) => {
    const newListing = {
      ...formData,
      status: isDraft ? "Draft" : "Published",
      amenities: selectedAmenities,
      images: images.map((file) => URL.createObjectURL(file)), // just for demo
      id: Date.now(),
      views: 0,
      date: new Date().toISOString(),
    };

    toast({
      title: isDraft ? "Saved as Draft" : "Property Published",
      description: isDraft
        ? "Your property has been saved as a draft."
        : "Your property listing is now live!",
    });

    navigate("/listings", { state: { newListing } });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Add New Property</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Title</Label>
            <Input placeholder="e.g. Cozy 2-bedroom in Lekki" value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)} />
          </div>

          <div>
            <Label>Description</Label>
            <Textarea placeholder="Describe the property..." value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Property Type</Label>
              <Select value={formData.propertyType}
                onValueChange={(value) => handleChange("propertyType", value)}>
                <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={formData.status}
                onValueChange={(value) => handleChange("status", value)}>
                <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                  <SelectItem value="For Rent">For Rent</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Price</Label>
              <Input type="number" placeholder="₦" value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)} />
            </div>
            <div>
              <Label>Location</Label>
              <Input placeholder="e.g. Victoria Island" value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Bedrooms</Label>
              <Input type="number" value={formData.bedrooms}
                onChange={(e) => handleChange("bedrooms", e.target.value)} />
            </div>
            <div>
              <Label>Bathrooms</Label>
              <Input type="number" value={formData.bathrooms}
                onChange={(e) => handleChange("bathrooms", e.target.value)} />
            </div>
            <div>
              <Label>Parking</Label>
              <Input type="number" value={formData.parking}
                onChange={(e) => handleChange("parking", e.target.value)} />
            </div>
          </div>

          <div>
            <Label>Amenities</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedAmenities.includes(amenity)}
                    onCheckedChange={() => handleAmenityToggle(amenity)}
                  />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>Images</Label>
            <div className="flex items-center gap-4 mt-2">
              <Button type="button" onClick={() => fileInputRef.current?.click()}>
                <Upload className="w-4 h-4 mr-2" /> Upload Images
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              {images.map((file, index) => (
                <div key={index} className="relative w-32 h-32 border rounded overflow-hidden">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`uploaded-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-1 right-1 bg-white p-1 rounded-full shadow"
                    onClick={() => removeImage(index)}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={() => handleSubmit(true)}>Save as Draft</Button>
            <Button onClick={() => handleSubmit(false)}>Publish Property</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProperty;
