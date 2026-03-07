export default function Footer() {
    return (
      <footer className="relative py-20 border-t border-white/5 overflow-hidden">
  
        {/* subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-500/10 blur-[120px] opacity-40"></div>
  
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
  
          {/* Brand */}
          <div>
  
            <h3 className="text-xl font-semibold">
              Nxt<span className="text-emerald-400">Pips</span>
            </h3>
  
            <p className="text-gray-400 text-sm mt-4 max-w-sm leading-relaxed">
              A structured ecosystem designed to identify,
              develop, and support disciplined traders through
              performance evaluation and capital allocation.
            </p>
  
          </div>
  
          {/* Programs */}
          <div>
  
            <h4 className="font-semibold mb-4 text-white">
              Programs
            </h4>
  
            <ul className="space-y-3 text-gray-400 text-sm">
  
              <li className="hover:text-white transition cursor-pointer">
                TPQP
              </li>
  
              <li className="hover:text-white transition cursor-pointer">
                NFAP
              </li>
  
              <li className="hover:text-white transition cursor-pointer">
                Inner Circle
              </li>
  
            </ul>
  
          </div>
  
          {/* Company */}
          <div>
  
            <h4 className="font-semibold mb-4 text-white">
              Company
            </h4>
  
            <ul className="space-y-3 text-gray-400 text-sm">
  
              <li className="hover:text-white transition cursor-pointer">
                About
              </li>
  
              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>
  
              <li className="hover:text-white transition cursor-pointer">
                Terms
              </li>
  
            </ul>
  
          </div>
  
        </div>
  
        {/* bottom */}
        <div className="relative text-center text-gray-500 text-sm mt-16">
          © {new Date().getFullYear()} NxtPips. All rights reserved.
        </div>
  
      </footer>
    )
  }