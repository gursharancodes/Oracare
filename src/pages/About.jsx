import React from "react";
import { ABOUT_US } from "../constants";
import CTA from "../sections/CTA";

const About = () => {
  return (
    <>
      <section>
        {/* Hero Image */}
        <div className="relative mt-14">
          <img
            src="./About/team.jpg"
            alt="Clinic overview"
            className="w-full h-[60vh] md:h-100 object-cover object-top"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-custom-blue opacity-50 z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-custom-black opacity-10 z-10" />
        </div>

        <div className="px-5 md:px-12 py-12 md:py-24 md:pt-16 overflow-hidden">
          {/* Section: Mission Statement */}
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              {ABOUT_US.missionStatement.title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-custom-gray">
              {ABOUT_US.missionStatement.text}
            </p>
          </div>

          {/* Section: Vision */}
          <div className="flex flex-col gap-2 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              {ABOUT_US.visionStatement.title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-custom-gray">
              {ABOUT_US.visionStatement.text}
            </p>
          </div>

          {/* Section: Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-20 items-center">
            <div>
              <img
                src={ABOUT_US.clinicStory.image}
                alt={ABOUT_US.clinicStory.imageAlt}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {ABOUT_US.clinicStory.title}
              </h2>
              <p className="text-base md:text-lg text-custom-gray leading-relaxed">
                {ABOUT_US.clinicStory.text}
              </p>
            </div>
          </div>

          {/* Section: Meet the Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {ABOUT_US.meetTheTeam.title}
              </h2>
              <p className="text-base md:text-lg text-custom-gray leading-relaxed">
                {ABOUT_US.meetTheTeam.text}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={ABOUT_US.meetTheTeam.image}
                alt={ABOUT_US.meetTheTeam.imageAlt}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Section: Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {ABOUT_US.certifications.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {ABOUT_US.certifications.list.map((cert, index) => (
                <div
                  key={index}
                  className="text-center p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
                >
                  <img
                    src={cert.logo}
                    alt={cert.alt}
                    className="w-20 h-20 mx-auto mb-4 object-contain"
                  />
                  <p className="text-sm text-custom-gray font-medium">
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Stats */}
          <div className="bg-gradient-to-r from-custom-blue to-custom-blue/90 text-white py-12 px-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {ABOUT_US.stats.list.map((stat, i) => (
                <div key={i} className="relative text-center group">
                  {/* Stat Number */}
                  <div className="mb-3">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">
                      {stat.value}
                    </h3>
                    <div className="w-12 h-0.5 bg-white/30 mx-auto"></div>
                  </div>

                  {/* Stat Label */}
                  <p className="text-white/90 text-sm md:text-base font-medium tracking-wide">
                    {stat.name}
                  </p>

                  {/* Subtle separator (except for last item) */}
                  {i < ABOUT_US.stats.list.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-px h-16 bg-white/20 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTA />
      </section>
    </>
  );
};

export default About;
