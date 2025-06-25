import React from "react";
import { Reviewcontent } from "../constants";

const Reviews = () => {
  return (
    <section
      id="client-reviews"
      aria-label="client-reviews"
      className="relative bg-gradient-to-t from-custom-blue via-muted-white to-custom-white text-custom-blue px-5 md:px-12 py-16 md:py-24 overflow-hidden"
    >
      <div>
        {/* Section Heading */}
        <div className="text-center flex flex-col gap-2 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            {Reviewcontent.title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-custom-blue/80 max-w-2xl mx-auto">
            {Reviewcontent.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Reviewcontent.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-custom-blue p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col gap-4"
            >
              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={`${review.name}'s review`}
                  className="w-14 h-14 object-cover rounded-full shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.42 8.283L12 19.25l-7.42 4.63L6 15.597 0 9.75l8.332-1.595z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-sm text-custom-gray leading-relaxed line-clamp-6">
                “{review.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
