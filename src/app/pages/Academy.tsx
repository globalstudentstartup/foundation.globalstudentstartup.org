import { motion } from "motion/react";
import { GraduationCap, Users, Plane, Award, Target, Lightbulb, CheckCircle, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

export default function Academy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="GSSF Academy | Global Innovation Academy | GSSF"
        description="The GSSF Academy is a three-week, in-person global innovation residency hosted in Europe for undergraduate founders. Operated by the Global Student Startup Foundation."
        path="/academy"
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6"><span className="text-sm uppercase tracking-widest text-white/80 font-semibold">Global Innovation Academy — Launching Summer 2027</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Three Weeks. In Person. Europe.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              The GSSF Academy is a practitioner-led global innovation residency that moves exceptional undergraduate founders from concept to prototype — and the best team earns a fully funded trip to GSSC Worlds in Seoul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                About the Program
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              From Theory to Execution
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp} className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The GSSF Academy is a three-week, in-person Global Innovation Academy hosted in Europe. It brings together high-potential undergraduate students and experienced practitioners from across the globe to build early-stage, human-centered ventures.
                </p>
                <p>
                  The Academy is not a substitute for GSSC Worlds. It is a feeder, accelerator, and ecosystem extension — a distinct pathway through which exceptional student talent is identified, developed, and connected to the broader GSSF global ecosystem.
                </p>
                <p className="font-semibold">
                  Students leave with more than a validated venture idea. They leave with the capacity to lead, adapt, and connect across borders.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-4xl font-bold text-[#242EC0] mb-2">200+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Students Per Cohort</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-4xl font-bold text-[#242EC0] mb-2">3</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Weeks, In-Person</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-4xl font-bold text-[#242EC0] mb-2">1</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Team Earns Funded Trip to GSSC Worlds</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Weeks */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                The Three Weeks
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Ideate. Build. Pitch.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Week 1 */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Week 1</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Ideate</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Teams form across language barriers and dive into customer discovery. Students explore problems, run early traction experiments, and build manual MVPs to validate their core idea.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#242EC0] uppercase tracking-wide">Output:</p>
                <p className="text-gray-700 mt-2">A validated problem statement and initial venture concept.</p>
              </div>
            </motion.div>

            {/* Week 2 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Week 2</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Design & Build</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Teams move from idea to prototype. Product design, business model refinement, competitive analysis, and continuous mentor feedback loops define this week.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#242EC0] uppercase tracking-wide">Output:</p>
                <p className="text-gray-700 mt-2">A high-fidelity prototype and refined business model.</p>
              </div>
            </motion.div>

            {/* Week 3 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Week 3</div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Pitch & Reflect</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Teams develop their narrative, rehearse their pitch, and present before Academy mentors and GSSF leadership.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#242EC0] uppercase tracking-wide">Output:</p>
                <p className="text-gray-700 mt-2">A refined pitch and prototype. One team selected for the GSSF Academy Champion Award.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Champion Award */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <div className="inline-block mb-6">
                <span className="text-sm uppercase tracking-widest text-white/80 font-semibold">
                  The Pathway to Seoul
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                The Best Team Goes to GSSC Worlds — Fully Funded
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                One team per cohort receives the GSSF Academy Champion Award — a fully funded trip to GSSC Worlds in Seoul, South Korea, including international travel, lodging, full participation in the GSSC Pitch Bootcamp, and on-stage pitching at the Asian Leadership Conference (ALC).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Participation Model */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <div className="inline-block mb-6">
                <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                  How to Join
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Invitation-Led. Merit-Driven. No Tiers.
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The GSSF Academy is an invitation-led program with a limited number of open application slots. Participants are selected through invitations within the GSSF Friends & Family network, nominations from partner universities and mentors, and a small number of open applications.
                </p>
                <p className="font-semibold">
                  Once selected, all participants are treated equally. There are no tiers or distinctions.
                </p>
                <p className="text-[#242EC0] font-bold">
                  Target Cohort: 200+ undergraduate students · August 2027
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Representative Mentors */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp}>
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                Mentorship
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Experienced Practitioners
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              Academy participants work with mentors from the GSSF Friends & Family network — practitioners from leading organizations across industries who provide direct guidance throughout the three-week residency.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}