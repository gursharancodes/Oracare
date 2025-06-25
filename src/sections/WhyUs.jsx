import React from "react";
import { WhyUscontent } from "../constants";
import { CheckCircle } from "lucide-react";

const WhyUs = () => {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Us"
      className="relative bg-custom-white text-custom-blue px-5 md:px-12 py-16 md:py-24 overflow-hidden"
    >
      <div>
        <div className="text-center flex flex-col gap-2 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            {WhyUscontent.title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-custom-blue/80 max-w-2xl mx-auto">
            {WhyUscontent.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="w-full">
            <img
              src={WhyUscontent.whyUsImage}
              alt={WhyUscontent.whyUsImageAlt}
              className="w-full rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 gap-6">
            {WhyUscontent.reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 md:p-5 rounded-xl border border-custom-blue/10 bg-custom-blue/5 hover:shadow-md transition-all"
              >
                <div className="mt-1">
                  <CheckCircle className="w-6 h-6 text-custom-blue shrink-0" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{reason.title}</h4>
                  <p className="text-sm text-custom-blue/80 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
