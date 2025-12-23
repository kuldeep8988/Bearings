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

      {/* ================= HERO ================= */}
      <section id="home" className="relative h-[520px] overflow-hidden">
        <motion.img
          style={{ y: heroY, opacity: heroOpacity }}
          src="https://i.pinimg.com/736x/58/f2/cd/58f2cdaa351f461e24651d0b363d260a.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full flex flex-col justify-center items-center text-white text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Precision Bearing Solutions
          </h1>
          <p className="max-w-xl mb-6">
            High-quality industrial bearings trusted worldwide.
          </p>
          <a
            href="#products"
            className="px-8 py-3 bg-yellow-400 text-slate-900 rounded-full font-semibold hover:bg-yellow-500"
          >
            Explore Products
          </a>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="py-20"
      >
        <motion.h2
          variants={sectionVariant}
          className="text-center text-3xl font-bold mb-12"
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
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <img src={item.img} className="w-20 mx-auto mb-4" />
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
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
