import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-100 mt-12">
      <p className="mb-2">Connect with me:</p>
      <div className="flex justify-center gap-4">
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
