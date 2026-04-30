import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Globe, Users, Award } from "lucide-react";
import { SEO } from "../components/SEO";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="The Global Student Startup Foundation builds infrastructure for the world's most promising undergraduate founders through global competitions, innovation academies, and venture support programs."
        path="/"
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-[#242EC0] overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-10"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
          </motion.div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
            <div className="max-w-5xl mx-auto">
              {/* Main Hero Heading */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight uppercase tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Global Student<br />Startup Foundation
              </motion.h1>

              {/* Quote - Secondary */}
              <motion.blockquote
                className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-16 italic border-l-4 border-white/40 pl-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >"Talent is global. Opportunity is not."</motion.blockquote>

              {/* About GSSF */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="max-w-4xl">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">GSSF is a 501(c)(3) institutional bridge that connects the world's brightest minds to the global stage. We develop the next generation of global leaders through funded undergraduate innovation and entrepreneurship programs — regardless of geography or financial means.</p>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-wide">
                    GLOBAL. FUNDED. IN-PERSON.
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-3">22+</div>
                    <div className="text-sm uppercase tracking-wider text-white/80 mb-2">Universities</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-3">450+</div>
                    <div className="text-sm uppercase tracking-wider text-white/80 mb-2">Students Participating</div>
                  </div>
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-3">100%</div>
                    <div className="text-sm uppercase tracking-wider text-white/80 mb-2">Funded for GSSC Worlds</div>
                    
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-white text-[#242EC0] hover:bg-white/90 px-8 py-6 h-auto uppercase tracking-wide text-sm font-semibold"
                      onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Programs
                    </Button>
                  </motion.div>
                  <Link to="/leadership#global-leadership">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="bg-white text-[#242EC0] hover:bg-white/90 px-8 py-6 h-auto uppercase tracking-wide text-sm font-semibold"
                      >
                        Leadership
                      </Button>
                    </motion.div>
                  </Link>
                  <Link to="/leadership#global-advisors">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="bg-white text-[#242EC0] hover:bg-white/90 px-8 py-6 h-auto uppercase tracking-wide text-sm font-semibold"
                      >
                        Advisors
                      </Button>
                    </motion.div>
                  </Link>
                  <a href="#network">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="lg"
                        className="bg-white text-[#242EC0] hover:bg-white/90 px-8 py-6 h-auto uppercase tracking-wide text-sm font-semibold"
                      >
                        Network
                      </Button>
                    </motion.div>
                  </a>
                  <Link to="/foundation#nonprofit">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="lg"
                        className="bg-white text-[#242EC0] hover:bg-white/90 px-8 py-6 h-auto uppercase tracking-wide text-sm font-semibold"
                      >
                        Non-Profit
                      </Button>
                    </motion.div>
                  </Link>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Program Links Section */}
        <section id="programs" className="py-24 bg-[#E4E6F3]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
              Explore Our Programs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div {...fadeInUp}>
                <Link to="/gssc">
                  <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#242EC0] transition-colors uppercase">GSSC Worlds</h3>
                    <p className="text-gray-900 font-semibold mb-2">Global Student Startup Competition</p>
                    <p className="text-gray-600 mb-3 flex-grow">GSSC Worlds brings together the world's best undergraduate students to compete on the world stage in Seoul.</p>
                    <p className="text-[#242EC0] font-semibold text-sm">At no cost to students</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Link to="/ai-cup">
                  <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold group-hover:text-[#242EC0] transition-colors uppercase">AI Cup</h3>
                      <span className="bg-[#242EC0] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-3">Aug 2026</span>
                    </div>
                    <p className="text-gray-900 font-semibold mb-2">Applied AI Competition</p>
                    <p className="text-gray-600 mb-3 flex-grow">A global undergraduate competition designed to build regional AI capabilities through hands-on product development.</p>
                    <p className="text-[#242EC0] font-semibold text-sm">Prize money is funded</p>
                  </div>
                </Link>
              </motion.div>


              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <Link to="/ai-labs">
                  <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold group-hover:text-[#242EC0] transition-colors uppercase">AI Labs</h3>
                    </div>
                    <p className="text-gray-900 font-semibold mb-2">Undergraduate product internships</p>
                    <p className="text-gray-600 mb-3 flex-grow">Placing top undergraduate product designers and AI engineers into real-world projects for the foundation and partner organizations.</p>
                    <p className="text-[#242EC0] font-semibold text-sm">University of Southern California</p>
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Global Network Summary Section */}
        <section id="network" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Global Network
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A friends and family network of current and former mentors and students — powering GSSF programs through relationships built across the world's most influential institutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <motion.div {...fadeInUp} className="text-center">
                <Users className="text-[#242EC0] mx-auto mb-6" size={64} />
                <h3 className="text-2xl font-bold mb-4 uppercase">Global Mentors</h3>
                <p className="text-gray-600 leading-relaxed">Industry leaders from Google, Microsoft, Netflix, Youtube, Amazon, OpenAI, NASA, Fox, Warner Bros. and more</p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
                <Globe className="text-[#242EC0] mx-auto mb-6" size={64} />
                <h3 className="text-2xl font-bold mb-4 uppercase">GLOBAL Universities</h3>
                <p className="text-gray-600 leading-relaxed">Growing network of participants from the world's top universities</p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
                <Award className="text-[#242EC0] mx-auto mb-6" size={64} />
                <h3 className="text-2xl font-bold mb-4 uppercase">Global Partners</h3>
                <p className="text-gray-600 leading-relaxed">Actively growing global partners and sponsors to grow the student impact</p>
              </motion.div>
            </div>

            <motion.div {...fadeInUp} className="text-center">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/network#mentors">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-[#242EC0] border-2 border-[#242EC0] hover:bg-[#242EC0] hover:text-white px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                      Mentors
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/network#universities">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-[#242EC0] text-white hover:bg-[#242EC0]/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                      Universities
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/partners">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white text-[#242EC0] border-2 border-[#242EC0] hover:bg-[#242EC0] hover:text-white px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                      Partners
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}