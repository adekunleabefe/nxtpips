"use client"

import { useState } from "react"
import { supabase } from "@/src/lib/supabase"
export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    country: "",
    contact: "",
    years_trading: "",
    market: "",
    monthly_return: "",
    strategy: "",
    track_record: ""
  })

  const next = () => setStep((s) => Math.min(s + 1, 4))
  const prev = () => setStep((s) => Math.max(s - 1, 1))

  const progress = (step / 4) * 100

  const input =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-400 transition"

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const submitApplication = async () => {
    setLoading(true)

    const { error } = await supabase
      .from("trader_applications")
      .insert([form])

    setLoading(false)

    if (error) {
      console.error(error)
      alert("Submission failed. Please try again.")
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-semibold mb-4">
            Application Submitted
          </h1>
          <p className="text-gray-400">
            Thank you for applying to TPQP Cohort 01.  
            The NxtPips team will review your application and contact you if selected.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-2xl bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)]">

        <h1 className="text-3xl font-semibold mb-2">
          TPQP Trader Application
        </h1>

        <p className="text-gray-400 mb-8">
          Cohort 01 — Only 30 traders will be selected.
        </p>

        {/* Progress bar */}

        <div className="w-full h-2 bg-white/10 rounded-full mb-10 overflow-hidden">
          <div
            className="h-full bg-emerald-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Step 1 — Identity</h2>

            <input
              className={input}
              placeholder="Full Name"
              value={form.full_name}
              onChange={(e) => handleChange("full_name", e.target.value)}
            />

            <input
              className={input}
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <input
              className={input}
              placeholder="Country"
              value={form.country}
              onChange={(e) => handleChange("country", e.target.value)}
            />

            <input
              className={input}
              placeholder="Telegram / Discord"
              value={form.contact}
              onChange={(e) => handleChange("contact", e.target.value)}
            />
          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Step 2 — Trading Background</h2>

            <select
              className={input}
              value={form.years_trading}
              onChange={(e) => handleChange("years_trading", e.target.value)}
            >
              <option value="">Years Trading</option>
              <option>0-1</option>
              <option>1-3</option>
              <option>3-5</option>
              <option>5+</option>
            </select>

            <select
              className={input}
              value={form.market}
              onChange={(e) => handleChange("market", e.target.value)}
            >
              <option value="">Primary Market</option>
              <option>Forex</option>
              <option>Crypto</option>
              <option>Indices</option>
              <option>Futures</option>
            </select>

            <input
              className={input}
              placeholder="Average Monthly Return (%)"
              value={form.monthly_return}
              onChange={(e) => handleChange("monthly_return", e.target.value)}
            />
          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium">Step 3 — Strategy</h2>

            <textarea
              rows={5}
              className={input}
              placeholder="Describe your trading strategy"
              value={form.strategy}
              onChange={(e) => handleChange("strategy", e.target.value)}
            />

            <input
              className={input}
              placeholder="MyFXBook / Track Record Link (optional)"
              value={form.track_record}
              onChange={(e) => handleChange("track_record", e.target.value)}
            />
          </div>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <div className="space-y-6 text-center">
            <h2 className="text-xl font-semibold">
              Review & Submit
            </h2>

            <p className="text-gray-400">
              Your application will be reviewed by the NxtPips team.
              Selected traders will receive evaluation access.
            </p>

            <button
              onClick={submitApplication}
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-4 rounded-lg font-medium shadow-[0_0_30px_rgba(16,185,129,0.35)] transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        )}

        {/* Navigation */}

        <div className="flex justify-between mt-10">

          {step > 1 ? (
            <button
              onClick={prev}
              className="px-6 py-3 border border-white/10 rounded-lg hover:border-white/20 transition"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 && (
            <button
              onClick={next}
              className="px-6 py-3 bg-emerald-500 text-black rounded-lg font-medium hover:bg-emerald-600 transition"
            >
              Continue
            </button>
          )}

        </div>

      </div>

    </main>
  )
}