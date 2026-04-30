import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Code, Wrench, Users, ArrowRight, Zap, Rocket, Building2, CheckCircle, Target } from "lucide-react";
import { SEO } from "../components/SEO";

export default function AILabs() {
  const [binnyExpanded, setBinnyExpanded] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="GSSF AI Labs - Undergraduate Product Internships"
        description="GSSF AI Labs places high-potential undergraduate product designers and AI engineers into direct roles building applied AI products for the GSSF ecosystem and its university partners."
        path="/ai-labs"
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6"><span className="text-sm uppercase tracking-widest text-white/80 font-semibold">GLOBAL AI Labs</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Build From Day One
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              GSSF AI Labs places high-potential undergraduate product designers and AI engineers into direct roles building applied AI products for the GSSF ecosystem and its university partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is GSSF AI Labs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What Is GSSF AI Labs?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              GSSF AI Labs is an undergraduate product internship program. Students are placed directly into building functional AI tools for internal foundation and university use — not as observers or contributors to hypothetical projects, but as the primary builders. The program is built on a single conviction: the best way to develop product and engineering talent is to give students real problems and trust them to solve them.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-10 rounded-lg max-w-4xl border-l-4 border-[#242EC0]">
            <p className="text-xl italic text-gray-800 leading-relaxed">
              "Day-one product management and engineering experience — not simulations, not case studies. Real products. Real use."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Who We're Looking For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Managers */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <Target className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Product Managers</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Undergraduate students with strong product thinking, an ability to translate ambiguous problems into clear requirements, and a drive to ship products that real users depend on.
              </p>
            </motion.div>

            {/* AI Engineers */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <Zap className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">AI Engineers</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Undergraduate students with applied machine learning, software engineering, or AI development experience. Builders who want their work to ship and be used.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Build */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What You'll Build
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mb-16">
              AI Labs students build applied products for use across the GSSF ecosystem. Projects are functional and deployed, not archived.
            </p>
          </motion.div>

          {/* Current Project: Venture Innovation Platform */}
          <motion.div {...fadeInUp} className="bg-[#242EC0] p-10 rounded-lg mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm uppercase tracking-widest text-white/70 font-semibold">In Development Since April 2026</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Venture Innovation Platform
            </h3>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mb-10">
              A unified platform for running the full lifecycle of global student startup programs — from application to alumni.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Program Management", "Event Scheduling", "Team Formation", "Student Profiles",
                "Mentor Matching", "Judge & Scoring", "Travel Management", "Visa Tracking",
                "Pitch Submission", "Application Workflows", "Certificate Issuance", "Communications Hub",
                "Sponsor Portal", "Analytics Dashboard", "Alumni Network", "Onboarding", "Registration"
              ].map((feature) => (
                <span key={feature} className="bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-white text-sm font-medium">
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-10 rounded-lg">
              <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Foundation Tools</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Internal products that support GSSF operations — from program management and selection to communications and data systems.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-10 rounded-lg">
              <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">University-Facing Products</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Tools built for use by GSSF's participating universities — supporting organizers, students, and mentors across the global program network.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-10 rounded-lg">
              <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Ecosystem Infrastructure</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Products that extend the capabilities of GSSF programs — including tools that support the AI Cup, GSSC competition management, and regional operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              What the Experience Looks Like
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mb-12">
              AI Labs is not a traditional internship. There are no make-work projects. Students are embedded as builders, work alongside GSSF program leadership, and ship products that are actively used. The experience is designed to replicate the conditions of a high-performance startup or product team from the first day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div {...fadeInUp} className="bg-white/10 p-8 rounded-lg border-l-4 border-white">
              <h3 className="text-xl font-bold text-white mb-4">Real Ownership</h3>
              <p className="text-white/90 leading-relaxed">
                Students own defined product surfaces or engineering modules from start to finish.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/10 p-8 rounded-lg border-l-4 border-white">
              <h3 className="text-xl font-bold text-white mb-4">Shipped Products</h3>
              <p className="text-white/90 leading-relaxed">
                Work is deployed and used — within the foundation, by university partners, or across the program ecosystem.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/10 p-8 rounded-lg border-l-4 border-white">
              <h3 className="text-xl font-bold text-white mb-4">Mentor Access</h3>
              <p className="text-white/90 leading-relaxed">
                Students work within the GSSF Friends & Family network.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white/10 p-8 rounded-lg border-l-4 border-white">
              <h3 className="text-xl font-bold text-white mb-4">Global Context</h3>
              <p className="text-white/90 leading-relaxed">
                Products are built for a global user base — university students, organizers, and program participants around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
              The first cohort of AI Labs builders, working on the Venture Innovation Platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            <motion.div {...fadeInUp} className="bg-white rounded-lg overflow-hidden">
              <img src="/src/assets/binny-park.jpg" alt="Su Bin Park" className="w-full h-64 object-cover object-top" />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1 tracking-tight">Su Bin "Binny" Park</h3>
                <p className="text-[#242EC0] font-semibold text-sm uppercase tracking-wide mb-4">Product Manager</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  I'm drawn to the places where skill and opportunity don't align — and to the ways to bridge that gap.
                </p>
                <AnimatePresence>
                  {binnyExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-3 text-gray-700 leading-relaxed text-sm">
                        <p>In my writing, this means studying how capital flows around scientific uncertainty: how investors price risk in markets where the underlying biology is still being written, and how the structures of scientific inquiry shape what we believe is possible. I think about this through a philosophical and historical lens — understanding how our methods of doing science are themselves changing, and how innovation always inherits the assumed knowledge of those who came before.</p>
                        <p>That same instinct follows me into my entrepreneurship work connecting founders to capital and legal foundations, as a teaching assistant helping PhD researchers communicate their findings to the world, and as a Science Olympiad supervisor supporting the next generation of scientists.</p>
                        <p>On my Substack, <em>The Art of Perceiving</em>, I follow the same thread inward — exploring how the natural laws I encounter in science shape the way we experience life, language, and what we're able to say to each other.</p>
                        <p>Feel free to reach out at <a href="mailto:sp2587@cornell.edu" className="text-[#242EC0] hover:underline">sp2587@cornell.edu</a></p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setBinnyExpanded(!binnyExpanded)}
                  className="mt-4 text-[#242EC0] text-sm font-semibold hover:underline focus:outline-none"
                >
                  {binnyExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white rounded-lg overflow-hidden">
              <img src="/src/assets/tun-onraksa.jpg" alt="Tun Onraksa" className="w-full h-64 object-cover object-top" />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1 tracking-tight">Tun Onraksa</h3>
                <p className="text-[#242EC0] font-semibold text-sm uppercase tracking-wide">AI Engineer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The GSSF Network Behind It */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Built Within a World-Class Network
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              AI Labs students operate within the GSSF Friends & Family network — the same mentor and advisor network that powers GSSC Worlds.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}