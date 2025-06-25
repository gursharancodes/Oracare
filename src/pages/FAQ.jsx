import React, { useState } from "react";
import { FAQS } from "../constants";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions"
      className="bg-gradient-to-br from-custom-blue via-custom-blue to-custom-blue/95 text-custom-white px-5 md:px-12 py-16 md:py-24 pt-32 md:pt-40 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full bg-white/10"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center flex flex-col gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
            {FAQS.title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-2xl mx-auto">
            {FAQS.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {FAQS.items.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "bg-white/10 border-white/20 shadow-lg"
                  : "hover:bg-white/8 hover:border-white/15"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left transition-all duration-200 cursor-pointer"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base md:text-lg font-semibold text-white pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <ChevronDown
                    className={`transform transition-all duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-white"
                        : "rotate-0 text-white/70 group-hover:text-white/90"
                    }`}
                    size={22}
                  />
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-white/10 mb-4"></div>
                  <p className="text-white/85 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8">
          <p className="text-white/70 text-base mb-4">
            Still have questions? We're here to help.
          </p>
          <Link
            to={"/contact"}
            type="button"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm"
          >
            <HelpCircle size={18} />
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
