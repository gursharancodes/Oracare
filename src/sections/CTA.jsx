import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { CTAcontent } from "../constants";

const CTA = () => {
  return (
    <section
      id="cta"
      aria-label="cta"
      className="relative bg-custom-blue text-white px-5 md:px-12 py-15 md:py-20 overflow-hidden"
    >
      <div className="text-center space-y-6">
        {/* title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tighter">
          {CTAcontent.title}
        </h2>

        {/* subheading */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          {CTAcontent.subheading}
        </p>

        {/* cta */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={CTAcontent.link}
            className="group bg-custom-white text-custom-blue py-3 px-6 md:py-3.5 md:px-8 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden border-2 border-custom-blue"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {CTAcontent.cta}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
