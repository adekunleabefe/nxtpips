import Navbar from "../src/components/frontpage/Navbar"
import Hero from "../src/components/frontpage/Hero"
import HowItWorks from "../src/components/frontpage/HowItWorks"
import TPQPCohort from "../src/components/frontpage/TPQPCohort"
import Programs from "../src/components/frontpage/Programs"
import Stats from "../src/components/frontpage/Stats"
import FinalCTA from "../src/components/frontpage/FinalCTA"
import Footer from "../src/components/frontpage/Footer"

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-[#05070B] via-[#07131A] to-[#05070B]">

      {/* Top ambient light */}
      <div className="absolute top-[-300px] right-[-200px] w-[700px] h-[700px] bg-emerald-500/20 blur-[180px] rounded-full"></div>

      {/* Bottom ambient light */}
      <div className="absolute bottom-[-300px] left-[-200px] w-[700px] h-[700px] bg-green-400/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10">

        <Navbar />

        <Hero />
        <HowItWorks />
        <TPQPCohort />
        <Programs />
        <Stats />
        <FinalCTA />
        <Footer />

      </div>
    </div>
  )
}