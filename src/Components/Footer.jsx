import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Home className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">Lovable Homes</span>
            </div>
            <p className="text-white/80">
              Your trusted partner in finding the perfect home. We connect you with verified properties and reliable agents across Nigeria.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Properties</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Apartments</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Houses</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Duplexes</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Office Spaces</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Land</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@lovablehomes.ng</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; 2024 Lovable Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
