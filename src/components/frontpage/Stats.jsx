import Link from "next/link"

export default function Stats() {
  return (
    <section className="py-28">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl font-semibold">
            Built For <span className="text-emerald-400">Performance</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A structured ecosystem designed to identify and support
            disciplined traders.
          </p>

        </div>

        {/* Stats Container */}
        <div className="relative rounded-2xl border border-white/5 bg-[#0B1220]/70 backdrop-blur p-12">

          {/* glow */}
          <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 blur-3xl opacity-30"></div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

            <div>
              <p className="text-4xl font-semibold text-emerald-400">30</p>
              <p className="text-gray-400 mt-2 text-sm">Traders Per Cohort</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-emerald-400">30D</p>
              <p className="text-gray-400 mt-2 text-sm">Evaluation Period</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-emerald-400">Top 1%</p>
              <p className="text-gray-400 mt-2 text-sm">Capital Allocation</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-emerald-400">1</p>
              <p className="text-gray-400 mt-2 text-sm">Trader Ecosystem</p>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <Link
            href="/apply"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-lg font-medium transition shadow-[0_0_30px_rgba(16,185,129,0.35)]"
          >
            Apply For Cohort 01
          </Link>

        </div>

      </div>

    </section>
  )
}