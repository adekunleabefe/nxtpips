"use client"

import { motion } from "framer-motion"
import { slideUp, staggerContainer } from "../animations"
import { GraduationCap, Rocket, Users } from "lucide-react"

export default function Programs() {
  return (
    <section id="programs" className="py-28">

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
            NxtPips Ecosystem
          </p>

          <h2 className="text-4xl font-semibold">
            The <span className="text-emerald-400">NxtPips</span> Ecosystem
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our structured ecosystem supports traders at every stage —
            from performance evaluation to trader development and
            professional community access.
          </p>

        </motion.div>


        {/* Programs Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 items-stretch"
        >

          {/* TPQP */}
          <motion.div
            variants={slideUp}
            className="group relative flex flex-col justify-between bg-[#0B1220]/70 backdrop-blur border border-emerald-400/40 rounded-xl p-8 hover:-translate-y-2 transition duration-300"
          >

            <div className="absolute inset-0 opacity-20 bg-emerald-500/10 blur-2xl rounded-xl"></div>

            <div className="relative">

              <div className="flex items-center justify-between mb-6">

                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <GraduationCap size={22} />
                </div>

                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full">
                  Applications Open
                </span>

              </div>

              <h3 className="text-xl font-semibold mb-3">
                TPQP
              </h3>

              <p className="text-emerald-400 text-sm mb-4">
                Trader Performance Qualification Program
              </p>

              <p className="text-gray-400 text-sm mb-6">
                A structured evaluation system designed to identify
                disciplined traders capable of managing capital within
                the NxtPips ecosystem.
              </p>

            </div>

            <button className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition">
              Apply Now →
            </button>

          </motion.div>


          {/* NFAP */}
          <motion.div
            variants={slideUp}
            className="group relative flex flex-col justify-between bg-[#0B1220]/70 backdrop-blur border border-white/5 rounded-xl p-8 hover:border-emerald-400/40 transition duration-300 hover:-translate-y-2"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-500/5 blur-xl rounded-xl"></div>

            <div className="relative">

              <div className="flex items-center justify-between mb-6">

                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Rocket size={22} />
                </div>

                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                  Trader Development
                </span>

              </div>

              <h3 className="text-xl font-semibold mb-3">
                NFAP
              </h3>

              <p className="text-emerald-400 text-sm mb-4">
                NxtPips Funding Accelerator Program
              </p>

              <p className="text-gray-400 text-sm mb-6">
                A structured rebuild program designed to help struggling
                traders develop consistency and pass funded trading
                evaluations.
              </p>

            </div>

            <button className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition">
              Learn More →
            </button>

          </motion.div>


          {/* Inner Circle */}
          <motion.div
            variants={slideUp}
            className="group relative flex flex-col justify-between bg-[#0B1220]/70 backdrop-blur border border-white/5 rounded-xl p-8 hover:border-emerald-400/40 transition duration-300 hover:-translate-y-2"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-500/5 blur-xl rounded-xl"></div>

            <div className="relative">

              <div className="flex items-center justify-between mb-6">

                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Users size={22} />
                </div>

                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                  Members Only
                </span>

              </div>

              <h3 className="text-xl font-semibold mb-3">
                Inner Circle
              </h3>

              <p className="text-emerald-400 text-sm mb-4">
                Professional Trader Community
              </p>

              <p className="text-gray-400 text-sm mb-6">
                A professional network where traders collaborate,
                share insights, and access signals, mentorship,
                and trading resources.
              </p>

            </div>

            <button className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition">
              Join Community →
            </button>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}