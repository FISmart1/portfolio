"use client";

import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number; // durasi animasi scroll
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  className,
  duration = 10,
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6"
      >
        {/* Duplikat konten supaya loop scroll smooth */}
        {[...new Array(2)].map((_, copyIndex) => (
          <React.Fragment key={copyIndex}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 sm:p-10 rounded-3xl border shadow-lg shadow-primary/10 w-full bg-background"
              >
                <div className="text-sm sm:text-base">{t.text}</div>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col">
                    <span className="font-medium tracking-tight">{t.name}</span>
                    <span className="text-sm opacity-60">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
