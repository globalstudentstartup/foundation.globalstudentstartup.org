import { motion } from "motion/react";
import { Trophy, Code, Brain, Target, DollarSign, Users, TrendingUp, CheckCircle } from "lucide-react";
import { SEO } from "../components/SEO";

export default function AICup() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Global AI Cup - Applied AI Competition"
        description="GSSF's campus competition program. $2,000 investment activates 10+ university campuses with 50+ participants each. Move students from AI consumers to AI builders through applied, in-person competition."
        path="/ai-cup"
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-white/80 font-semibold">
                Global AI Cup — Launching August 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Global AI Cup
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">The global applied AI competition that starts at campus level to regionals to the global stage. Build. Compete. Advance.</p>
          </motion.div>
        </div>
      </section>

      {/* Program Stats Bar */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div {...fadeInUp} className="text-center">
              <div className="text-4xl font-bold text-[#242EC0] mb-2">500+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Students Per Region</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-4xl font-bold text-[#242EC0] mb-2">$2,000</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Regional Activation Cost</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-4xl font-bold text-[#242EC0] mb-2">&lt;$4.00</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Cost Per Student</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* What Is the Global AI Cup */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What Is the Global AI Cup?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">The Global AI Cup is GSSF's campus competition program — a campus-level applied AI competition that runs across regions every Fall. It challenges students to build functional AI products and serves as the primary entry point into GSSF programs.</p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-10 rounded-lg max-w-4xl border-l-4 border-[#242EC0]">
            <p className="text-xl italic text-gray-800 leading-relaxed">
              "Building local AI capabilities — helping regions develop their own technical talent, not import it."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competition Timeline */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                2026-27 Program Timeline
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-3">August 2026</div>
              <h3 className="text-lg font-bold">University Selections</h3>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-3">Oct–Nov 2026</div>
              <h3 className="text-lg font-bold">Campus AI Cups</h3>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-3">Nov–Dec 2026</div>
              <h3 className="text-lg font-bold">Regional AI Cups</h3>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-3">Dec 2026</div>
              <h3 className="text-lg font-bold">Prizes dispersed</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evaluation Rubric */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              How Teams Are Judged
            </h2>
            <p className="text-xl text-[#242EC0] font-semibold uppercase tracking-wide">
              Applied AI — 100 Points Total
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Technical Complexity & Integration</h3>
                <p className="text-gray-700">Advanced AI techniques and integration quality</p>
              </div>
              <div className="text-3xl font-bold text-[#242EC0]">30 pts</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Applied Utility & Impact</h3>
                <p className="text-gray-700">Real-world problem solving and potential impact</p>
              </div>
              <div className="text-3xl font-bold text-[#242EC0]">25 pts</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">System Demonstration & Reliability</h3>
                <p className="text-gray-700">Live performance and system stability</p>
              </div>
              <div className="text-3xl font-bold text-[#242EC0]">20 pts</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#E4E6F3] p-8 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Scalability & Feasibility</h3>
                <p className="text-gray-700">Path to production and growth potential</p>
              </div>
              <div className="text-3xl font-bold text-[#242EC0]">15 pts</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-[#E4E6F3] p-8 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Presentation & Documentation</h3>
                <p className="text-gray-700">README quality and architecture clarity</p>
              </div>
              <div className="text-3xl font-bold text-[#242EC0]">10 pts</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What You Can Win
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg text-center">
              <div className="text-5xl font-bold text-[#242EC0] mb-3">$1,000</div>
              <div className="text-xl font-bold mb-2 uppercase tracking-wide">1st Place</div>
              <p className="text-gray-700">Cash prize</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg text-center">
              <div className="text-5xl font-bold text-[#242EC0] mb-3">$500</div>
              <div className="text-xl font-bold mb-2 uppercase tracking-wide">2nd Place</div>
              <p className="text-gray-700">Cash prize</p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-8 max-w-3xl">
            <p className="text-lg text-gray-700 italic">One Regional Champion will be selected to attend the GSSC Worlds after video audit and zoom interviews. Cash prize dispersement depends on the host university policies.</p>
          </motion.div>
        </div>
      </section>

      {/* Active Regions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Where We Compete
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">India</h3>
                <span className="bg-[#242EC0] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-3">2027</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">Host University: Ashoka University</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">United States</h3>
                <span className="bg-[#242EC0] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-3">2027</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">Host University: University of Southern California</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">Colombia</h3>
                <span className="bg-[#242EC0] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-3">2027</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">Host University: TBD</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">South Korea</h3>
                <span className="bg-[#242EC0] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-3">2027</span>
              </div>
              <p className="text-sm text-gray-600 mt-3">Host University: TBD</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ukraine</h3>
              <p className="text-sm text-gray-600 mt-3">Host University: TBD</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Singapore</h3>
              <p className="text-sm text-gray-600 mt-3">Host University: TBD</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Nigeria</h3>
              <p className="text-sm text-gray-600 mt-3">Host University: TBD</p>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}