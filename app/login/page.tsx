"use client"

import { useState } from "react"
import { supabase } from "@/src/lib/supabase"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    router.push("/dashboard")
  }

  const input =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-400 transition"

  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)]">

        <h1 className="text-3xl font-semibold mb-2">
          Login
        </h1>

        <p className="text-gray-400 mb-8">
          Access your NxtPips account
        </p>

        <div className="space-y-6">

          <input
            className={input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className={input}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-3 rounded-lg font-medium transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </div>

      </div>

    </main>
  )
}