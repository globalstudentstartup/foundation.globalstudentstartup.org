import { motion } from "motion/react";
import { useState } from "react";
import { Zap, Target } from "lucide-react";
import { SEO } from "../components/SEO";

export default function AILabs() {
  const [expandedBios, setExpandedBios] = useState<Set<string>>(new Set());

  const toggleBio = (name: string) => {
    setExpandedBios(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

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
      <section className="py-24 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">
              What Is GSSF AI Labs?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-4xl">
              GSSF AI Labs is an undergraduate product internship program. Students are placed directly into building functional AI tools for internal foundation and university use — not as observers or contributors to hypothetical projects, but as the primary builders. The program is built on a single conviction: the best way to develop product and engineering talent is to give students real problems and trust them to solve them.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white/5 p-10 rounded-lg max-w-4xl border-l-4 border-white/30">
            <p className="text-xl italic text-white/80 leading-relaxed">
              "Day-one product management and engineering experience — not simulations, not case studies. Real products. Real use."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-24 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
              Who We're Looking For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="bg-white/5 p-10 rounded-lg">
              <Target className="text-white/60 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-white">Product Managers</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Undergraduate students with strong product thinking, an ability to translate ambiguous problems into clear requirements, and a drive to ship products that real users depend on.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/5 p-10 rounded-lg">
              <Zap className="text-white/60 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-white">AI Engineers</h3>
              <p className="text-white/70 leading-relaxed text-lg">
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
            <div className="flex flex-wrap gap-3 mb-12">
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

      {/* Team */}
      <section className="py-16 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p {...fadeInUp} className="text-sm uppercase tracking-widest text-white/60 mb-12">The Team</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

            {/* Binny */}
            <motion.div {...fadeInUp}>
              <img src="/binny-park.jpg" alt="Su Bin Park" className="w-48 h-48 object-cover object-top rounded-lg mb-6 grayscale" />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Su Bin "Binny" Park</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Product Manager · Venture Innovation Platform</p>
              <a href="mailto:sp2587@cornell.edu" className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4">
                <span className="text-sm">sp2587@cornell.edu</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('binny') ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <p className="mb-4">Su Bin "Binny" Park is a Product Manager at GSSF AI Labs — bringing to the role a mind trained to sit at the intersection of science, capital, and human creativity, and a genuine instinct for the places where skill and opportunity fail to meet.</p>
                    <p className="mb-4">A student at Cornell University, Binny has built a career defined by translation: making complex ideas legible across disciplines, institutions, and audiences. As an Undergraduate Consultant for Cornell's International Teaching Assistant Program, she helps PhD researchers communicate their findings to the world — a role that reflects her core belief that how we communicate knowledge is as consequential as the knowledge itself. As a Fellow at Blackstone LaunchPad (now LaunchPad Ezra) at Cornell, she supports the collaborative infrastructure of one of the university's premier entrepreneurship programs, serving as Main Emcee at the Big Idea Pitch Competition and managing Startup Office Hours. At 180 Degrees Consulting, she has worked as a Sustainability Analyst for a Fortune 300 skincare and beauty brand, and previously advised on sustainable pesticide practices for the Better Cotton Initiative.</p>
                    <p className="mb-4">Her analytical work runs deep. As a Nexus Summer Scholar in Cornell's Hirschman Lab of Sociology, Binny investigated the socio-political dimensions of climate change risk — modeling investment portfolios of Property and Casualty insurance companies using fuzzy-matching algorithms and analyzing a decade of NAIC profitability reports and Climate Risk Disclosure Surveys to map how private insurers have adapted to climate exposure. She has also worked as a Finance and Markets Analyst at RemNeuro, a Cornell Tech-based health-tech startup specializing in SaaS wearable technologies for senior care and mental health.</p>
                    <p>Binny writes about the ideas that animate all of this on her Substack, <em>The Art of Perceiving</em> — exploring how the natural laws of science shape the way we experience life, language, and what we're able to say to each other.</p>
                  </motion.div>
                ) : (
                  <p>{truncateText('Su Bin "Binny" Park is a Product Manager at GSSF AI Labs — bringing to the role a mind trained to sit at the intersection of science, capital, and human creativity, and a genuine instinct for the places where skill and opportunity fail to meet.')}</p>
                )}
                <button onClick={() => toggleBio('binny')} className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors">
                  {expandedBios.has('binny') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Tun */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <img src="/tun-onraksa.jpg" alt="Tun Onraksa" className="w-48 h-48 object-cover object-top rounded-lg mb-6 grayscale" />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Tun Onraksa</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">AI Engineer · Venture Innovation Platform</p>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('tun') ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <p className="mb-4">Tun Onraksa is an AI Engineer at GSSF AI Labs — bringing to the role a rare combination of technical engineering depth, product intuition, and a people-centered approach to building shaped by his Thai upbringing and years of cross-cultural community leadership at USC.</p>
                    <p className="mb-4">A Computer Science and Business student at the University of Southern California, Tun operates at the intersection of code, product, and human experience. He approaches every system he builds the same way: with genuine curiosity about how design and technology shape the way people live and work, and a conviction that the best products are built from empathy outward. As a Product Manager at ProductSC, USC's student-run product management organization, he developed that craft in a hands-on, collaborative environment. He is also an incoming Software Engineer Intern at Agoda, one of Southeast Asia's leading travel technology platforms — where he previously completed a FinTech Commercial internship — giving him direct exposure to product development at scale across two of the most dynamic tech markets in the world.</p>
                    <p className="mb-4">Tun's technical range extends beyond product. As a backend development intern at Q-CHANG, a Thai home services platform, he worked in Golang and NextJS on real production systems. As a member of USC's Engineers Without Borders chapter, he contributed to infrastructure projects in both Malawi and Uganda — grounding his engineering instincts in contexts where technology has direct human stakes. Earlier, as a Human Practices Leader and Lab Member for Thailand_RIS at the iGEM Competition, he led stakeholder management and team coordination for an international synthetic biology team.</p>
                    <p className="mb-4">Beyond his technical work, Tun has spent nearly three years building community at USC through the International Student Assembly, rising from Intern to Co-Chair of Programming to Assistant Director — organizing events and creating connections for one of USC's most globally diverse student communities.</p>
                    <p>At GSSF AI Labs, Tun brings his full range — engineer, product thinker, and community builder — to the infrastructure that will power the next generation of the foundation's programs.</p>
                  </motion.div>
                ) : (
                  <p>{truncateText("Tun Onraksa is an AI Engineer at GSSF AI Labs — bringing to the role a rare combination of technical engineering depth, product intuition, and a people-centered approach to building shaped by his Thai upbringing and years of cross-cultural community leadership at USC.")}</p>
                )}
                <button onClick={() => toggleBio('tun')} className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors">
                  {expandedBios.has('tun') ? 'Read less' : 'Read more'}
                </button>
              </div>
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