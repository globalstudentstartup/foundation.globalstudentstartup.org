import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";

export default function Programs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const programs = [
    {
      path: "/gssc",
      label: "Competition (GSSC Worlds)",
      title: "The flagship global proving ground",
      description: "GSSC Worlds is the culmination of the foundation's annual cycle. It brings together regional winners from across the globe to compete in high-stakes environments at the Asian Leadership Conference (ALC) in Seoul. Team Structure: Delegations consist of 2–5 competing students per venture team and 1 student organizer funded to travel. Quality Control: All participants are audited against the GSSC Competition Standard to ensure the global stage maintains a world-class merit signal.",
      color: "#242EC0"
    },
    {
      path: "/ai-cup",
      label: "Global AI Cup",
      title: "The technical engine of the regional ecosystem",
      description: "A global undergraduate applied AI competition designed to seed local \"intelligence economies\" by building functional AI products. High-Efficiency Model: A $2,000 regional activation funds the engagement of 500+ undergraduate students (Cost per student: <$4.00). Selection Bridge: Winning teams advance to the global stage via a rigorous video audit of their final pitches and interviews conducted against the GSSF Selection Protocol. Scaling Target: 20 funded regional AI competitions annually by 2030.",
      color: "#242EC0"
    },
    {
      path: "/advisory",
      label: "GSSF Advisory",
      title: "The \"Architecture of Innovation\" for nations",
      description: "Strategic consulting to governments, embassies, and universities to design the physical and legal infrastructure required to support a modern startup ecosystem. Service Areas: Ecosystem architecture, technical workforce strategy (AI for non-engineers), and institutional de-risking through the application of the GSSF Vetting IP.",
      color: "#242EC0"
    },
    {
      path: "/ai-labs",
      label: "GSSF AI Labs",
      title: "Undergraduate Product Internships",
      description: "Direct placement for high-potential product designers and AI engineers to build applied AI products for internal foundation and university use. Mission: Creating functional tools for the GSSF ecosystem while providing students with \"day-one\" product management and engineering experience.",
      color: "#242EC0"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Programs - Global Competitions and Advisory"
        description="GSSF operates GSSC Worlds, Global AI Cup, GSSF Advisory, and GSSF AI Labs — supporting undergraduate founders through competitions and innovation support."
        path="/programs"
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-[#242EC0] overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
          <div className="max-w-5xl">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight uppercase tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Programs
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From campus competitions to global stages, executive education to venture capital access—programs designed to activate undergraduate innovation at scale.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.path}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={program.path}>
                  <div className="group bg-white border-2 border-black/8 rounded-xl p-8 md:p-12 hover:border-[#242EC0] hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-[#242EC0] transition-colors">
                            {program.label}
                          </h2>
                          <ArrowRight 
                            className="text-gray-400 group-hover:text-[#242EC0] group-hover:translate-x-2 transition-all" 
                            size={32} 
                          />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                          {program.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Explore each program to learn more about eligibility, timelines, and how to participate.
            </p>
            <Link to="/">
              <motion.button
                className="bg-white text-[#242EC0] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}