
import React, { useEffect, useState } from "react";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Topbar() {
  const [showTopbar, setShowTopbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide topbar when user starts scrolling down
      if (window.scrollY > 20) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full bg-[#2c0404] text-white transition-all duration-500 ease-in-out ${
        showTopbar
          ? "max-h-20 opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[42px] flex items-center justify-between gap-4">
          
          {/* Contact Details */}
          <div className="flex items-center gap-5 text-sm">
            <a
              href="tel:+919820359087"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300"
            >
              <Phone size={15} />
              <span>+91 9820359087</span>
            </a>

            <a
              href="mailto:info@exoticweddingplanner.com"
              className="hidden sm:flex items-center gap-2 hover:text-amber-400 transition-colors duration-300"
            >
              <Mail size={15} />
              <span>info@exoticweddingplanner.com</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/WeddingSangeetChoreographer/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://www.instagram.com/truptieventplanner/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://www.youtube.com/user/mistyraj/videos"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              <FaYoutube size={17} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Topbar;

