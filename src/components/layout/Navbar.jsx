import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import { SERVICES } from "../../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-custom-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="flex items-center justify-between p-6 md:px-12 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold transform transition-transform"
        >
          Oracare
          <span className="text-custom-blue inline-block ml-0.5">+</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-custom-gray font-medium">
          {NAV_LINKS.map((link, index) => {
            if (link.label === "Services") {
              return (
                <li className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer group-hover:text-custom-blue transition-colors">
                  <NavLink
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-custom-blue font-semibold"
                            : "text-custom-gray"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                    <ChevronDown
                      size={16}
                      className="fill-currenttransition-transform group-hover:rotate-180"
                    />
                  </div>

                  {/* First-level: Categories */}
                  <ul className="absolute top-full left-0 mt-2 w-60 bg-custom-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 py-2">
                    {SERVICES.categories.map((category, idx) => (
                      <li key={idx} className="relative group/item">
                        <div className="flex items-center justify-between border-l-2 border-transparent px-4 hover:border-l-2 hover:border-custom-blue py-2 text-primary-dark hover:bg-custom-blue/10 hover:text-custom-blue transition-colors cursor-pointer">
                          <Link to={category.href}>
                            <span>{category.name}</span>
                          </Link>
                          <ChevronRight size={14} />
                        </div>

                        {/* Second-level: Subcategories */}
                        <ul className="absolute top-0 left-full ml-1 mt-0 w-64 bg-custom-white rounded-md shadow-lg opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-300 z-50 py-2">
                          {category.services.map((service, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                to={service.href}
                                className="block px-4 py-2 text-custom-gray hover:bg-custom-blue hover:text-white transition-colors"
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            // Normal nav items
            return (
              <li key={index} className="transition-transform duration-300">
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `relative group transition-colors duration-300 hover:text-custom-blue ${
                      isActive ? "text-custom-blue" : ""
                    }`
                  }
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-custom-blue group-hover:w-full transition-all duration-300" />
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:block group bg-custom-blue text-white py-2.5 px-6 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden border-2 border-custom-blue"
        >
          <span className="relative z-10">Book Now</span>
          <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.7}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M13.5 12h6.75M3.75 17.25h16.5"
            />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-[999] bg-custom-white p-6 overflow-y-auto transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible"
          }`}
        >
          {/* Logo & Close Button */}
          <div className="flex items-center justify-between border-b border-custom-gray/20 pb-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold transform transition-transform"
            >
              Oracare
              <span className="text-custom-blue inline-block ml-0.5">+</span>
            </Link>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-5 text-lg font-medium mt-6">
            {NAV_LINKS.map((link) => {
              // Services
              if (link.label === "Services") {
                return (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `transition-all duration-300 hover:scale-110 ${
                          isActive
                            ? "text-custom-blue font-semibold"
                            : "text-custom-gray"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>

                    {/* categories */}
                    {SERVICES.categories.map((cat) => (
                      <div key={cat.name} className="my-4 mx-7 mb-2">
                        <Link
                          to={cat.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-sm text-custom-black font-semibold mb-2"
                        >
                          {cat.name}
                        </Link>

                        {/* subcategories */}
                        <ul className="ml-3 space-y-1.5 text-sm  border-l border-custom-gray/50 pl-4">
                          {cat.services.map((sub, idx) => (
                            <li key={idx}>
                              <Link
                                to={sub.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-custom-gray hover:text-custom-blue transition-colors"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </li>
                );
              }

              // Normal nav items
              return (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `transition-all duration-300 hover:scale-110 ${
                        isActive
                          ? "text-custom-blue font-semibold"
                          : "text-custom-gray"
                      }`
                    }
                    end
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-custom-blue text-white py-4 px-8 rounded-full font-bold shadow-md text-center transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[998]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
