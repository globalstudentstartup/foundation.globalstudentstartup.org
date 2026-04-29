import { motion } from "motion/react";
import { Building2, Globe, Handshake, Target, Users, Award, TrendingUp, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { SEO } from "../components/SEO";

export default function GlobalPartners() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="GSSF Global Partners - Growing Our Impact Together"
        description="Actively growing global partners and sponsors to expand student opportunities worldwide. Join us in building the future of global innovation and entrepreneurship."
        path="/partners"
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6"><span className="text-sm uppercase tracking-widest text-white/80 font-semibold">Global Partners</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Growing Our Impact Together
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              Actively growing global partners and sponsors to grow the student impact. Join us in making opportunity as global as talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner with GSSF */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Why Partner with GSSF?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mb-8">
              GSSF partners with foundations, families, diaspora organizations, municipalities, universities, and companies to expand access to world-class innovation and entrepreneurship opportunities for undergraduate students worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
              <Globe className="text-[#242EC0] mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase">Global Reach</h3>
              <p className="text-gray-700 leading-relaxed">Connect with top undergraduate talent from universities around the world and a growing network of students.</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <Target className="text-[#242EC0] mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase">Mission Alignment</h3>
              <p className="text-gray-700 leading-relaxed">
                Support a 501(c)(3) nonprofit dedicated to making opportunity as global as talent through funded programs.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <TrendingUp className="text-[#242EC0] mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase">Proven Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Partner with an organization that has successfully run global programs and built relationships across influential institutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm uppercase tracking-widest text-[#242EC0] font-semibold">
                Partnership Opportunities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ways to Partner
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              We work with a diverse range of partners to expand our impact. Whether you're a foundation, university, company, or individual philanthropist, there are multiple ways to support GSSF's mission.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Program Sponsors */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg border-l-4 border-[#242EC0]">
              <div className="flex items-start gap-6">
                <Award className="text-[#242EC0] flex-shrink-0" size={48} />
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">Program Sponsors</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Support specific programs like GSSC Worlds and AI Cup. Program sponsors help cover travel, accommodation, and program costs to ensure students can participate regardless of financial means.
                  </p>
                  <p className="text-sm font-semibold text-[#242EC0]">
                    Impact: Make programs fully funded for qualifying students
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Regional Partners */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg border-l-4 border-[#242EC0]">
              <div className="flex items-start gap-6">
                <Building2 className="text-[#242EC0] flex-shrink-0" size={48} />
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">Regional Partners</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Municipalities, universities, and regional organizations can partner to bring GSSF programs to their area, building local innovation capacity and connecting students to global opportunities.
                  </p>
                  <p className="text-sm font-semibold text-[#242EC0]">
                    Impact: Build regional innovation ecosystems
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Institutional Partners */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg border-l-4 border-[#242EC0]">
              <div className="flex items-start gap-6">
                <Users className="text-[#242EC0] flex-shrink-0" size={48} />
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">Institutional Partners</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Universities and academic institutions can partner to connect their students with GSSF programs, mentors, and the global network.
                  </p>
                  <p className="text-sm font-semibold text-[#242EC0]">
                    Impact: Expand opportunities for your student community
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Foundation & Philanthropic Partners */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg border-l-4 border-[#242EC0]">
              <div className="flex items-start gap-6">
                <Heart className="text-[#242EC0] flex-shrink-0" size={48} />
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">Foundation & Philanthropic Partners</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Foundations, family offices, and diaspora organizations can support GSSF's mission through grants, scholarships, or general operating support to help us scale our impact.
                  </p>
                  <p className="text-sm font-semibold text-[#242EC0]">
                    Impact: Enable sustainable growth and program expansion
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Corporate Partners */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg border-l-4 border-[#242EC0]">
              <div className="flex items-start gap-6">
                <Handshake className="text-[#242EC0] flex-shrink-0" size={48} />
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase">Corporate Partners</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Companies can engage through mentorship, sponsorship, or by providing resources and expertise to support student programs and ventures.
                  </p>
                  <p className="text-sm font-semibold text-[#242EC0]">
                    Impact: Connect top student talent with industry leaders
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Founding Global Partners
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mb-12">
              GSSF is proud to work with the founding institutions that provide significant monetary and in-kind support to the foundation and its programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg border-l-4 border-[#242EC0]">
              <h3 className="text-2xl font-bold mb-3 uppercase">University of Southern California</h3>
              <p className="text-gray-700 leading-relaxed">The foundation was co-founded by USC faculty and students. They provide significant leadership and organizing capacity for the foundation's programs.</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg border-l-4 border-[#242EC0]">
              <h3 className="text-2xl font-bold mb-3 uppercase">UC Berkeley Sutardja Center for Entrepreneurship & Technology</h3>
              <p className="text-gray-700 leading-relaxed">The foundation was co-founded by UC Berkeley's industry fellow.&nbsp;&nbsp;They continue to provide grand prize tuition to their Silicon Valley bootcamp for the winning Korean teams.</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg border-l-4 border-[#242EC0]">
              <h3 className="text-2xl font-bold mb-3 uppercase">I in We</h3>
              <p className="text-gray-700 leading-relaxed">The foundation was co-founded by I in We's managing director.&nbsp;&nbsp;They continue to provide significant leadership and organizing capacity for the foundation's programs.</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#E4E6F3] p-8 rounded-lg border-l-4 border-[#242EC0]">
              <h3 className="text-2xl font-bold mb-3 uppercase">Asian Leadership Conference</h3>
              <p className="text-gray-700 leading-relaxed">The foundation was co-founded by ALC. They continue to provide significant infrastructure support. Without ALC, the foundation would not exist.</p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-10 rounded-lg max-w-4xl border-l-4 border-[#242EC0]">
            <p className="text-xl italic text-gray-800 leading-relaxed">
              "We're actively growing our partner network. If you're interested in supporting the next generation of global innovators and entrepreneurs, we'd love to hear from you."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Interested in Partnering?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Let's explore how we can work together to grow student impact worldwide.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}