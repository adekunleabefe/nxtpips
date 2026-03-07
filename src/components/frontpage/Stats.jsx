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
  
            {/* subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 blur-3xl opacity-30"></div>
  
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
  
              <div>
                <p className="text-4xl font-semibold text-emerald-400">
                  30
                </p>
                <p className="text-gray-400 mt-2 text-sm">
                  Traders Per Cohort
                </p>
              </div>
  
              <div>
                <p className="text-4xl font-semibold text-emerald-400">
                  30D
                </p>
                <p className="text-gray-400 mt-2 text-sm">
                  Evaluation Period
                </p>
              </div>
  
              <div>
                <p className="text-4xl font-semibold text-emerald-400">
                  Top 1%
                </p>
                <p className="text-gray-400 mt-2 text-sm">
                  Capital Allocation
                </p>
              </div>
  
              <div>
                <p className="text-4xl font-semibold text-emerald-400">
                  1
                </p>
                <p className="text-gray-400 mt-2 text-sm">
                  Trader Ecosystem
                </p>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    )
  }