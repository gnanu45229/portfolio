import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-100 mt-12">
      <p className="mb-2">Connect with me:</p>
      <div className="flex justify-center gap-4">
        <a href="https://www.instagram.com/its_me_gnanu/    " target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="hhttps://www.linkedin.com/in/gnanendra-chinthamani-1114b521a/" target="_blank" rel="noreferrer">
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </footer>

  );
}

export default Footer;
