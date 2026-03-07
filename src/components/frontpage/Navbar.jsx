"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Apply", href: "#apply" }
  ]

  const handleClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-semibold"
        >
          Nxt<span className="text-emerald-400">Pips</span>
        </a>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

        </div>


        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <button className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-2 rounded-lg text-sm font-medium transition">
            Login
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden border-t border-white/5 bg-[#05070d]">

          <div className="px-6 py-6 flex flex-col gap-6 text-gray-300 text-sm">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleClick}
                className="hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            <button className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-2 rounded-lg text-sm font-medium transition">
              Login
            </button>

          </div>

        </div>

      )}

    </nav>
  )
}