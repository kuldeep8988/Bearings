import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);

  /* ================= SCROLL ================= */
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.6]);

  /* ================= ANIMATION VARIANTS ================= */
  const sectionVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  /* ================= DATA ================= */
  const services = [
    {
      title: "Quality Products",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      desc: "High-precision industrial bearings with strict quality control.",
    },
    {
      title: "Custom Engineering",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048946.png",
      desc: "Tailor-made bearing solutions for special applications.",
    },
    {
      title: "Service & Repair",
      img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
      desc: "Maintenance, repair & retrofit services for longer life.",
    },
  ];

  const products = [
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2022/11/GV/VD/CN/13453853/untitled2-500x500.png",
      name: "Ball Bearings",
    },
    {
      img: "https://tiimg.tistatic.com/fp/1/002/264/20mmx52mmx22-2mm-angular-contact-ball-bearing-for-sliding-contact-bearing-829.jpg",
      name: "Angular Bearings",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tJpDJZ6b3xg-r4Cgr8ivchC6cF_Da9xvXQ&s",
      name: "Roller Bearings",
    },
    {
      img: "https://i.pinimg.com/736x/58/f2/cd/58f2cdaa351f461e24651d0b363d260a.jpg",
      name: "Thrust Bearings",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <img
            src="/b9e1e036-8341-4d0b-8ece-857476116814.jpeg"
            alt="logo"
            className="h-12 hover:scale-110 transition"
          />

          <ul className="hidden md:flex gap-8 text-white font-medium">
            {["Home", "About", "Services", "Products", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {open && (
          <ul className="md:hidden bg-slate-800 text-white px-6 py-4 space-y-4">
            {["Home", "About", "Services", "Products", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.nav>
      {/* ================= HERO SECTION ================= */}
{/* ================= HERO SECTION ================= */}
<motion.section
  id="home"
  style={{ y: heroY, opacity: heroOpacity }}
  className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
>
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1581091870627-3c92d3a0f5b4"
    alt="Industrial"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/40"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center md:text-left"
      >
        <h5 className="text-amber-400 font-semibold tracking-widest mb-4 text-sm sm:text-base">
          WELCOME TO ABC BEARINGS
        </h5>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Precision Engineering <br />
          <span className="text-amber-400">That Keeps You Moving</span>
        </h1>

        <p className="text-slate-300 max-w-xl mx-auto md:mx-0 mb-8 text-sm sm:text-base leading-relaxed">
          We manufacture high-performance industrial bearings engineered
          for durability, accuracy, and long service life across industries.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#products"
            className="px-8 py-3 bg-amber-500 text-slate-900 rounded-full font-semibold
            hover:bg-amber-400 transition"
          >
            View Products
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-white/40 text-white rounded-full font-semibold
            hover:bg-white hover:text-slate-900 transition"
          >
            Get Quote
          </a>
        </div>
      </motion.div>

      {/* RIGHT CARD (HIDDEN ON SMALL) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="hidden md:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <h4 className="text-white text-xl font-semibold mb-6">
            Why Choose Us?
          </h4>

          <ul className="space-y-4">
            {[
              "ISO Certified Manufacturing",
              "20+ Years Experience",
              "Advanced CNC Machinery",
              "Trusted Global Clients",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-200">
                <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

    </div>
  </div>
</motion.section>
    

      {/* ================= ABOUT COMPANY ================= */}
      {/* ================= ABOUT SECTION ================= */}
<motion.section
  id="about"
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.3 }}
  className="py-20 sm:py-24 bg-white"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-center">

    {/* IMAGE */}
    <motion.div
      variants={sectionVariant}
      className="relative mx-auto md:mx-0 max-w-md md:max-w-full"
    >
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2022/11/GV/VD/CN/13453853/untitled2-500x500.png"
        alt="About ABC Bearings"
        className="rounded-2xl shadow-2xl w-full"
      />

      <div className="absolute -bottom-5 -right-5 bg-amber-500 px-5 py-4 rounded-xl shadow-xl">
        <h4 className="text-2xl font-bold text-slate-900">20+</h4>
        <p className="text-sm font-medium text-slate-900">Years Experience</p>
      </div>
    </motion.div>

    {/* CONTENT */}
    <motion.div variants={sectionVariant} className="text-center md:text-left">
      <h5 className="text-amber-500 font-semibold tracking-widest mb-3">
        ABOUT COMPANY
      </h5>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
        Engineering Excellence <br />
        <span className="text-amber-500">Since Two Decades</span>
      </h2>

      <p className="text-slate-600 mb-5 text-sm sm:text-base leading-relaxed">
        <strong>ABC Bearings Pvt. Ltd.</strong> is a trusted manufacturer of
        precision industrial bearings, serving automotive, machinery,
        textile, and power industries with unmatched quality.
      </p>

      <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
        Our commitment to innovation, strict quality control, and customer
        satisfaction makes us a preferred partner for businesses worldwide.
      </p>

      {/* FEATURES */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left">
        {[
          "ISO Certified Processes",
          "Modern Manufacturing Facility",
          "Expert Engineering Team",
          "Global Quality Compliance",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
            <p className="text-slate-700 font-medium">{item}</p>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="#services"
          className="px-8 py-3 bg-slate-900 text-white rounded-full
          hover:bg-amber-500 hover:text-slate-900 transition font-semibold"
        >
          Our Services
        </a>

        <a
          href="#contact"
          className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full
          hover:bg-slate-900 hover:text-white transition font-semibold"
        >
          Contact Us
        </a>
      </div>
    </motion.div>
  </div>
</motion.section>

      {/* ================= SERVICES ================= */}
    <motion.section
  id="services"
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.3 }}
  className="py-20 bg-slate-50"
>
  <motion.h2
    variants={sectionVariant}
    className="text-center text-3xl font-bold mb-12 text-slate-900"
  >
    Our Services
  </motion.h2>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
    {services.map((item, i) => (
      <motion.div
        key={i}
        custom={i}
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        whileHover={{ y: -12 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200
        hover:border-amber-400 transition-all duration-300 text-center flex flex-col"
      >
        <img src={item.img} className="w-20 mx-auto mb-4" alt={item.title} />

        <h4 className="font-semibold text-lg text-slate-900 mb-2">
          {item.title}
        </h4>

        <p className="text-slate-600 mb-6 flex-grow">
          {item.desc}
        </p>

        {/* KNOW MORE BUTTON */}
        <button
          className="mx-auto px-6 py-2 border-2 border-slate-900 text-slate-900
          rounded-full font-medium hover:bg-amber-500 hover:border-amber-500
          hover:text-slate-900 transition-all duration-300"
        >
          Know More
        </button>
      </motion.div>
    ))}
  </div>
</motion.section>
      {/* ================= PRODUCTS ================= */}
      <motion.section id="products" className="py-20 bg-gray-100">
        <motion.h2
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          className="text-center text-3xl font-bold mb-12"
        >
          Our Products
        </motion.h2>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.08 }}
              className="bg-white rounded-2xl p-5 shadow-lg"
            >
              <img
                src={item.img}
                alt=""
                className="h-40 w-full object-cover rounded-xl mb-4"
              />
              <h4 className="font-semibold mb-3">{item.name}</h4>
              <button className="w-full py-2 bg-yellow-400 rounded-full hover:bg-slate-800 hover:text-white">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="bg-slate-900 text-gray-300 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white font-bold mb-3">ABC Bearings Pvt. Ltd.</h4>
            <p>
              Delivering precision-engineered bearing solutions for modern
              industries.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Products</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Business Hours</h4>
            <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Contact Info</h4>
            <p>📍 Ahmedabad, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ info@abcbearings.com</p>
          </div>
        </div>

        <p className="text-center text-sm mt-10 text-gray-400">
          © {new Date().getFullYear()} ABC Bearings Pvt. Ltd. All rights reserved.
        </p>
      </footer>
    </>
  );
}
