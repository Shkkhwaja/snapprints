import { Instagram } from "lucide-react";
import React from "react";
import logo from "../../Images/snapprintsmain.png"

export default function Footer() {
  return (
    <footer className="bg-amber-50 text-gray-900 border-t border-amber-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo Section */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Company Logo"
              className="h-[10em]"
            />
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full text-center md:text-left">
            <div className="flex flex-col items-center md:items-center space-y-2">
              <h3 className="text-gray-900 font-semibold text-lg">Phone</h3>
              <a
                href="tel:+917039551617"
                className="hover:text-gray-900 transition-colors duration-300"
              >
                +91 70395 51617
              </a>
            </div>

            <div className="flex flex-col items-center md:items-center space-y-2">
              <h3 className="text-gray-900 font-semibold text-lg">Email</h3>
              <a
                href="mailto:contact@example.com"
                className="hover:text-gray-900 transition-colors duration-300"
              >
                snapprints@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center md:items-center space-y-2">
              <h3 className="text-gray-900 font-semibold text-lg">Address</h3>
              <address className="not-italic">
                90 Feet Road Sion,
                <br />
                Mumbai, India
              </address>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 pt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transform hover:scale-110 transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
            
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 mt-8">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
