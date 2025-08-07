import React from "react";
import {

  MessageSquare,
  Phone,
  Mail,
  Clock,
  Star,
  MapPin
} from "lucide-react";

const messages = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 234-5678",
    message:
      "Hi! I'm very interested in the downtown apartment listing. Could we schedule a viewing this weekend?",
    property: "Modern Downtown Apartment",
    time: "2 hours ago",
    status: "unread",
    priority: "high"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 (555) 345-6789",
    message:
      "What's the neighborhood like for the family house? Are there good schools nearby?",
    property: "Family House with Garden",
    time: "5 hours ago",
    status: "read",
    priority: "medium"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    phone: "+1 (555) 456-7890",
    message:
      "Is the duplex still available? I'd like to know more about the parking situation.",
    property: "Elegant Duplex",
    time: "1 day ago",
    status: "read",
    priority: "low"
  }
];

const Messages =() =>{
  const unreadCount = messages.filter((msg) => msg.status === "unread").length;

  return (
    <div className="space-y-8 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Messages & Leads</h1>
          <p className="text-gray-500">Manage inquiries from potential buyers and renters</p>
        </div>
        <div className="flex gap-2">
          <span className="px-2 py-1 text-sm bg-gray-100 rounded">{unreadCount} unread</span>
          <button className="px-3 py-1 border rounded text-sm">Mark All Read</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="p-4 border rounded shadow">
          <p className="text-sm text-gray-500">Total Messages</p>
          <p className="text-xl font-bold">{messages.length}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <p className="text-sm text-gray-500">Unread</p>
          <p className="text-xl font-bold text-red-500">{unreadCount}</p>
        </div>
        <div className="p-4 border rounded shadow">
          <p className="text-sm text-gray-500">This Week</p>
          <p className="text-xl font-bold">8</p>
        </div>
        <div className="p-4 border rounded shadow">
          <p className="text-sm text-gray-500">Response Rate</p>
          <p className="text-xl font-bold">94%</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Messages</h2>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-6 border rounded shadow-sm hover:shadow-md transition ${
              msg.status === "unread" ? "border-l-4 border-blue-500" : ""
            }`}
          >
            <div className="flex justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <h3 className="font-semibold">{msg.name}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-200 rounded">{msg.priority}</span>
                    {msg.status === "unread" && (
                      <span className="text-xs px-2 py-1 bg-red-100 text-red-500 rounded">New</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {msg.time}
                  </span>
                </div>

                <div className="text-sm text-gray-500 flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  Interested in: {msg.property}
                </div>

                <p className="text-gray-800">{msg.message}</p>

                <div className="flex gap-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center">
                    <Mail className="mr-1 h-4 w-4" />
                    {msg.email}
                  </span>
                  <span className="flex items-center">
                    <Phone className="mr-1 h-4 w-4" />
                    {msg.phone}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 ml-4">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Reply</button>
                <button className="border px-3 py-1 rounded text-sm">Call</button>
                <button className="text-sm text-gray-500 hover:underline">Mark Read</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
