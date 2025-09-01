"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const triggerPoint = hero.offsetHeight + 200; // adjust offset if needed
    const handleScroll = () => {
      setShow(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="hidden sm:block fixed bottom-8 right-8 bg-brand-evergreen text-brand-offwhite px-6 py-4 rounded-2xl shadow-lg z-50"
        >
          <button className="bg-brand-safety text-white font-sans font-medium px-4 py-2 rounded-lg hover:scale-105 transition">
            Get a Quote
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
