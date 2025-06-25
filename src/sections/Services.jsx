import React from "react";
import { SERVICES } from "../constants";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Optional: Import icons if you're using the `icon` field
import { ShieldCheck, Hammer, Sparkles, Baby } from "lucide-react";

const iconMap = {
  "shield-check": <ShieldCheck className="w-5 h-5 text-custom-blue" />,
  hammer: <Hammer className="w-5 h-5 text-custom-blue" />,
  sparkles: <Sparkles className="w-5 h-5 text-custom-blue" />,
  baby: <Baby className="w-5 h-5 text-custom-blue" />,
};

const Services = () => {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative px-5 md:px-12 py-15 md:py-20 bg-custom-blue text-custom-white overflow-hidden"
    >

      {/* Section Heading */}
      <div className="text-center flex flex-col gap-2 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {SERVICES.title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-white max-w-2xl mx-auto">
          {SERVICES.subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-6">
        {SERVICES.categories.map((category, catid) => (
          <div
            key={catid}
            className="bg-gradient-to-br from-custom-white to-gray-50 text-custom-blue p-7 md:p-8 rounded-2xl shadow-2xl border border-custom-gray/50 hover:shadow-4xl transition-all"
          >
            {/* Title */}
            <div className="flex items-center justify-between pb-2 mb-4 group border-b border-custom-gray/50">
              <Link
                to={category.href}
                className="text-2xl font-bold group-hover:underline flex items-center gap-3"
              >
                {iconMap[category.icon]}
                {category.name}
              </Link>

              <ChevronRight className="size-5 stroke-3 group-hover:translate-x-1 transition-all" />
            </div>

            {/* Description */}
            <p className="text-md leading-relaxed text-custom-gray mb-4">
              {category.description}
            </p>

            {/* Subcategories */}
            <ul
              className="flex flex-col gap-1.5 ml-5"
              aria-label={`Sub-services under ${category.name}`}
            >
              {category.services.map((subCategory, subcatid) => (
                <li key={subcatid} className="list-disc">
                  <Link
                    to={subCategory.href}
                    className="text-custom-blue/90 hover:underline"
                  >
                    {subCategory.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
