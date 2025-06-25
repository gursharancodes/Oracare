import React from "react";
import { ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS, SERVICES, SITE_DESCRIPTION } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-custom-white text-primary-dark px-5 md:px-12 pt-14 pb-8 border-t border-gray-200">
      {/* Top Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-base font-semibold mb-3">
            About Oracare
            <span className="text-custom-blue ml-1">+</span>
          </h3>
          <p className="text-sm text-custom-gray leading-relaxed mb-3">
            {SITE_DESCRIPTION}
          </p>
          <NavLink
            to="/about"
            className="inline-flex items-center gap-1 text-sm text-custom-blue font-medium hover:underline"
          >
            Learn More <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-custom-gray">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `hover:text-custom-blue transition-colors ${
                      isActive ? "text-custom-blue font-medium" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-custom-gray">
            {SERVICES.categories.map((service, index) => (
              <li key={index}>
                <NavLink
                  to={service.href || "/services"}
                  className={({ isActive }) =>
                    `hover:text-custom-blue transition-colors ${
                      isActive ? "text-custom-blue font-medium" : ""
                    }`
                  }
                >
                  {service.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-custom-gray hover:text-custom-blue transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-custom-gray hover:text-custom-blue transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-custom-gray hover:text-custom-blue transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-5 border-t border-gray-200 text-sm text-custom-gray flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Oracare+. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://github.com/gursharancodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-blue hover:underline"
          >
            GursharanCodes.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
