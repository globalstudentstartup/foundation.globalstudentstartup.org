import { motion } from "motion/react";
import { Calendar, Users, Globe, CheckCircle, MapPin, Trophy, Award, Target, Plane } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { SEO } from "../components/SEO";
import { OrganizationStructuredData, EventStructuredData } from "../components/StructuredData";
import { GSSCHierarchy } from "../components/GSSCHierarchy";

export default function GSSC() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="GSSC Worlds | Global Student Startup Competition | GSSF"
        description="GSSC Worlds is the annual global undergraduate startup competition held in Seoul, South Korea. Fully funded. In-person. Operated by the Global Student Startup Foundation."
        path="/gssc"
      />
      <OrganizationStructuredData />
      <EventStructuredData />
      
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-white/60 mb-4 font-semibold">
              Global Student Startup Competition - Founded 2024
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight uppercase">
              GSSC WORLDS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl leading-relaxed">Global Student Startup Competition Worlds is the culmination of the foundation's annual cycle. It brings together regional winners from across the globe to compete at the Asian Leadership Conference (ALC) in Seoul.&nbsp;&nbsp;Fully funded and free for students.</p>
            <p className="text-lg text-white/90 mb-10 max-w-4xl leading-relaxed">Team Structure: Delegations consist of 2–5 competing students per venture team.</p>
            <a 
              href="https://globalstudentstartup.org" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                  Visit GSSC Website
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About the Competition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                About the Competition
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Where Regional Champions Become Global Founders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp} className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  GSSC Worlds is the culmination of GSSF's annual cycle — a fully funded, in-person global competition that brings together the top undergraduate founding teams from universities around the world.
                </p>
                <p>
                  Selected through a rigorous regional qualification process, every team that reaches the Worlds stage has already proven themselves at home. Seoul is where the best of the best compete for global recognition, mentorship from world-class leaders, and a place in the GSSF ecosystem.
                </p>
                <p className="font-semibold">
                  This is not a virtual pitch competition. Every element — the Pitch Bootcamp, the Preliminary Round, and the Finals — happens entirely in person.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-4xl font-bold text-[#242EC0] mb-2">23+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Universities Participating</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-4xl font-bold text-[#242EC0] mb-2">150+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Students Participating</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-4xl font-bold text-[#242EC0] mb-2">100%</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Fully Funded for Qualifying Teams</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-4xl font-bold text-[#242EC0] mb-2">Seoul</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Annual Host City</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                The Format
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              From Campus to Seoul in Four Stages
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stage 1 */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <h3 className="text-2xl font-bold tracking-tight pt-2">Qualify Through University or Regional Competition</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Teams qualify via two pathways: (1) University Competitions with direct advancement, or (2) Regional pathway where university winners compete at Regional Finals (e.g., GSSC x India at Ashoka University). Regional champions earn a fully funded trip to GSSC Worlds — travel, lodging, and all programming covered by GSSF.
              </p>
              <div className="mt-4 p-4 bg-[#E4E6F3] rounded-lg border-l-4 border-[#242EC0]">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> Starting 2027, Pathway 1 will be limited to GSSC 2025 & 2026 founding universities so we can maximize the number of students we impact.
                </p>
              </div>
            </motion.div>

            {/* Stage 2 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <h3 className="text-2xl font-bold tracking-tight pt-2">Pitch Bootcamp (Seoul)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Arriving in Seoul, teams enter a two-day intensive Pitch Bootcamp. Working directly with GSSF mentors, teams refine their narrative, sharpen their pitch, and prepare for the global stage.
              </p>
            </motion.div>

            {/* Stage 3 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <h3 className="text-2xl font-bold tracking-tight pt-2">Preliminary Round</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                All teams compete in the Preliminary Round, where they are evaluated against the GSSC Competition Standard — GSSF's quality benchmark ensuring world-class performance across every team on the global stage.
              </p>
            </motion.div>

            {/* Stage 4 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white p-10 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <h3 className="text-2xl font-bold tracking-tight pt-2">Finals at the Asian Leadership Conference</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Top teams advance to the Finals, held on stage at the Asian Leadership Conference (ALC) — one of Asia's most prominent leadership and innovation summits — in front of a global audience of leaders, investors, and changemakers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competition Hierarchy */}
      <GSSCHierarchy />

      {/* Eligibility */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.div {...fadeInUp}>
                <div className="inline-block mb-6">
                  <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                    Eligibility
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Earn Your Spot
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  GSSC Worlds is not an open application. Teams qualify by winning their regional GSSC competition or through the Global AI Cup pathway. Every team on the Worlds stage has been vetted against the same global standard.
                </p>
              </motion.div>
            </div>

            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Eligibility at a Glance</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="text-[#242EC0] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Teams of 2–5 current undergraduate students</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#242EC0] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>English-language participation required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#242EC0] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>No incorporated companies, no accelerator funding, no significant revenue</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#242EC0] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Venture work must have begun no earlier than June 1 of the qualifying year</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#242EC0] mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Full in-person attendance required for all programming in Seoul</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fully Funded */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <div className="inline-block mb-6">
                <span className="text-sm uppercase tracking-widest text-white/80 font-semibold">
                  Free For Students
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                Geographic Location Should Not Limit Access to the Global Stage
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-6">Every qualifying team receives full funding to compete at GSSC Worlds. GSSF covers international travel, lodging, and all programming costs.</p>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Participating Universities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                Participating Universities (2026)
              </span>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-tight">Global:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                USC · UC Berkeley · Harvard · Stanford · Cornell · University of Oxford · Aalto University · POSTECH · Korea University · Ewha Womans University · Carnegie Mellon Qatar · Dongseo University · IIT Delhi · European Innovation Academy
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-tight">India Region:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                IIT Delhi · Ashoka University · OP Jindal University · SRCC · Plaksha University · St. Stephen's College · Lady Shri Ram College · Shaheed Sukhdev College of Business Studies · Miranda House
              </p>
            </div>

            <p className="text-sm text-gray-500 italic">
              Individual participation. No implied institutional endorsement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Compete on the Global Stage?
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Find out if your university has a GSSC regional program — or bring GSSC to your campus.
            </p>
            <a 
              href="https://globalstudentstartup.org" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-[#242EC0] text-white hover:bg-[#08044C] px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                  Visit GSSC Website
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}