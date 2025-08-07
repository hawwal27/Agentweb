import React from "react";
import { User, Mail, Phone, MapPin, Star, Award, Calendar, Camera } from "lucide-react";

 const Profile =() =>{
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
        <p className="text-gray-500">Manage your profile information and preferences</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="relative inline-block">
              <img
                src="/placeholder-avatar.jpg"
                alt="Avatar"
                className="h-24 w-24 rounded-full object-cover mx-auto"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p className="text-gray-500">Senior Real Estate Agent</p>

            <div className="flex items-center justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-500 ml-1">(4.9)</span>
            </div>

            <hr className="my-4" />

            <div className="space-y-2 text-sm text-left">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                john.doe@example.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                New York, NY
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                Member since 2020
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-gray-100 px-2 py-1 rounded-full flex items-center">
                <Award className="h-3 w-3 mr-1" />
                Top Agent
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded-full">Verified</span>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <User className="h-5 w-5 mr-2" />
              Personal Information
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="Doe" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Professional Title</label>
              <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="Senior Real Estate Agent" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                rows="4"
                className="mt-1 w-full border rounded px-3 py-2"
                defaultValue="Experienced real estate agent with over 10 years in the industry. Specializing in residential properties in the greater New York area."
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input className="mt-1 w-full border rounded px-3 py-2" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile</label>
                  <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="+1 (555) 987-6543" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="123 Main Street, New York, NY 10001" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="New York" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="NY" />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Info */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Professional Details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">License Number</label>
                <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="RE12345678" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="10" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Specialties</label>
              <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="Residential, Commercial, Investment Properties" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="Loavble Real Estate" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <input className="mt-1 w-full border rounded px-3 py-2" defaultValue="www.johndoe-realestate.com" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Save Changes
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile