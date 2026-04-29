import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQ() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const faqs = [
    {
      question: "What is GSSC Worlds?",
      answer: "The Global Student Startup Competition is the world's premier undergraduate entrepreneurship competition, held annually in Seoul at the Asian Leadership Conference. Every competing student is fully funded — flights, hotel, and all program expenses."
    },
    {
      question: "Is GSSF a registered nonprofit?",
      answer: "Yes. GSSF is a U.S.-based 501(c)(3) nonprofit headquartered in Los Angeles (EIN: 41-3141550). All donations are tax-deductible to the extent permitted by law."
    },
    {
      question: "How are funds used?",
      answer: "A minimum of 85% of all general funds go directly to students and programmatic activities. No more than 15% is used for operations. All funding decisions are governed by board-approved policies."
    },
    {
      question: "How do I make a gift?",
      answer: "GSSF accepts donations two ways. Online giving through Zeffy — 100% fee-free, every dollar reaches GSSF. Wire transfer for named scholarships, named prizes, and major gifts — instructions provided privately upon request."
    },
    {
      question: "What is a named scholarship?",
      answer: "A $25,000 named scholarship funds one team's fully funded trip to GSSC Worlds and activates 500+ students across multiple universities in that region. Korean team scholarships are ₩15,000,000 KRW per team."
    },
    {
      question: "What is a named prize?",
      answer: "A named prize permanently attaches your name to a specific award at GSSC Worlds — recognized in perpetuity across all platforms, materials, and live ceremonies. Named prizes require a one-time naming donation. The prize experience is a Global Ecosystem Experience, determined in partnership with the named sponsor."
    },
    {
      question: "Can prize experiences change over time?",
      answer: "Yes. Any material changes will be made by mutual agreement between GSSF and the named sponsor. Naming rights remain in perpetuity regardless of any changes to the associated experience."
    },
    {
      question: "Who runs the regional competitions?",
      answer: "Regional competitions are run by undergraduate student organizations on the ground, following the proven model built in India during the 2025–26 cycle. GSSF provides the global framework and standards. Student organizations execute the events locally."
    },
    {
      question: "Can I judge at a regional competition?",
      answer: "Yes. Named scholarship sponsors receive a formal invitation to serve as a judge at the regional GSSC competition in their named region. Travel and expenses are at the sponsor's own cost."
    },
    {
      question: "Can I support a specific university or region?",
      answer: "Yes. Named scholarships are available for specific universities and regions. Visit our support page to see all available opportunities at foundation.globalstudentstartup.org/support."
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="FAQ - GSSF"
        description="Everything you need to know about supporting GSSC and the Global Student Startup Foundation."
        path="/faq"
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
              FAQ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
              Everything you need to know about supporting GSSC and the Global Student Startup Foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-[#E4E6F3] rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-[#242EC0] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Closing CTA Section */}
          <motion.div {...fadeInUp} className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't see your question here?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We'd love to help. Suggest a question or reach out directly.
            </p>
            <a href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button
                  size="lg"
                  className="bg-[#242EC0] text-white hover:bg-[#08044C] font-semibold"
                >
                  Contact Us →
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
