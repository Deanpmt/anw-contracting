"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/hero_bg.jpg"
          alt="Background showing Northwest tree work"
          fill
          priority
          quality={100}
          className="object-cover object-right-bottom"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-2 sm:pb-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl"
        >
          Tree and Dirt Work,{" "}
          <span className="text-brand-safety">Done Right!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-4 sm:mt-6 max-w-4xl mx-auto text-base sm:text-lg text-gray-200"
        >
          Professional tree and land services across the Inland Northwest.  
          Licensed, bonded, and insured.
        </motion.p>
      </div>
    </section>
  );
}
