import { useParams, Link } from "react-router-dom";
import { SERVICES } from "../../constants";
import {
  ChevronRight,
  Clock,
  DollarSign,
  ArrowLeft,
  Calendar,
} from "lucide-react";

import Reviews from "../../sections/Reviews";
import CTA from "../../sections/CTA";

const ServiceDetail = () => {
  const { categorySlug, serviceSlug } = useParams();

  const category = SERVICES.categories.find((c) => c.slug === categorySlug);
  const service = category?.services.find((s) => s.slug === serviceSlug);

  if (!category || !service)
    return (
      <section className="mt-15 md:mt-20 px-5 md:px-12 py-16 bg-custom-blue text-custom-white min-h-[60vh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Service Not Found
          </h1>
          <p className="text-base text-muted-white mb-6">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-custom-white text-custom-blue px-5 py-2.5 rounded-lg font-medium hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-custom-white text-custom-white px-5 py-2.5 rounded-lg font-medium hover:bg-custom-white hover:text-custom-blue"
            >
              Contact Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );

  return (
    <>
      <section className="mt-15 md:mt-20 px-5 md:px-12 py-14 md:py-16 bg-custom-blue text-custom-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-custom-blue to-blue-900 opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto space-y-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-white">
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <ChevronRight className="size-4" />
            <Link to={`/services/${categorySlug}`} className="hover:text-white">
              {category.name}
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-white font-medium">{service.name}</span>
          </nav>

          {/* Card */}
          <div className="bg-white text-custom-blue rounded-xl shadow-xl border border-gray-200 p-6 md:p-8 space-y-6">
            {/* Image */}
            {service.image && (
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
            )}

            {/* Title & Meta */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {service.name}
              </h1>
              <p className="text-sm text-custom-gray">
                Part of our <strong>{category.name}</strong> services
              </p>
            </div>

            {/* Info */}
            <div className="flex flex-wrap gap-3 text-sm">
              {service.duration && (
                <div className="flex items-center gap-2 bg-custom-blue/10 text-custom-blue px-3 py-1.5 rounded-md">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </div>
              )}
              {service.price && (
                <div className="flex items-center gap-2 bg-custom-blue/10 text-custom-blue px-3 py-1.5 rounded-md">
                  <DollarSign className="w-4 h-4" />
                  {service.price}
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-base text-custom-gray leading-relaxed">
              {service.description}
            </p>

            {/* CTA */}
            <div className="bg-custom-blue/5 border border-custom-blue/10 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-custom-blue">
                Ready to Get Started?
              </h3>
              <p className="text-sm text-custom-gray">
                Experience our <strong>{service.name}</strong> service. Our
                expert team is here to deliver exceptional care and results.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-custom-blue text-white px-5 py-2.5 rounded-md font-medium hover:shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
                <Link
                  to={`/services/${categorySlug}`}
                  className="inline-flex items-center gap-2 border border-custom-blue text-custom-blue px-5 py-2.5 rounded-md font-medium hover:bg-custom-blue hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  More {category.name} Services
                </Link>
              </div>
            </div>
          </div>

          {/* Related Services */}
          {category.services.length > 1 && (
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                Other {category.name} Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.services
                  .filter((s) => s.slug !== serviceSlug)
                  .slice(0, 3)
                  .map((relatedService) => (
                    <Link
                      key={relatedService.slug}
                      to={relatedService.href}
                      className="group bg-white text-custom-blue p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
                        <h4 className="text-lg font-bold group-hover:underline">
                          {relatedService.name}
                        </h4>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </div>
                      <p className=" text-custom-gray leading-normal">
                        {relatedService.description}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Reviews />
      <CTA />
    </>
  );
};

export default ServiceDetail;
