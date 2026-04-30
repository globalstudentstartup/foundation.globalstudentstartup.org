import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

export default function HarvardDonation() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const donationUrl = "https://www.zeffy.com/en-US/donation-form/send-the-worlds-best-student-founders-to-gssc-worlds--2026";

  const universities = [
    { name: "Harvard", highlighted: true },
    { name: "Stanford", highlighted: false },
    { name: "USC", highlighted: false },
    { name: "UC Berkeley", highlighted: false },
    { name: "Cornell", highlighted: false },
    { name: "Oxford", highlighted: false },
    { name: "Aalto", highlighted: false },
    { name: "IIT Delhi", highlighted: false },
    { name: "POSTECH", highlighted: false },
    { name: "Korea University", highlighted: false },
    { name: "Ewha Womans University", highlighted: false },
    { name: "Dongseo University", highlighted: false },
    { name: "CMU-Qatar", highlighted: false }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Send Harvard's Best Student Founders to GSSC Worlds | GSSF"
        description="Support the Harvard team as they compete at GSSC Worlds 2026 in Seoul. The Global Student Startup Foundation is a 501(c)(3) nonprofit."
        path="/harvard-donation"
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm uppercase tracking-widest text-white/80 mb-6 font-semibold">
              GSSC WORLDS 2026 — HARVARD
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Harvard is heading to Seoul. Help make it possible.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Somewhere in Cambridge, a team of undergraduate students just earned their place on the world stage. They built something real. They competed. And now they are heading to Seoul.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white mb-12 max-w-4xl mx-auto">
              But getting there depends on us.
            </p>
            <a 
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-white text-[#242EC0] hover:bg-white/90 px-12 py-6 h-auto uppercase tracking-wide text-base font-semibold"
                >
                  Support Harvard's Team →
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* We are $50,000 short */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                We are $50,000 short.
              </h2>
              
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                <p>
                  GSSC Worlds 2026 is 8 weeks away. 117 students and mentors are confirmed. Flights are being booked. Pitch decks are being refined.
                </p>
                <p>
                  A last second reduction of monies previously committed by sponsors has left us $50,000 short. The gap is real. The deadline is not flexible — GSSC Worlds happens May 17.
                </p>
                <p className="font-semibold text-gray-900">
                  Our students have done their part. Now we need to do ours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Their startup: Acre */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                Their startup: Acre
              </h2>
              
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                <p>
                  India. Nigeria. Southeast Asia. Millions of smallholder farmers lose entire harvests to drought and flooding every year. When that happens, they don't just lose income — they lose the capital to plant the next season. One bad climate event can trap a family for years.
                </p>
                <p>
                  A team from Harvard is building a way out. Acre is a satellite-triggered parametric insurance platform — when a drought or flood crosses a defined threshold, verified by satellite data, farmers receive an automatic payout. No claims process. No waiting. No paperwork. The money arrives when it's needed most. The team is working with a mentor from Asesoria Partners.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What happens in Seoul */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                What happens in Seoul
              </h2>
              
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-10">
                <p>
                  GSSC Worlds 2026 takes place May 17–21 at the Asian Leadership Conference. The Harvard team will pitch alongside teams from Stanford, USC, UC Berkeley, Cornell, Oxford, Aalto, IIT Delhi, POSTECH, Korea University, Ewha Womans University, Dongseo University, and CMU-Qatar — mentored by professionals from Google, OpenAI, Netflix, TikTok, Apple, Disney+, and Live Nation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {universities.map((university, index) => (
                  <motion.div
                    key={university.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span 
                      className={`inline-block px-5 py-3 rounded-full font-semibold text-sm transition-all ${
                        university.highlighted 
                          ? 'bg-[#242EC0] text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-[#242EC0] hover:text-white'
                      }`}
                    >
                      {university.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Every student competes fully funded */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                Every student competes fully funded.
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Flights, hotel, and all program expenses covered — because we believe economic circumstances should never determine who gets a seat at the global table.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA with updated About GSSF */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <a 
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-[#242EC0] text-white hover:bg-[#08044C] px-12 py-6 h-auto uppercase tracking-wide text-base font-semibold mb-12"
                >
                  Support Harvard at GSSC Worlds →
                </Button>
              </motion.div>
            </a>
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">About GSSF</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The Global Student Startup Foundation is a 501(c)(3) nonprofit (EIN: 41-3141550). Your gift is tax-deductible.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-3">
                  <a href="https://globalstudentstartup.org" className="text-[#242EC0] hover:underline">globalstudentstartup.org</a> | <a href="https://foundation.globalstudentstartup.org" className="text-[#242EC0] hover:underline">foundation.globalstudentstartup.org</a>
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Instagram: <a href="https://instagram.com/globalstudentstartup" className="text-[#242EC0] hover:underline" target="_blank" rel="noopener noreferrer">@globalstudentstartup</a> | LinkedIn: <a href="https://linkedin.com/company/globalstudentstartup" className="text-[#242EC0] hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/company/globalstudentstartup</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}