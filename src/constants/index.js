// SITE INFO
export const SITE_NAME = "OraCare+";
export const SITE_TAGLINE = "Your Smile, Our Priority";
export const SITE_DESCRIPTION =
  "OraCare+ is a modern dental clinic offering comprehensive, compassionate dental care for families and individuals. Book your appointment today!";
export const SITE_KEYWORDS = [
  "Dental Clinic",
  "Family Dentistry",
  "OraCare+",
  "Cosmetic Dentistry",
  "Tooth Cleaning",
  "Book Dental Appointment",
];

// NAVIGATION
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faqs" },
];

// HERO SECTION
export const HERO_SECTION = {
  label: "Limitless",
  headline: "Your Smile, Our Priority",
  subheading:
    "Trusted, gentle dental care for every member of your family. We blend modern dentistry with a patient-first approach to keep your smile bright and healthy.",
  primaryCTA: {
    label: "Book your appointment",
    link: "/appointment",
  },
  secondaryCTA: {
    label: "Explore our services",
    link: "/services",
  },
  heroImage: "./hero.avif",
  heroImageAlt:
    "Smiling dentist treating a happy patient in a bright dental clinic",
};

// ABOUT US
export const ABOUT_US = {
  sectionTitle: "About Oracare+",
  tagline: "More than just dentists — we’re architects of confident smiles.",

  missionStatement: {
    title: "Our Mission",
    text: "At Oracare+, our mission is to deliver compassionate, patient-focused dental care that is accessible, modern, and rooted in trust. We aim to redefine the dental experience by integrating advanced technology, gentle techniques, and personalized treatment plans."
  },

  visionStatement: {
    title: "Our Vision",
    text: "We envision a future where every individual—regardless of age or background—feels empowered by their oral health and proud of their smile."
  },

  clinicStory: {
    title: "Our Story",
    text: "Founded in 2010, Oracare+ was born from a vision to transform traditional dentistry. What started as a small, two-room clinic has grown into a leading center for cosmetic, preventive, and restorative dental care. With over 14 years of clinical excellence, we've served more than 10,000 patients and built a reputation for delivering warm, patient-first experiences.",
    image: "./About/clinic.jpg",
    imageAlt: "Exterior of the Oracare+ dental clinic"
  },

  meetTheTeam: {
    title: "Meet the Experts Behind the Care",
    text: "Our handpicked team of licensed dentists, hygienists, and dental assistants combines expertise with empathy. Every team member is trained in state-of-the-art techniques and committed to making your visit stress-free, informative, and effective.",
    image: "./About/team.jpg",
    imageAlt: "The Oracare+ team smiling together in clinic uniforms"
  },

  certifications: {
    title: "Recognitions & Certifications",
    list: [
      {
        name: "Accredited by Indian Dental Association",
        logo: "./About/demo-certificate.png",
        alt: "Indian Dental Association Certification"
      },
      {
        name: "Certified in Laser Dentistry (2022)",
        logo: "./About/demo-certificate.png",
        alt: "Laser Dentistry Certification"
      },
      {
        name: "Awarded 'Top Dental Clinic of the Year' – 2023",
        logo: "./About/demo-certificate.png",
        alt: "Top Clinic Award 2023"
      }
    ]
  },

  stats: {
    title: "Clinic at a Glance",
    list: [
      {
        name: "Years of Experience",
        value: "14+"
      },
      {
        name: "Happy Smiles",
        value: "10,000+"
      },
      {
        name: "Rating",
        value: "4.9/5"
      }
    ],
  }
};


// SERVICES SECTION
export const SERVICES = {
  title: "Our Services",
  subtitle: "Advanced care for every stage of your smile.",
  intro:
    "At Oracare, we provide personalized dental services for all ages—whether it's your child’s first visit or a full smile makeover. We focus on prevention, precision, and comfort in every treatment.",
  categories: [
    {
      name: "Preventive",
      slug: "preventive-dentistry",
      href: "/services/preventive-dentistry",
      icon: "shield-check",
      description:
        "Maintain long-term oral health with proactive cleanings, exams, and preventive care.",
      services: [
        {
          name: "Dental Checkups",
          slug: "dental-checkups",
          href: "/services/preventive-dentistry/dental-checkups",
          description:
            "Routine exams to detect early signs of dental issues and ensure ongoing oral health.",
          duration: "30 minutes",
          price: "₹800",
          image: "../../Services/Preventive/Dental-checkup.webp",
        },
        {
          name: "Teeth Cleaning",
          slug: "teeth-cleaning",
          href: "/services/preventive-dentistry/teeth-cleaning",
          description:
            "Professional cleaning to remove plaque, tartar, and stains for a healthier smile.",
          duration: "45 minutes",
          price: "₹1,200",
          image: "../../Services/Preventive/Teeth-cleaning.webp",
        },
        {
          name: "Fluoride & Sealants",
          slug: "fluoride-sealants",
          href: "/services/preventive-dentistry/fluoride-sealants",
          description:
            "Protective treatments to strengthen enamel and prevent decay, especially in children.",
          duration: "20 minutes",
          price: "₹600",
          image: "../../Services/Preventive/Fluoride-Sealants.webp",
        },
      ],
    },
    {
      name: "Restorative",
      slug: "restorative-dentistry",
      href: "/services/restorative-dentistry",
      icon: "hammer",
      description:
        "Restore damaged teeth and bring back full function with modern treatments.",
      services: [
        {
          name: "Tooth-Colored Fillings",
          slug: "fillings",
          href: "/services/restorative-dentistry/fillings",
          description:
            "Natural-looking fillings that restore cavities while blending with your smile.",
          duration: "30–45 minutes",
          price: "₹1,500 per tooth",
          image: "../../Services/Restorative/Tooth-colored-filling.webp",
        },
        {
          name: "Crowns & Bridges",
          slug: "crowns-bridges",
          href: "/services/restorative-dentistry/crowns-bridges",
          description:
            "Restore structure and appearance with high-quality crowns and bridges.",
          duration: "2–3 visits",
          price: "₹5,000 – ₹10,000",
          image: "../../Services/Restorative/Crown-Bridges.webp",
        },
        {
          name: "Dental Implants",
          slug: "implants",
          href: "/services/restorative-dentistry/implants",
          description:
            "Long-lasting tooth replacement solution that looks and functions like natural teeth.",
          duration: "Multiple visits",
          price: "₹30,000+",
          image: "../../Services/Restorative/Dental-implants.webp",
        },
      ],
    },
    {
      name: "Cosmetic",
      slug: "cosmetic-dentistry",
      href: "/services/cosmetic-dentistry",
      icon: "sparkles",
      description:
        "Enhance the beauty of your smile with aesthetic treatments tailored to your needs.",
      services: [
        {
          name: "Teeth Whitening",
          slug: "whitening",
          href: "/services/cosmetic-dentistry/whitening",
          description:
            "Brighten your smile with safe and effective professional whitening treatments.",
          duration: "1 hour",
          price: "₹3,000",
          image: "../../Services/Cosmetic/Teeth-whitening.webp",
        },
        {
          name: "Veneers",
          slug: "veneers",
          href: "/services/cosmetic-dentistry/veneers",
          description:
            "Thin porcelain shells designed to enhance tooth appearance and cover imperfections.",
          duration: "2–3 visits",
          price: "₹8,000+ per tooth",
          image: "../../Services/Cosmetic/Veneers.webp",
        },
        {
          name: "Smile Makeovers",
          slug: "smile-makeovers",
          href: "/services/cosmetic-dentistry/smile-makeovers",
          description:
            "Customized cosmetic treatment plans to transform your smile completely.",
          duration: "Consultation + Custom Plan",
          price: "Varies",
          image: "../../Services/Cosmetic/Smile-makeover.webp",
        },
      ],
    },
    {
      name: "Pediatric",
      slug: "pediatric-dentistry",
      href: "/services/pediatric-dentistry",
      icon: "baby",
      description:
        "Friendly, gentle dental care for infants, children, and adolescents.",
      services: [
        {
          name: "Children’s Exams",
          slug: "exams",
          href: "/services/pediatric-dentistry/exams",
          description:
            "Early detection and gentle care to keep your child’s teeth healthy from the start.",
          duration: "30 minutes",
          price: "₹700",
          image: "../../../../Services/Pediatric/Children-exams.webp",
        },
        {
          name: "Preventive Treatments",
          slug: "preventive",
          href: "/services/pediatric-dentistry/preventive",
          description:
            "Fluoride treatments and sealants designed to prevent cavities in young smiles.",
          duration: "20–30 minutes",
          price: "₹500 – ₹800",
          image: "../../Services/Pediatric/Preventive-treatment.webp",
        },
        {
          name: "Orthodontic Guidance",
          slug: "orthodontics",
          href: "/services/pediatric-dentistry/orthodontics",
          description:
            "Early assessments and interventions for proper dental alignment and jaw growth.",
          duration: "Initial consultation",
          price: "₹1,000",
          image: "../../Services/Pediatric/Orthodontic-guidance.webp",
        },
      ],
    },
  ],
};

// APPOINTMENT FORM
export const APPOINTMENT_FORM = {
  title: "Book Your Appointment",
  subtitle: "Let’s get your smile the care it deserves.",
  instructions:
    "Fill out the form below and our team will confirm your appointment shortly.",
  placeholders: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    service: "Select a Service",
    date: "Preferred Date",
    time: "Preferred Time",
    message: "Tell us more (optional)",
  },
  submitLabel: "Confirm Appointment",
  successMessage:
    "Thank you! Your appointment has been requested. We’ll contact you soon to confirm.",
  errorMessage: "Oops! Something went wrong. Please try again later.",
};

// FAQS
export const FAQS = {
  title: "Frequently Asked Questions",
  subtitle: "Have questions? We’ve got answers.",
  items: [
    {
      question: "Do you accept dental insurance?",
      answer:
        "Yes, we work with most major insurance providers. Please call us with your insurance details and we'll help verify your coverage.",
    },
    {
      question: "What safety precautions do you take?",
      answer:
        "We follow strict sterilization and infection control protocols, including the latest COVID-19 safety standards.",
    },
    {
      question: "Can I bring my child for their first dental check-up?",
      answer:
        "Of course! We love working with children and recommend scheduling their first visit by age 1 or within 6 months of their first tooth.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment options and accept most credit cards, HSA, and FSA accounts.",
    },
  ],
};

// BLOG PREVIEWS (OPTIONAL FOR SEO)
export const BLOG = {
  title: "Dental Tips & News",
  subtitle: "Helpful advice and the latest in oral health.",
  posts: [
    {
      title: "5 Daily Habits for a Healthier Smile",
      summary:
        "Simple daily routines to keep your teeth and gums in top shape.",
      slug: "daily-dental-habits",
      date: "2025-05-20",
    },
    {
      title: "What to Expect on Your First Dental Visit",
      summary:
        "Nervous about visiting the dentist? Here’s what you need to know.",
      slug: "first-dental-visit",
      date: "2025-04-15",
    },
  ],
};

// CONTACT PAGE
export const CONTACT = {
  title: "Get In Touch With Us",
  subtitle:
    "We’re here to answer any questions or schedule your next appointment.",
  address: {
    line1: "OraCare+ Dental Clinic",
    line2: "123 Smile Street",
    city: "Toothville, IN 56789",
  },
  email: "contact@oracareplus.com",
  phone: "(123) 456-7890",
  workingHours: [
    { day: "Monday - Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  mapEmbed: "https://www.google.com/maps/embed?pb=YOUR_MAP_LINK_HERE",
  contactForm: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "How can we help you?",
    submitLabel: "Send Message",
    successMessage:
      "Your message has been sent. We'll respond as soon as possible.",
  },
};

// FOOTER
export const FOOTER = {
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Careers", href: "/careers" },
  ],
  socialMedia: {
    facebook: "https://facebook.com/oracareplus",
    instagram: "https://instagram.com/oracareplus",
    twitter: "https://twitter.com/oracareplus",
    linkedin: "https://linkedin.com/company/oracareplus",
  },
  newsletter: {
    title: "Stay in touch",
    subtitle: "Get dental tips and offers straight to your inbox.",
    inputPlaceholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
  copyright: `© ${new Date().getFullYear()} OraCare+. All rights reserved.`,
};


// cta
export const CTAcontent = {
  title: "Ready for a Healthier, Happier Smile?",
  subheading: "Book your appointment today and experience personalized dental care that puts your comfort first.",
  cta: "Book your appointment",
  link: "/contact",
};


// why us
export const WhyUscontent =
{
  title: "Why Choose Us?",
  subtitle: "We blend modern dentistry with a patient-first approach to keep your smile bright and healthy.",
  reasons: [
    {
      title: "Compassionate Care",
      description: "Our team of experienced dentists is dedicated to providing compassionate care to our patients.",
    },
    {
      title: "Advanced Technology",
      description: "We use cutting-edge technology to deliver advanced dental services that go beyond traditional methods.",
    },
    {
      title: "Quality Assurance",
      description: "We are committed to providing quality dental care that meets the highest standards of hygiene and safety.",
    },
  ],
  whyUsImage: "./hero.avif",
  whyUsImageAlt: "Why choose Us Image",
};


// Review
export const Reviewcontent = {
  title: "What Our Patients Say",
  subtitle: "Reviews from our satisfied patients",
  reviews: [
    {
      name: "Vismara Martina",
      image: "../../Reviews/patient1.jpg",
      feedback:
        "I had an exceptional experience at Oracare+. The staff was welcoming and professional, and they made me feel comfortable throughout the treatment. Highly recommend for quality dental care.",
    },
    {
      name: "Arjun Mehta",
      image: "../../Reviews/patient2.jpg",
      feedback:
        "Very friendly and knowledgeable team. They explained every procedure clearly. The clinic was clean and modern. My root canal treatment went smoothly and pain-free.",
    },
    {
      name: "Samantha Rhodes",
      image: "../../Reviews/patient3.jpg",
      feedback:
        "Oracare+ has completely changed my view on dental visits. The dentists are caring and truly listen. I got a smile makeover and couldn't be happier with the results!",
    },
    {
      name: "Rahul Kapoor",
      image: "../../Reviews/patient4.jpg",
      feedback:
        "I came in with severe tooth pain and left with relief and a treatment plan. The team was attentive and responsive. This will be my go-to clinic going forward.",
    },
    {
      name: "Emily Watson",
      image: "../../Reviews/patient5.jpg",
      feedback:
        "From consultation to the final treatment, everything was seamless. The staff ensured I felt safe and confident at every step. Truly modern dental care with a human touch.",
    },
    {
      name: "Railey Johnson",
      image: "../../Reviews/patient6.jpg",
      feedback:
        "Great experience overall. Booking was simple, wait time was minimal, and the dentists were extremely skilled. I appreciated the transparency in pricing and options.",
    },
  ],
};
