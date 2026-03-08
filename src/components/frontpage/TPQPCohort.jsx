"use client"

import Link from "next/link"
import { Users, Calendar, TrendingUp, ClipboardList } from "lucide-react"
import { motion } from "framer-motion"
import { slideUp, staggerContainer } from "../animations"
import { useEffect, useState } from "react"

export default function TPQPCohort() {

  const [traders, setTraders] = useState(0)

  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      count++
      setTraders(count)

      if (count === 30) clearInterval(interval)
    }, 40)

    return () => clearInterval(interval)
  }, [])


  return (
    <section className="py-28">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-emerald-400 text-sm tracking-widest uppercase mb-4">
            Trader Performance Qualification Program
          </p>

          <h2 className="text-4xl font-semibold">
            TPQP Cohort 01
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A structured evaluation lab designed to identify disciplined
            and profitable traders for capital allocation within the
            NxtPips ecosystem.
          </p>

        </motion.div>


        {/* Main Card */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-[#0B1220]/70 backdrop-blur border border-white/5 rounded-2xl p-12"
        >

          <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 blur-2xl opacity-40"></div>

          <div className="relative">

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-6"
            >

              {/* Applications */}
              <motion.div
                variants={slideUp}
                className="bg-[#0F172A]/70 border border-white/5 rounded-xl p-6 text-center hover:border-emerald-500/40 transition"
              >
                <ClipboardList className="mx-auto mb-3 text-emerald-400" size={26} />

                <p className="text-gray-500 text-sm">Applications</p>

                <p className="text-2xl font-semibold text-emerald-400">
                  Open
                </p>
              </motion.div>


              {/* Traders */}
              <motion.div
                variants={slideUp}
                className="bg-[#0F172A]/70 border border-white/5 rounded-xl p-6 text-center hover:border-emerald-500/40 transition"
              >
                <Users className="mx-auto mb-3 text-emerald-400" size={26} />

                <p className="text-gray-500 text-sm">Traders Selected</p>

                <p className="text-2xl font-semibold">
                  {traders}
                </p>
              </motion.div>


              {/* Evaluation */}
              <motion.div
                variants={slideUp}
                className="bg-[#0F172A]/70 border border-white/5 rounded-xl p-6 text-center hover:border-emerald-500/40 transition"
              >
                <Calendar className="mx-auto mb-3 text-emerald-400" size={26} />

                <p className="text-gray-500 text-sm">Evaluation Period</p>

                <p className="text-2xl font-semibold">
                  30 Days
                </p>
              </motion.div>


              {/* Capital */}
              <motion.div
                variants={slideUp}
                className="bg-[#0F172A]/70 border border-white/5 rounded-xl p-6 text-center hover:border-emerald-500/40 transition"
              >
                <TrendingUp className="mx-auto mb-3 text-emerald-400" size={26} />

                <p className="text-gray-500 text-sm">Capital Allocation</p>

                <p className="text-2xl font-semibold text-emerald-400">
                  Top Performers
                </p>
              </motion.div>

            </motion.div>


            {/* Evaluation Progress */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12"
            >

              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span>Evaluation Progress</span>
                <span>0 / 30 Days</span>
              </div>

              <div className="w-full bg-[#111827] rounded-full h-2 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-emerald-500"
                />

              </div>

            </motion.div>


            {/* CTA */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 flex justify-center"
            >

              <Link
                href="/apply"
                className="bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4 rounded-lg font-medium transition hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.35)]"
              >
                Apply For Cohort 01
              </Link>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}