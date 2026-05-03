import { motion } from "motion/react";
import { Globe, Linkedin } from "lucide-react";
import { SEO } from "../components/SEO";
import timothyLiPhoto from "figma:asset/2964414f7bdcd0e77078a64dfcdd91d79ea176b8.png";

export default function Network() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const Badge = ({ children }: { children: React.ReactNode }) => (
    <div className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white text-sm uppercase tracking-wider font-semibold hover:bg-white/20 transition-colors">
      {children}
    </div>
  );

  return (
    <div className="bg-[#161616]">
      <SEO 
        title="Global Network - Mentors and Students"
        description="An ever-growing global network of mentors and students from top universities and companies — Google, OpenAI, Netflix, TikTok, Harvard, Stanford, Oxford, and more."
        path="/network"
      />
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              Global Network
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight uppercase leading-tight">
              Global Friends<br />& Family Network
            </h1>
            <p className="text-xl text-white/70 max-w-4xl leading-relaxed mb-12">
              An ever-growing friends and family network of current and former mentors and students — powering GSSF programs through relationships built across the world's most influential institutions.
            </p>

            {/* Quick Navigation Links */}
            <div className="flex flex-wrap gap-4">
              <a href="#mentors">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="px-6 py-3 bg-white/10 border border-white/20 rounded text-white uppercase tracking-wider font-semibold hover:bg-white/20 transition-colors cursor-pointer">
                    Jump to Mentors
                  </div>
                </motion.div>
              </a>
              <a href="#universities">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <div className="px-6 py-3 bg-white/10 border border-white/20 rounded text-white uppercase tracking-wider font-semibold hover:bg-white/20 transition-colors cursor-pointer">
                    Jump to Universities
                  </div>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mentor Categories */}
      <section id="mentors" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
              Mentors
            </h2>
            <p className="text-lg text-white/70 max-w-3xl">
              GSSF programs are powered by mentors and advisors from the world's most influential technology, media, academic, diplomatic, and public sector institutions. Individual participation; no implied institutional endorsement.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Master Mentors */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Master Mentors
              </h3>
              <p className="text-white/70 max-w-3xl mb-8 leading-relaxed">
                Master Mentors have mentored at GSSC for at least two years and have demonstrated mastery of content and a generous commitment to spending their time guiding student founding teams. Their specific domain knowledge is determined to be important at a global level.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Timothy Li */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#242EC0] hover:bg-white/10 transition-all"
                >
                  <img
                    src={timothyLiPhoto}
                    alt="Timothy Li"
                    className="w-32 h-32 object-cover rounded-lg mb-4 grayscale"
                  />
                  <h4 className="text-xl font-bold text-white mb-2 uppercase">Timothy Li</h4>
                  <p className="text-sm text-white/60 mb-4">
                    Master Mentor on Pitching
                  </p>
                  <a
                    href="https://www.linkedin.com/in/timothy-li/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Academic Leadership */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Academic Leadership
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>University of Southern California</Badge>
                <Badge>University of California, Berkeley / Sutardja Center for Entrepreneurship & Technology</Badge>
                <Badge>Aalto University</Badge>
                <Badge>Cornell University</Badge>
                <Badge>NASA / JPL / Caltech</Badge>
              </div>
            </motion.div>

            {/* Technology */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Technology
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Google</Badge>
                <Badge>Microsoft</Badge>
                <Badge>Amazon Web Services</Badge>
                <Badge>Netscape</Badge>
                <Badge>OpenAI</Badge>
                <Badge>Duolingo</Badge>
                <Badge>LendAPI</Badge>
              </div>
            </motion.div>

            {/* Media & Entertainment */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Media & Entertainment
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Disney+</Badge>
                <Badge>Netflix</Badge>
                <Badge>Apple</Badge>
                <Badge>TikTok LIVE</Badge>
                <Badge>Fox</Badge>
                <Badge>Warner Bros</Badge>
                <Badge>Live Nation / Ticketmaster</Badge>
                <Badge>Warner Music Korea</Badge>
                <Badge>Front Row Global</Badge>
              </div>
            </motion.div>

            {/* Consulting */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Consulting
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Deloitte</Badge>
                <Badge>Edison International</Badge>
              </div>
            </motion.div>

            {/* Innovation & Accelerators */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Innovation & Accelerators
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>TechStars</Badge>
                <Badge>Alchemist Accelerator</Badge>
                <Badge>Antler Korea</Badge>
                <Badge>Muirwoods Ventures</Badge>
                <Badge>European Innovation Academy</Badge>
              </div>
            </motion.div>

            {/* Foundations & Philanthropy */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Foundations & Philanthropy
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Vy and Timothy Li Family Foundation</Badge>
                <Badge>Tom & Cathy Hui Foundation</Badge>
              </div>
            </motion.div>

            {/* Diplomatic & Public Sector */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Diplomatic & Public Sector
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>US State Department</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Universities Section */}
      <section id="universities" className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              2026 Partner Network
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight uppercase leading-tight">
              Global<br />Universities
            </h2>
            <p className="text-xl text-white/80 max-w-4xl leading-relaxed mb-16">Participation by individuals; no implied institutional endorsement.</p>
          </motion.div>

          <div className="space-y-16">
            {/* Americas */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Americas
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>University of Southern California</Badge>
                <Badge>University of California, Berkeley</Badge>
                <Badge>Harvard</Badge>
                <Badge>Stanford</Badge>
                <Badge>Cornell</Badge>
              </div>
            </motion.div>

            {/* Europe */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Europe
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>University of Oxford</Badge>
                <Badge>Aalto University</Badge>
              </div>
            </motion.div>

            {/* Asia */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Asia
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Ewha Womans University</Badge>
                <Badge>Pohang University of Science and Technology</Badge>
                <Badge>Seoul National University</Badge>
                <Badge>Korea University</Badge>
                <Badge>Dongseo University</Badge>
              </div>
            </motion.div>

            {/* Middle East */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Middle East
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Carnegie Mellon Qatar</Badge>
              </div>
            </motion.div>

            {/* India - Mega Region */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                India — Mega Region
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Ashoka University</Badge>
                <Badge>OP Jindal University</Badge>
                <Badge>Indian Institute of Technology Delhi</Badge>
                <Badge>Shri Ram College of Commerce</Badge>
                <Badge>Plaksha University</Badge>
                <Badge>St Stephen's</Badge>
                <Badge>Lady Shri Ram College</Badge>
                <Badge>Shaheed Sukdhdev</Badge>
                <Badge>Miranda House</Badge>
              </div>
            </motion.div>

            {/* Planned Expansion */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">Planned Expansion (COUNTRIES - SPECIFIC UNIVERSITIES TO BE SELECTED)</h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Colombia (2027)</Badge>
                <Badge>Singapore (2027)</Badge>
                <Badge>Ukraine (2027)</Badge>
                <Badge>Australia (2028)</Badge>
                <Badge>Nigeria (2028)</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}