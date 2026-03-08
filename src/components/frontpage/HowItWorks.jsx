"use client"

import Link from "next/link"
import { UserPlus, LineChart, Wallet } from "lucide-react"
import { motion } from "framer-motion"
import { slideUp, staggerContainer } from "../animations"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 scroll-mt-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-emerald-400 text-sm uppercase tracking-widest mb-4">
            Process
          </p>

          <h2 className="text-4xl font-semibold">
            How <span className="text-emerald-400">NxtPips</span> Works
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our ecosystem identifies disciplined traders, evaluates their
            performance, and allocates capital to those who demonstrate
            consistency and strong risk management.
          </p>
        </motion.div>


        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 relative"
        >

          {/* Step 1 */}
          <motion.div
            variants={slideUp}
            className="group relative bg-[#0B1220]/70 backdrop-blur border border-white/5 rounded-xl p-8 hover:border-emerald-500/40 transition duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-500/5 blur-xl rounded-xl"></div>

            <div className="relative">

              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-6">
                <UserPlus size={22} />
              </div>

              <div className="text-emerald-400 text-xs tracking-widest mb-3">
                STEP 01
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Apply For TPQP
              </h3>

              <p className="text-gray-400 text-sm">
                Traders submit their application to join the Trader
                Performance Qualification Program where candidates
                are selected for evaluation.
              </p>

            </div>
          </motion.div>


          {/* Step 2 */}
          <motion.div
            variants={slideUp}
            className="group relative bg-[#0B1220]/70 backdrop-blur border border-white/5 rounded-xl p-8 hover:border-emerald-500/40 transition duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-500/5 blur-xl rounded-xl"></div>

            <div className="relative">

              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-6">
                <LineChart size={22} />
              </div>

              <div className="text-emerald-400 text-xs tracking-widest mb-3">
                STEP 02
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Performance Evaluation
              </h3>

              <p className="text-gray-400 text-sm">
                Selected traders enter a structured performance evaluation
                where discipline, risk management, and profitability are assessed.
              </p>

            </div>
          </motion.div>


          {/* Step 3 */}
          <motion.div
            variants={slideUp}
            className="group relative bg-[#0B1220]/70 backdrop-blur border border-white/5 rounded-xl p-8 hover:border-emerald-500/40 transition duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-500/5 blur-xl rounded-xl"></div>

            <div className="relative">

              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-6">
                <Wallet size={22} />
              </div>

              <div className="text-emerald-400 text-xs tracking-widest mb-3">
                STEP 03
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Capital Allocation
              </h3>

              <p className="text-gray-400 text-sm">
                Top performing traders qualify for internal capital allocation
                and may gain additional opportunities within the NxtPips ecosystem.
              </p>

            </div>
          </motion.div>

        </motion.div>


        {/* CTA */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-20"
        >

          <Link
            href="/apply"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-lg font-medium transition shadow-[0_0_40px_rgba(16,185,129,0.35)]"
          >
            Start Your Evaluation
          </Link>

        </motion.div>

      </div>

    </section>
  )
}