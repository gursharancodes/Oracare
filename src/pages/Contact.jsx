import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Phone, MessageCircle, Clock, MapPin, CheckCircle } from "lucide-react";
import { SERVICES } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [services, setServices] = useState([]);
  
  useEffect(() => {
    const allServices = SERVICES.categories.flatMap(
      (category) => category.services
    );
    setServices(allServices);
  }, []);

  useEffect(() => {
    console.log(services);
  },[services])
  
  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => setShowModal(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_2f0393k",
        "template_dm5whgf",
        formRef.current,
        "QAxqD6LPoHgjXUjpf"
      )
      .then(() => {
        setIsSending(false);
        setShowModal(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setIsSending(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 mx-4 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-custom-blue hover:scale-110 cursor-pointer text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-custom-blue">
                Appointment Request Sent
              </h2>
              <p className="text-gray-600">
                Thank you for reaching out. Our team will contact you shortly to
                confirm your appointment.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 px-5 md:px-12 py-16 md:py-24 pt-32 md:pt-40 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-medium mb-6 text-slate-800 tracking-tight">
              Book Your
              <span className="block font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Appointment
              </span>
            </h1>
            <p className="text-lg text-custom-gray max-w-lg mx-auto font-light">
              Experience exceptional dental care with our expert team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-6 md:p-12">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-slate-800"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-slate-800"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-slate-800"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Preferred Date *
                      </label>
                      <div className="relative w-full">
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="hide-native-icon appearance-none w-full px-4 py-3 pr-12 bg-slate-50/50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-slate-800"
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-slate-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Preferred Time *
                      </label>
                      <div className="relative w-full">
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="hide-native-icon appearance-none w-full px-4 py-3 pr-12 bg-slate-50/50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-slate-800"
                        />
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-slate-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Service Needed *
                    </label>
                    <div className="relative w-full">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="appearance-none w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-slate-800"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </select>

                      {/* Custom arrow icon */}
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                        <svg
                          className="w-4 h-4 text-slate-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-slate-800 resize-none"
                      placeholder="Any specific concerns or questions?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium py-4 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isSending ? "Sending..." : "Book Appointment"}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/911234567890"
                    className="flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-all duration-200 font-medium"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    Clinic Hours
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="font-medium text-slate-800">
                      9:00 AM - 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday</span>
                    <span className="font-medium text-slate-800">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-800">
                    Location
                  </h3>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    title="Clinic Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.2590512226!2d75.49101685361366!3d31.322518086763036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1750853053728!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    className="w-full"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
