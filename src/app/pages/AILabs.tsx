import { motion } from "motion/react";
import { useState } from "react";
import { Linkedin, Zap, Target } from "lucide-react";
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
                    <p className="mb-4">Su Bin "Binny" Park is a Product Manager on the Venture Innovation Platform at GSSF AI Labs, where she brings her instinct for bridging gaps between skill and opportunity into the infrastructure that powers global student entrepreneurship.</p>
                    <p className="mb-4">At Cornell University, Binny studies the places where capital and talent fail to connect — writing on how investors price risk in markets shaped by scientific uncertainty, and how the structures of inquiry determine what we believe is possible. She approaches this through a philosophical and historical lens, tracking how methods of science evolve and how innovation inherits the assumptions of those who came before.</p>
                    <p className="mb-4">That same instinct shapes her work across campus. As a Fellow at Blackstone LaunchPad, she manages Startup Office Hours and has served as Emcee for the Big Idea Pitch Competition. As a Marketing Director and Senior Analyst at 180 Degrees Consulting, she advises on sustainability for Fortune 300 brands. As an Undergraduate Consultant at Cornell's International Teaching Assistant Program, she helps PhD researchers communicate complex findings to broader audiences.</p>
                    <p>On her Substack, <em>The Art of Perceiving</em>, she follows the same thread inward — exploring how the natural laws of science shape the way we experience life, language, and what we're able to say to each other.</p>
                  </motion.div>
                ) : (
                  <p>{truncateText('Su Bin "Binny" Park is a Product Manager on the Venture Innovation Platform at GSSF AI Labs, where she brings her instinct for bridging gaps between skill and opportunity into the infrastructure that powers global student entrepreneurship.')}</p>
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
                    <p className="mb-4">Tun Onraksa is an AI Engineer on the Venture Innovation Platform at GSSF AI Labs, building the operational backbone of global student startup programs. A Computer Science and Business student at the University of Southern California, he works at the intersection of code, product, and people — translating complex technical systems into intuitive, human-centered experiences.</p>
                    <p className="mb-4">At USC, Tun has led as Assistant Director of the International Student Assembly within USC Undergraduate Student Government, where he directed programming for one of the university's largest student communities. As a Product Manager at ProductSC, he spent a year developing his craft in product strategy and cross-functional collaboration. He has also served as a FinTech Commercial Intern at Agoda in Bangkok and as an Associate Backend Developer at Q-CHANG, building in Golang and Next.js.</p>
                    <p className="mb-4">Rooted in his Thai upbringing, Tun brings hospitality, empathy, and attentiveness to everything he builds — a conviction that great products begin with understanding both the user and the system behind the experience.</p>
                    <p>He is also an incoming Software Engineer Intern at Agoda and a former member of Engineers Without Borders USC, where he contributed to projects in Uganda and Malawi.</p>
                  </motion.div>
                ) : (
                  <p>{truncateText("Tun Onraksa is an AI Engineer on the Venture Innovation Platform at GSSF AI Labs, building the operational backbone of global student startup programs.")}</p>
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