import { motion } from "motion/react";
import { Shield, FileText, Users, Scale } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

export default function Governance() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-[#161616]">
      <SEO 
        title="Foundation - 501(c)(3) Nonprofit"
        description="The Global Student Startup Foundation is a 501(c)(3) nonprofit public benefit corporation (EIN: 41-3141550). View our governance, policies, and board of directors."
        path="/foundation"
      />
      {/* Hero Section */}
      <section id="nonprofit" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              GLOBAL STUDENT STARTUP FOUNDATION
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight uppercase leading-tight">
              Non-Profit
            </h1>
            <p className="text-xl text-white/70 max-w-4xl leading-relaxed">Global Student Startup Foundation is a 501(c)(3) nonprofit public benefit corporation.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Corporate Identity */}
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-8">
                <FileText className="text-[#242EC0]" size={40} />
                <h2 className="text-3xl font-bold text-white uppercase">Corporate Identity</h2>
              </div>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <div className="text-sm text-white/60 mb-1">Legal Name:</div>
                  <div className="text-lg text-white">Global Student Startup Foundation</div>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <div className="text-sm text-white/60 mb-1">EIN:</div>
                  <div className="text-lg text-white">41-3141550</div>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <div className="text-sm text-white/60 mb-1">CA Registry #:</div>
                  <div className="text-lg text-white">6110343e524</div>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <div className="text-sm text-white/60 mb-1">Incorporated:</div>
                  <div className="text-lg text-white">December 13, 2023</div>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <div className="text-sm text-white/60 mb-1">501(c)(3) Approval:</div>
                  <div className="text-lg text-white">December 17, 2023</div>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <div className="text-sm text-white/60 mb-1">Type:</div>
                  <div className="text-lg text-white">Nonprofit Public Benefit Corporation</div>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <div className="text-sm text-white/60 mb-1">Fiscal Year End:</div>
                  <div className="text-lg text-white">June 30</div>
                </div>
                <div className="pb-4">
                  <div className="text-sm text-white/60 mb-1">Annual Filing:</div>
                  <div className="text-lg text-white">Form 990-PF</div>
                </div>
              </div>
            </motion.div>

            {/* The 85/15 Rule */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-4 mb-8">
                <Scale className="text-[#242EC0]" size={40} />
                <h2 className="text-3xl font-bold text-white uppercase">The 85/15 Rule</h2>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                GSSF is committed to an Impact-First financial model:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold text-lg">•</span>
                  <div>
                    <span className="text-white font-semibold">≥ 85%</span>
                    <span className="text-white/70"> of all general funds directed to programmatic impact — student travel, lodging, curriculum, mentorship, and ecosystem development</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold text-lg">•</span>
                  <div>
                    <span className="text-white font-semibold">≤ 15%</span>
                    <span className="text-white/70"> reserved for legal, accounting, compliance, software, and governance</span>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-white/60 leading-relaxed italic">
                * Core administrative funds are mission-aligned but exempt from the caps demonstrate per-board policy
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            {/* Board of Directors */}
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-8">
                <Users className="text-[#242EC0]" size={40} />
                <h2 className="text-3xl font-bold text-white uppercase">Board of Directors</h2>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-white/60 mb-1">President & CEO:</div>
                  <div className="text-lg text-white">Mike Seung Lee</div>
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">CFO & Secretary:</div>
                  <div className="text-lg text-white">Elizabeth (Liz) Lee</div>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                All compensation, international, market appropriate, pre-board-approved in accordance with IRS private inurement prohibitions. No part of the Foundation's net earnings inures to the benefit of any private individual.
              </p>
            </motion.div>

            {/* Key Policies */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-4 mb-8">
                <Shield className="text-[#242EC0]" size={40} />
                <h2 className="text-3xl font-bold text-white uppercase">Key Policies</h2>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <div className="text-white/70">
                    <Link to="/policies/conflict-of-interest" className="text-white hover:text-[#242EC0] transition-colors underline">
                      Conflict of Interest Policy
                    </Link>
                    <span> — adopted Feb. 13, 2025. All directors, officers, key persons, and organizers sign annually</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <div className="text-white/70">
                    <Link to="/policies/use-of-funds" className="text-white hover:text-[#242EC0] transition-colors underline">
                      Use of Funds Policy
                    </Link>
                    <span> — adopted Dec. 28, 2023, updated Feb. 14, 2025</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <div>
                    <Link to="/policies/privacy-policy" className="text-white hover:text-[#242EC0] transition-colors underline">
                      Privacy Policy
                    </Link>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-white/60 leading-relaxed">
                All GSSF programs are operated in furtherance of exclusively charitable and educational purposes under IRS Section 501(c)(3). Other contributions are subject pursuant IRS Section 170.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}