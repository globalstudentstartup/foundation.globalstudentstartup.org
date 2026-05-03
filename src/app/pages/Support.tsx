import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { SEO } from "../components/SEO";
import { ExternalLink } from "lucide-react";

export default function Support() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const namedScholarships = [
    // Active 2027 regions (first tier)
    { name: "India", tier: "Active 2027", status: "Active, Proven Model", tierLevel: 1, ctaText: "Inquire for 2027", fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Colombia", tier: "Active 2027", status: "Active 2027", tierLevel: 1, ctaText: "Inquire for 2028", fundedStatus: "FULLY FUNDED for 2027" },
    { name: "Singapore", tier: "Active 2027", status: "Active 2027", tierLevel: 1, ctaText: "Inquire for 2028", fundedStatus: "FULLY FUNDED for 2027" },
    { name: "Ukraine", tier: "Active 2027", status: "Active 2027", tierLevel: 1, ctaText: "Inquire for 2028", fundedStatus: "FULLY FUNDED for 2027" },
    // Pipeline 2028 regions (second tier)
    { name: "Nigeria", tier: "Pipeline 2028", status: "Pipeline 2028", tierLevel: 2, ctaText: "Inquire for 2028", fundedStatus: "FULLY FUNDED for 2028" },
    { name: "Australia", tier: "Pipeline 2028", status: "Pipeline 2028", tierLevel: 2, ctaText: "Inquire for 2028", fundedStatus: "FULLY FUNDED for 2028" },
    // Funding Activates regions (third tier) - alphabetical order
    { name: "China", tier: "Funding Activates", status: "Funding Activates", tierLevel: 3, ctaText: "Inquire" },
    { name: "Mexico", tier: "Funding Activates", status: "Funding Activates", tierLevel: 3, ctaText: "Inquire" },
    { name: "Philippines", tier: "Funding Activates", status: "Funding Activates", tierLevel: 3, ctaText: "Inquire" },
    { name: "Taiwan", tier: "Funding Activates", status: "Funding Activates", tierLevel: 3, ctaText: "Inquire" },
    { name: "Vietnam", tier: "Funding Activates", status: "Funding Activates", tierLevel: 3, ctaText: "Inquire" }
  ];

  const universities = [
    // Fully funded for 2026
    { name: "USC", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "UC Berkeley", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Harvard", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Stanford", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Cornell", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Oxford", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Aalto", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Carnegie Mellon Qatar", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "IIT Delhi", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Ewha Womans University", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "POSTECH", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Korea University", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    { name: "Dongseo University", isLive: false, fundedStatus: "FULLY FUNDED for 2026" },
    // Funding Activates (no date)
    { name: "Seoul National University", isLive: false, fundedStatus: null, fundingActivates: true },
    { name: "Yonsei University", isLive: false, fundedStatus: null, fundingActivates: true },
    { name: "KAIST", isLive: false, fundedStatus: null, fundingActivates: true }
  ];

  const getTierColor = (tierLevel: number) => {
    switch(tierLevel) {
      case 1: return "bg-[#242EC0] text-white border-[#242EC0]";
      case 2: return "bg-[#08044C] text-white border-[#08044C]";
      case 3: return "bg-white text-gray-700 border-gray-300";
      default: return "bg-white text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Support GSSC | Global Student Startup Foundation"
        description="Support the next generation of founders. Named scholarships, university support, and general giving options for GSSC Worlds 2026."
        path="/support"
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
              SUPPORT GSSC
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Put the World's Next Generation of Founders on the Global Stage
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">The Global Student Startup Foundation is a 501(c)(3) nonprofit (EIN: 41-3141550) headquartered in Los Angeles. Every dollar raised supports students and programs directly. Ways to give: Global Sponsorship, Named Scholarships, and Named Prizes.</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation CTAs */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <h2 className="text-sm uppercase tracking-widest text-[#242EC0] mb-4 font-bold">
              Choose How to Give
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <a href="#" onClick={scrollToSection('general')} className="flex">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-[#E4E6F3] p-8 rounded-lg text-center border-2 border-transparent hover:border-[#242EC0] transition-all cursor-pointer flex flex-col w-full"
              >
                <h3 className="text-xl font-bold mb-3">Global Sponsor</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">Global brand exposure across all foundation programs, including at the Asian Leadership Conference.</p>
                <Button className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold mt-auto">
                  Give Now →
                </Button>
              </motion.div>
            </a>

            <a href="#" onClick={scrollToSection('universities')} className="flex">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-[#E4E6F3] p-8 rounded-lg text-center border-2 border-transparent hover:border-[#242EC0] transition-all cursor-pointer flex flex-col w-full"
              >
                <h3 className="text-xl font-bold mb-3">Named Scholarships - Universities</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">Support a specific university team</p>
                <Button className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold mt-auto">
                  View Universities →
                </Button>
              </motion.div>
            </a>

            <a href="#" onClick={scrollToSection('regions')} className="flex">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-[#E4E6F3] p-8 rounded-lg text-center border-2 border-transparent hover:border-[#242EC0] transition-all cursor-pointer flex flex-col w-full"
              >
                <h3 className="text-xl font-bold mb-3">Named Scholarships - Regions</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">Fund an entire region's participation</p>
                <Button className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold mt-auto">
                  View Regions →
                </Button>
              </motion.div>
            </a>

            <a href="#" onClick={scrollToSection('prizes')} className="flex">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-[#E4E6F3] p-8 rounded-lg text-center border-2 border-transparent hover:border-[#242EC0] transition-all cursor-pointer flex flex-col w-full"
              >
                <h3 className="text-xl font-bold mb-3">Named Prizes</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">Put your name on the moment that defines GSSC Worlds</p>
                <Button className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold mt-auto">
                  View Prizes →
                </Button>
              </motion.div>
            </a>

          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            {...fadeInUp} 
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/gssc">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-[#242EC0] text-white hover:bg-[#08044C] px-8 py-6 h-auto uppercase tracking-wide text-sm font-semibold"
                  >
                    Learn About Pathways to GSSC Worlds →
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* University Support Section - Now First */}
      <section id="universities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-[#242EC0] mb-6 font-bold">
              NAMED SCHOLARSHIPS - UNIVERSITIES
            </h2>
            <div className="text-xl text-gray-700 leading-relaxed max-w-4xl space-y-4">
              <p>A $25,000 named scholarship puts a university on the global stage.</p>
              <p>Each scholarship funds one team's fully funded trip to GSSC Worlds — flights, hotel, and all program expenses.</p>
              <p className="font-semibold">What the sponsor receives:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Named recognition on the scholarship, GSSF website, program communications, and at GSSC Worlds</li>
                <li>Invitation to judge at the GSSC University competition</li>
              </ul>
              <p>Starting with the 2027 cycle, university named scholarships are reserved exclusively for GSSC founding partner universities — those that participated in 2025 and 2026. This ensures the program's resources are directed toward maximizing global student impact through regional activation.</p>
              <p className="italic text-base">Korean team scholarships are ₩15,000,000 KRW per team.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={`${university.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-all hover:shadow-lg hover:border-[#242EC0] flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{university.name}</h3>
                {university.fundedStatus && (
                  <p className="text-xs mb-2 font-bold uppercase tracking-wide text-green-600">
                    {university.fundedStatus}
                  </p>
                )}
                {university.fundingActivates && (
                  <p className="text-xs mb-2 font-semibold uppercase tracking-wide text-gray-600">
                    Funding activates
                  </p>
                )}
                <Link
                  to="/contact"
                  className="inline-block mt-auto"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold w-full"
                    >
                      Inquire →
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Named Scholarships Section - Regions */}
      <section id="regions" className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-[#242EC0] mb-6 font-bold">
              NAMED SCHOLARSHIPS — REGIONS
            </h2>
            <div className="text-xl text-gray-700 leading-relaxed max-w-4xl space-y-4">
              <p>A $25,000 named scholarship puts a region on the global stage.</p>
              <p>Each scholarship funds one team's fully funded trip to GSSC Worlds — flights, hotel, and all program expenses — activating 500+ students across multiple universities in the region in the process.</p>
              <p className="font-semibold">What the sponsor receives:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Named recognition on the scholarship, GSSF website, program communications, and at GSSC Worlds</li>
                <li>Invitation to judge the regional GSSC Competition</li>
              </ul>
              <p className="italic text-base mt-4">Korean team scholarships are ₩15,000,000 KRW per team.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {namedScholarships.map((scholarship, index) => (
              <motion.div
                key={`${scholarship.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`border-2 rounded-lg p-6 transition-all hover:shadow-lg flex flex-col ${getTierColor(scholarship.tierLevel)}`}
              >
                <h3 className="text-2xl font-bold mb-3">{scholarship.name}</h3>
                {scholarship.fundedStatus && (
                  <p className={`text-xs mb-2 font-bold uppercase tracking-wide ${scholarship.tierLevel === 3 ? 'text-green-600' : 'text-green-300'}`}>
                    {scholarship.fundedStatus}
                  </p>
                )}
                <p className={`text-sm mb-4 font-semibold ${scholarship.tierLevel === 3 ? 'text-gray-600' : 'text-white/80'}`}>
                  {scholarship.status}
                </p>
                <Link
                  to="/contact"
                  className="inline-block mt-auto"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className={`${
                        scholarship.tierLevel === 3 
                          ? 'bg-[#242EC0] text-white hover:bg-[#08044C]' 
                          : 'bg-white text-[#242EC0] hover:bg-white/90'
                      } font-semibold`}
                    >
                      {scholarship.ctaText}
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Named Prizes Section */}
      <section id="prizes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-[#242EC0] mb-6 font-bold">
              NAMED PRIZES
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              A named prize puts your name on the moment that defines GSSC Worlds. Every year, the world's best undergraduate founders compete on the stage of the Asian Leadership Conference in Seoul. Named prizes are awarded at the live ceremony — permanently attached to the donor's name across all GSSC platforms, materials, and future events in perpetuity. Each named prize requires a one-time naming donation. Named prize sponsors are invited to fund the annual Global Ecosystem Experience. GSSF works with sponsors and partners to ensure the experience is funded each year. GSSF pays all experience costs directly to vendors.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto mb-8">
            {/* Confirmed Prize */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#08044C] text-white border-2 border-[#08044C] rounded-lg p-6 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-3">The Vy and Timothy Li Global Student Startup Competition Grand Prize</h3>
                <p className="text-sm mb-2 text-white/90"><span className="font-semibold">Sponsor:</span> Vy and Timothy Li Family Foundation and UC Berkeley Sutardja Center for Entrepreneurship & Technology</p>
                <p className="text-sm text-white/90"><span className="font-semibold">Experience:</span> Silicon Valley Entrepreneurship Bootcamp</p>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeInUp}>
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl">
              All named prizes are recognized in perpetuity across all official GSSC digital platforms, printed materials, press releases, and live award ceremonies at the Asian Leadership Conference. Named prize sponsors are invited to fund the annual Global Ecosystem Experience — GSSF works with sponsors and partners to ensure the experience is funded each year. GSSF pays all experience costs directly to vendors. All contributions are tax-deductible. GSSF is a 501(c)(3) nonprofit (EIN: 41-3141550). Prize experiences may evolve over time. Any material changes to the nature or scope of a named prize experience will be made by mutual agreement between GSSF and the named sponsor. Naming rights remain in perpetuity regardless of any changes to the associated experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* General Giving Section */}
      <section id="general" className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-[#242EC0] mb-6 font-bold">
              GENERAL GIVING
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">Support all teams competing at GSSC Worlds. Approximately 100 undergraduate founders. 23+ universities. 5 continents. One stage in Seoul. Your gift funds the flights, hotel, and program costs that make it possible for the world's best student founders to compete.</p>
            <a 
              href="https://www.zeffy.com/en-US/donation-form/send-the-worlds-best-student-founders-to-gssc-worlds--2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-[#242EC0] text-white hover:bg-[#08044C] px-12 py-6 h-auto uppercase tracking-wide text-base font-semibold"
                >
                  Support GSSC Worlds 2026 →
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer Trust Bar */}
      <section className="py-12 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              The Global Student Startup Foundation is a registered 501(c)(3) nonprofit headquartered in Los Angeles. EIN: 41-3141550. All donations are tax-deductible. Powered by Zeffy — 100% fee-free, every dollar goes directly to GSSF.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}