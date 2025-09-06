"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ristina Eka Salsabila, S.kom",
    role: "Tenaga Pendidik Bidang Sistem Aplikasi dan Service (SAAS)",
    text: "Pelayanan sangat luar biasa! Prosesnya cepat, profesional, dan hasilnya jauh melampaui ekspektasi saya.",
    image: "/bila.jpeg",
  },
  {
    id: 2,
    name: "Muhammad Dzikri Fauzan, S.Kom",
    role: "Developer, TechnoIDKetua Program Keahlian SIJA",
    text: "Tim ini benar-benar ahli di bidangnya. Komunikasi jelas, solusi tepat, dan hasil kerja berkualitas.",
    image: "/dzikri.jpg",
  },
  {
    id: 3,
    name: "Fatimah Azzahra, S.Si",
    role: "Tenaga Pendidik Bidang Design & Informatika",
    text: "Pengalaman bekerja sama sangat menyenangkan. Saya pasti akan merekomendasikan ke rekan bisnis lainnya.",
    image: "/mimah.png",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000); // ganti setiap 5 detik

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="w-full from-gray-50 via-white to-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 dark:text-white">
          Apa Kata Mereka?
        </h2>
        <p className="text-gray-600 mb-12 dark:text-white">
          Inilah pengalaman dan kesan klien setelah berkolaborasi bersama saya dalam berbagai proyek.
        </p>

        {/* Card */}
        <div className="relative">
          <motion.div
            key={testimonials[active].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-transparent dark:border dark:border-white border rounded-2xl p-8 md:p-10 max-w-3xl mx-auto"
          >
            <FaQuoteLeft className="text-3xl text-black dark:text-white mb-4 mx-auto" />
            <p className="text-gray-700 dark:text-white text-lg italic mb-6">
              {testimonials[active].text}
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[active].image}
                alt={testimonials[active].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  {testimonials[active].name}
                </h4>
                <span className="text-sm text-gray-500">
                  {testimonials[active].role}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  active === index
                    ? "bg-black scale-125 dark:bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
