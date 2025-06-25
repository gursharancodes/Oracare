import { useParams, Link } from "react-router-dom";
import { SERVICES } from "../../constants";
import { ChevronRight, Clock, DollarSign } from "lucide-react";
import Reviews from "../../sections/Reviews";
import CTA from "../../sections/CTA";

const ServiceCategory = () => {
  const { categorySlug } = useParams();
  const category = SERVICES.categories.find((c) => c.slug === categorySlug);

  if (!category)
    return (
      <section className="mt-15 md:mt-20 px-5 md:px-12 py-16 bg-custom-blue text-custom-white min-h-[60vh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Category Not Found
          </h1>
          <p className="text-base text-muted-white mb-6">
            The service category you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-custom-white text-custom-blue px-5 py-2.5 rounded-lg font-medium hover:shadow-md"
          >
            View All Services
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );

  return (
    <>
      <section className="mt-15 md:mt-20 px-5 md:px-12 py-14 bg-custom-blue text-custom-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-custom-blue to-blue-900 opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto space-y-14">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              {category.name} Services
            </h1>
            <p className="text-sm md:text-base text-muted-white max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.services.map((service) => (
              <Link
                key={service.slug}
                to={service.href}
                className="group bg-white text-custom-blue rounded-xl p-5 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all flex flex-col md:flex-row gap-4"
              >
                {service.image && (
                  <div className="w-full md:w-36 h-32 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                  </div>
                )}

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
                    <h2 className="text-lg md:text-xl font-bold group-hover:underline">
                      {service.name}
                    </h2>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>

                  <p className=" text-custom-gray mb-4 leading-normal">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs text-custom-blue/90">
                    {service.duration && (
                      <span className="flex items-center gap-1 bg-custom-blue/10 px-2 py-1 rounded-md">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </span>
                    )}
                    {service.price && (
                      <span className="flex items-center gap-1 bg-custom-blue/10 px-2 py-1 rounded-md">
                        <DollarSign className="w-3 h-3" />
                        {service.price}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-custom-white text-custom-blue px-5 py-2.5 rounded-md font-medium hover:shadow-md"
            >
              All Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <Reviews />
      <CTA />
    </>
  );
};

export default ServiceCategory;
