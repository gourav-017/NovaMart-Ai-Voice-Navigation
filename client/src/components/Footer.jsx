import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#dbfcfcec] text-[#1e2223] border-t border-slate-300">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-12">
        {/* Row layout for small and large devices */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-6 sm:gap-4 w-full flex-wrap">
          {/* Logo + Description */}
          <div className="flex-1 min-w-[180px] flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="NovaMart Logo"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <p className="text-xl font-semibold">NovaMart</p>
            </div>
            <p className="text-xs md:text-sm leading-relaxed">
              NovaMart is your all-in-one online shopping destination, offering
              top-quality products, unbeatable deals, and fast delivery—all backed
              by trusted service.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2 text-base">
              <a href="#" className="hover:text-teal-700 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-teal-700 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-teal-700 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-teal-700 transition"><FaLinkedinIn /></a>
            </div>
          </div>
<div className=" flex justify-center flex-wrap gap-30">
          {/* Company Links */}
          <div className="flex-1 min-w-[140px] flex flex-col items-start gap-2">
            <h4 className="text-sm md:text-lg font-semibold">Company</h4>
            <ul className="flex flex-col gap-1 text-xs md:text-sm">
              <li className="cursor-pointer hover:text-teal-700 transition">Home</li>
              <li className="cursor-pointer hover:text-teal-700 transition">About Us</li>
              <li className="cursor-pointer hover:text-teal-700 transition">Delivery</li>
              <li className="cursor-pointer hover:text-teal-700 transition">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[140px] flex flex-col items-start gap-2">
            <h4 className="text-sm md:text-lg font-semibold">Get in Touch</h4>
            <ul className="flex flex-col gap-1 text-xs md:text-sm">
              <li className="hover:text-teal-700 transition">+91-1234567891</li>
              <li className="hover:text-teal-700 transition">contact@NovaMart.com</li>
              <li className="hover:text-teal-700 transition">+1-123-786-7890</li>
              <li className="hover:text-teal-700 transition">admin@NovaMart.com</li>
            </ul>
          </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-slate-300"></div>

      {/* Bottom Copyright */}
      <div className="py-3 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm max-w-7xl mx-auto gap-2">
        <p>© 2025 NovaMart.com — All Rights Reserved</p>
        <p className="text-[10px] md:text-xs text-slate-600">Designed with ❤️ by NovaMart Team</p>
      </div>
    </footer>
  );
}

export default Footer;