import { motion } from "motion/react";
import { Lightbulb, Users, Globe, Target, Shield, Award, TrendingUp, Code, Building2, BookOpen, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

export default function Advisory() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="GSSF Advisory - Strategic Consulting for Governments and Universities"
        description="Strategic consulting to governments, embassies, and universities to design the infrastructure needed to support modern startup ecosystems."
        path="/advisory"
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6"><span className="text-sm uppercase tracking-widest text-white/80 font-semibold">GSSF Advisory</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Strategic Consulting for Governments, Universities, and Non-Profits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              Helping governments, embassies, universities, and non-profits design the infrastructure needed to support modern startup ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is GSSF Advisory */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              What Is GSSF Advisory?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              GSSF Advisory is the consulting arm of the Global Student Startup Foundation. It applies frameworks built through years of running global programs to help governments, embassies, and universities design and activate regional innovation programs. Advisory is both a mission-aligned program pillar and a potential revenue stream for the foundation.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-10 rounded-lg max-w-4xl border-l-4 border-[#242EC0]">
            <p className="text-xl italic text-gray-800 leading-relaxed">
              "Rather than requiring talent to migrate permanently to Western hubs, GSSF brings the programs to the talent — building local institutional capacity through strategic design."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                THE GSSF ADVISORY APPROACH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our Approach
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              Architecture of Innovation — a four-phase methodology for designing, launching, and sustaining regional innovation ecosystems.
            </p>
          </motion.div>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative">
            {/* Connector line - only visible on large screens */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-[#242EC0]/20" style={{ width: 'calc(100% - 8rem)', marginLeft: '4rem' }}></div>

            {/* Phase 1 */}
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg relative">
              <div className="bg-[#242EC0] text-white px-4 py-2 rounded font-bold text-sm mb-6 inline-block">
                01
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase">
                ASSESS
              </h3>
              <p className="text-sm font-semibold text-[#242EC0] mb-4">
                Understand the ecosystem as it exists today
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Map the region's innovation infrastructure, institutional readiness, talent pipeline, and key stakeholders. Identify gaps and the highest-leverage entry points before designing anything.
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm font-semibold text-gray-900">Deliverable:</p>
                <p className="text-sm text-gray-700">Ecosystem Diagnostic & Opportunity Map</p>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg relative">
              <div className="bg-[#242EC0] text-white px-4 py-2 rounded font-bold text-sm mb-6 inline-block">
                02
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase">
                ARCHITECT
              </h3>
              <p className="text-sm font-semibold text-[#242EC0] mb-4">
                Design the right model for this context
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Co-create a custom ecosystem blueprint — defining program mix, university network, governance structure, and a 3-year activation roadmap aligned to the partner's ambitions.
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm font-semibold text-gray-900">Deliverable:</p>
                <p className="text-sm text-gray-700">Ecosystem Architecture Blueprint</p>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg relative">
              <div className="bg-[#242EC0] text-white px-4 py-2 rounded font-bold text-sm mb-6 inline-block">
                03
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase">
                ACTIVATE
              </h3>
              <p className="text-sm font-semibold text-[#242EC0] mb-4">
                Launch programs and connect talent to global opportunity
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stand up the ecosystem — onboarding universities, launching the Global AI Cup and GSSC regional competition, building the mentor network, and running the first student cohort.
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm font-semibold text-gray-900">Deliverable:</p>
                <p className="text-sm text-gray-700">Activated Ecosystem with First Cohort</p>
              </div>
            </motion.div>

            {/* Phase 4 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#E4E6F3] p-8 rounded-lg relative">
              <div className="bg-[#242EC0] text-white px-4 py-2 rounded font-bold text-sm mb-6 inline-block">
                04
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase">
                SUSTAIN
              </h3>
              <p className="text-sm font-semibold text-[#242EC0] mb-4">
                Build independent operational capability
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transfer full operational capability to the partner institution through documentation, team training, and governance handoff. The goal: a self-running ecosystem permanently connected to the global GSSF network.
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm font-semibold text-gray-900">Deliverable:</p>
                <p className="text-sm text-gray-700">Operational Playbook & Capable In-Region Team</p>
              </div>
            </motion.div>
          </div>

          {/* Summary Strip */}
          <motion.div {...fadeInUp} className="bg-[#242EC0] rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center lg:text-left">
                <p className="text-white/70 text-sm font-semibold mb-2 uppercase tracking-wide">Assess</p>
                <p className="text-white font-semibold">Where are we starting from?</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white/70 text-sm font-semibold mb-2 uppercase tracking-wide">Architect</p>
                <p className="text-white font-semibold">What should we build?</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white/70 text-sm font-semibold mb-2 uppercase tracking-wide">Activate</p>
                <p className="text-white font-semibold">How do we bring it to life?</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white/70 text-sm font-semibold mb-2 uppercase tracking-wide">Sustain</p>
                <p className="text-white font-semibold">How does this run without us?</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              What We Advise On
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Ecosystem Architecture</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Designing the structural and institutional frameworks a region needs to support a thriving startup ecosystem — from university network activation to legal and operational infrastructure.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Technical Workforce Strategy</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Building AI literacy and applied technical capability across non-engineering populations. Focused on equipping institutions and governments to develop local AI talent and participate in the growing AI economy.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-lg">
              <div className="bg-[#242EC0] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Institutional De-Risking</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Applying GSSF's evaluation standards to validate and signal the quality of regional founders — reducing perceived risk for investors and global partners considering emerging markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Who We Work With
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-10 rounded-lg">
              <Building2 className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Governments & Ministries</h3>
              <p className="text-gray-700 leading-relaxed">
                National and regional government bodies seeking to build startup ecosystems, attract investment, and develop technical talent pipelines.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-10 rounded-lg">
              <Globe className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Embassies & Trade Missions</h3>
              <p className="text-gray-700 leading-relaxed">
                Diplomatic institutions facilitating startup access to new markets, particularly the US market, through structured ecosystem engagement.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-10 rounded-lg">
              <BookOpen className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Universities & Institutions</h3>
              <p className="text-gray-700 leading-relaxed">
                Universities seeking to activate student innovation, establish regional competition presence, or build curriculum and programming aligned with global startup standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The GSSF Advantage */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Why GSSF
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mb-8">
              GSSF Advisory draws on direct experience designing and building innovation ecosystems across North America, Europe, Asia, and Latin America. Our frameworks are derived from years of running live programs, building university networks, and working with governments, institutions, and nonprofits across multiple continents.
            </p>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl">
              We bring operational expertise from building global programs and a network of practitioners who understand what it takes to activate regional ecosystems and connect talent to opportunity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Advisor 1 - Bob Upham */}
            <motion.div {...fadeInUp} className="bg-white/10 p-10 rounded-lg border-l-4 border-white">
              <h3 className="text-2xl font-bold text-white mb-2">Bob Upham</h3>
              <p className="text-white/80 mb-4 font-semibold">Managing Director, Advisory & Head of Mentors</p>
              <p className="text-white/90 leading-relaxed">
                Silicon Valley-based advisor with decades at the forefront of global technology. 2x founder, 2x Head of Business Development at venture-backed startups. Negotiated the landmark Yahoo-Microsoft Search Agreement and led the global rollout of Visa's digital products including Apple Pay, Samsung Pay, and Android Pay. As Managing Partner of Asesoria Partners, Bob advises startups, corporations, accelerators, and universities globally on fundraising, product strategy, go-to-market, and US market entry. Mentors through Techstars Tokyo, AlchemistX, The Batchery, and ESADE. Program Development Fellow at UC Berkeley.
              </p>
            </motion.div>

            {/* Advisor 2 - Liz Lee */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/10 p-10 rounded-lg border-l-4 border-white">
              <h3 className="text-2xl font-bold text-white mb-2">Liz Lee</h3>
              <p className="text-white/80 mb-4 font-semibold">Co-Founder & Chairman, GSSC | Advisory, Asia & US</p>
              <p className="text-white/90 leading-relaxed">
                Cross-border strategist and ecosystem architect raised across Korea, Canada, Peru, Indonesia, Italy, and the United States. Over a decade building high-performing teams, structuring global partnerships, and designing founder and talent development programs across technical and business domains. Advises founders and institutions on AI strategy, cross-border expansion, and ecosystem positioning. Founder of I in We and former Managing Director of Girls in Tech Korea, a global nonprofit with 120,000+ members across 35 chapters worldwide. Brings rare fluency in cultures, markets, and the human dynamics that determine whether ideas travel — or stay local.
              </p>
            </motion.div>

            {/* Advisor 3 - Carolina Avila */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/10 p-10 rounded-lg border-l-4 border-white">
              <h3 className="text-2xl font-bold text-white mb-2">Carolina Avila</h3>
              <p className="text-white/80 mb-4 font-semibold">CEO, Academy | Advisory, Europe & Latin America</p>
              <p className="text-white/90 leading-relaxed">
                Global innovation program builder with 15+ years designing and leading transformative programs across two continents. Former Project Director for the Mayor's Office of Bogotá, where she led Ciempiés — an award-winning initiative that won the 2016 Bloomberg Mayors Challenge. Consulted for the UNDP across Colombia, Bolivia, and the Dominican Republic on innovation portfolios and sustainable development strategies. As Head of Program Development and Innovation at the European Innovation Academy, led end-to-end design and delivery of flagship programs serving 350+ students and 50+ mentors across multiple international locations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}