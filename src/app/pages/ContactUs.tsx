import { motion } from "motion/react";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";

export default function ContactUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Contact Us - GSSF"
        description="Get in touch with the Global Student Startup Foundation. Connect with us via email or social media."
        path="/contact"
      />
      
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              We'd love to hear from you. Whether you're interested in named scholarships, named prizes, global sponsorships, or just want to learn more — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-10 rounded-lg border-2 border-transparent hover:border-[#242EC0] transition-all flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Send Us an Email</h3>
              <p className="text-lg text-gray-700 mb-6 flex-grow break-words">
                foundation@globalstudentstartup.org
              </p>
              <a 
                href="mailto:foundation@globalstudentstartup.org"
                className="inline-block"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold w-full"
                  >
                    Email Us →
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* Calendly Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-10 rounded-lg border-2 border-transparent hover:border-[#242EC0] transition-all flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Schedule a Zoom</h3>
              <p className="text-lg text-gray-700 mb-6 flex-grow">
                Book a 30-minute Zoom with Mike or Lee
              </p>
              <a 
                href="https://calendly.com/globalstudentstartup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold w-full"
                  >
                    Schedule a Zoom →
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* FAQ Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-10 rounded-lg border-2 border-transparent hover:border-[#242EC0] transition-all flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h3>
              <p className="text-lg text-gray-700 mb-6 flex-grow">
                Everything you need to know about GSSC and GSSF
              </p>
              <a 
                href="/faq"
                className="inline-block"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold w-full"
                  >
                    Read FAQ →
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Follow Us Section */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#E4E6F3] p-10 rounded-lg border-l-4 border-[#242EC0]">
            <h3 className="text-2xl font-bold mb-6 uppercase">Follow Us</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Stay updated on our latest programs, events, and stories from our global student community.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="https://www.linkedin.com/company/globalstudentstartup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <Linkedin className="text-[#242EC0] group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <div className="font-semibold text-gray-900">LinkedIn</div>
                  <div className="text-sm text-gray-600">@globalstudentstartup</div>
                </div>
              </a>

              <a 
                href="https://instagram.com/globalstudentstartup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <Instagram className="text-[#242EC0] group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <div className="font-semibold text-gray-900">Instagram</div>
                  <div className="text-sm text-gray-600">@globalstudentstartup</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}