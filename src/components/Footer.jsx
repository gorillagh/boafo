import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  const navLinks = [
    { text: "Newsletter", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Terms and Conditions", href: "#" },
  ];

  return (
    <footer className="w-full bg-black text-white mt-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">B</span>
          </div>
          <span className="font-bold text-xl">BOAFO</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm text-white hover:text-gray-300 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
