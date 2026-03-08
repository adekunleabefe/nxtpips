"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { slideUp, staggerContainer } from "../animations"

export default function Hero() {
  return (
    <section
      id="tpqp"
      className="relative min-h-screen flex items-center scroll-mt-24 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Trading bull background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent"></div>

      {/* glow */}
      <div className="absolute right-0 top-0 w-[650px] h-[650px] bg-emerald-500/10 blur-[200px] rounded-full"></div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 w-full z-10"
      >
        <div className="max-w-2xl">

          <motion.p
            variants={slideUp}
            className="text-emerald-400 text-sm uppercase tracking-widest mb-4"
          >
            The Future Of Funded Trading
          </motion.p>

          <motion.h1
            variants={slideUp}
            className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
          >
            Building The Next Generation Of
            <span className="text-emerald-400"> Funded Traders</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="mt-6 text-gray-400 max-w-xl"
          >
            NxtPips identifies disciplined traders through structured
            performance programs and supports them with mentorship,
            evaluation, and internal capital allocation.
          </motion.p>

          <motion.div
            variants={slideUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/apply"
              className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-lg font-medium transition shadow-[0_0_40px_rgba(16,185,129,0.35)] text-center"
            >
              Apply For TPQP
            </a>

            <a
              href="#how-it-works"
              className="border border-white/20 px-8 py-4 rounded-lg hover:border-white transition text-center"
            >
              Learn More
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}