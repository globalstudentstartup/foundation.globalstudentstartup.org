import { motion } from "motion/react";
import { Users, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { SEO } from "../components/SEO";

export default function Ventures() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="GSSF Ventures - Venture Capital Access"
        description="GSSF Ventures identifies the world's most promising undergraduate founding teams and connects them through trusted signal and in-person engagement to the global venture ecosystem."
        path="/ventures"
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
                GSSF Ventures — Launching 2027
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Where the world's best student founders meet Silicon Valley capital
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              We scout, vet, and position high-potential founders from universities around the world, then put them directly in front of the investors who fund what's next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Ventures is */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What Ventures is
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              Ventures is not a fund. We don't take equity, we don't write checks.
              We are the infrastructure between a great student-founded startup and its first round of capital. Through a rigorous scouting and vetting process, we bring the highest-potential founders from international networks to our two-week residency in Silicon Valley — where every day is built around direct access to the investors, operators, and institutions that shape the pre-seed landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              How we work
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* Phase One */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Phase One — Source</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                We recruit through university partners, regional startup competitions, and direct nominations from faculty scouts. Every applicant enters the same pipeline regardless of geography.
              </p>
            </motion.div>

            {/* Phase Two */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Phase Two — Vet</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                A three-round evaluation process — application review, baseline assessment, and founder interview — filters for founding teams with real traction, defensible ideas, and the ability to operate at scale.
              </p>
            </motion.div>

            {/* Phase Three */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Phase Three — Residency</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ten selected founder teams relocate to Silicon Valley for a two-week residency. Every day on the calendar is meeting-dense with VCs, angels, operators, and institutional partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Investors Participate */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Why Investors Participate
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mb-12">
              GSSF Ventures addresses real challenges faced by VCs and accelerators. Through GSSF Ventures, investors gain:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div {...fadeInUp} className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <p className="text-white text-lg">Early visibility into globally diverse undergraduate founders</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <p className="text-white text-lg">Pre-vetted teams with baseline readiness</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <p className="text-white text-lg">Trusted, nonprofit-aligned signal</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <p className="text-white text-lg">Long-term relationships with emerging talent pipelines</p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="bg-white/10 p-10 rounded-lg max-w-4xl mx-auto border-l-4 border-white">
            <p className="text-xl italic text-white leading-relaxed">
              "Fragmented early-stage global talent. High noise-to-signal ratios. Geographic access bias. GSSF Ventures exists to solve all three."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
