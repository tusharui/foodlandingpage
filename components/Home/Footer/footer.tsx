"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">Foodie</h2>
          <p className="mt-4 text-sm">
            Delicious food delivered at your doorstep. Order now and enjoy the
            taste of happiness.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-white">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              aria-label="Visit our Facebook page"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition"
            >
              <FaFacebookF className="text-white" />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Visit our Twitter profile"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-700 hover:bg-sky-500 transition"
            >
              <FaTwitter className="text-white" />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Visit our Instagram profile"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-700 hover:bg-pink-600 transition"
            >
              <FaInstagram className="text-white" />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="Visit our LinkedIn profile"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-700 hover:bg-blue-700 transition"
            >
              <FaLinkedinIn className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
