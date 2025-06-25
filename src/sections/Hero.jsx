import React from "react";
import { Link } from "react-router-dom";
import { HERO_SECTION } from "../constants";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label={HERO_SECTION.label}
      className="relative px-5 md:px-12 py-20 mt-[4.5rem] bg-gradient-to-br from-white via-blue-50/30 to-white text-primary-dark overflow-hidden"
    >
      {/* Static Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-custom-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-custom-blue/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-custom-blue/4 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-7xl font-[800] tracking-tight uppercase leading-none">
              {HERO_SECTION.headline}
            </h1>
            <p className="text-lg md:text-xl text-custom-gray max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {HERO_SECTION.subheading}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group bg-custom-blue text-white py-3.5 px-8 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden border-2 border-custom-blue"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {HERO_SECTION.primaryCTA.label}
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
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>

            <Link
              to="/services"
              className="group text-custom-blue border-2 border-custom-blue py-3.5 px-8 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden bg-white hover:bg-custom-blue hover:text-white"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {HERO_SECTION.secondaryCTA.label}
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
              <div className="absolute inset-0 bg-custom-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-custom-gray/80">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Trusted by 500+ clients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-star rated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 01-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 01-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 01-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Industry certified</span>
            </div>
          </div>
        </div>

        {/* Right Image as Background */}
        <div className="relative">
          <div
            className="w-full h-[350px] md:h-[500px] rounded-3xl shadow-2xl bg-cover bg-center overflow-hidden transition-transform duration-500 hover:shadow-3xl"
            style={{ backgroundImage: `url(${HERO_SECTION.heroImage})` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
