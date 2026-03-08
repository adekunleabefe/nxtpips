"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { slideUp } from "../animations"

export default function FinalCTA() {
  return (
    <section id="apply" className="py-32">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 bg-[#0B1220]/70 backdrop-blur p-16 overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[140px] opacity-40"></div>

          {/* Radial */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]"></div>

          <div className="relative">

            <p className="text-emerald-400 text-sm tracking-widest uppercase mb-4">
              TPQP Cohort 01
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Ready To Trade With
              <span className="text-emerald-400"> Institutional Discipline?</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-xl mx-auto">
              Apply for the Trader Performance Qualification Program and
              join a structured evaluation designed to identify disciplined
              traders for capital allocation within the NxtPips ecosystem.
            </p>

            {/* Scarcity */}
            <p className="text-sm text-gray-500 mt-6">
              Only <span className="text-emerald-400 font-medium">30 traders</span> will be selected for Cohort 01
            </p>

            {/* Buttons */}
            <div className="mt-10 flex justify-center gap-4 flex-wrap">

              <Link
                href="/apply"
                className="bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4 rounded-lg font-medium transition shadow-[0_0_40px_rgba(16,185,129,0.35)] hover:shadow-[0_0_60px_rgba(16,185,129,0.45)]"
              >
                Apply For Cohort 01
              </Link>

              <Link
                href="/tpqp"
                className="border border-white/10 hover:border-white px-10 py-4 rounded-lg transition hover:bg-white/5"
              >
                View Program Details
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}