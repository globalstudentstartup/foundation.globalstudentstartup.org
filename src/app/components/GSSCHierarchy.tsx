import { motion } from "motion/react";
import { Trophy, MapPin, Building2, ArrowUp, ArrowRight } from "lucide-react";

export function GSSCHierarchy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Two Pathways to GSSC Worlds
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Teams qualify through standalone University Competitions or through Regional Competitions.
          </p>
        </motion.div>

        {/* Two Pathways Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* PATHWAY 1: University Competition */}
          <motion.div {...fadeInUp} className="relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#242EC0] to-[#242EC0]/70 rounded-t-lg" />
            <div className="border-2 border-[#242EC0] rounded-lg p-8 bg-[#E4E6F3]/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#242EC0] mb-2 uppercase tracking-tight">Pathway 1</h3>
                <p className="text-sm uppercase tracking-wider text-gray-600">Direct Qualification</p>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-lg border-2 border-[#242EC0]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="text-[#242EC0]" size={24} />
                    <h4 className="font-bold text-lg">University Competition</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Teams compete at participating universities
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowUp className="text-[#242EC0] rotate-180" size={32} />
                </div>

                {/* Step 2 - GSSC Worlds */}
                <div className="bg-[#242EC0] text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="text-white" size={24} />
                      <h4 className="font-bold text-lg uppercase tracking-tight">GSSC Worlds</h4>
                    </div>
                    <p className="text-white/90 text-sm">
                      Winners advance directly to Seoul
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PATHWAY 2: Regional Competition */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#08044C] to-[#08044C]/70 rounded-t-lg" />
            <div className="border-2 border-[#08044C] rounded-lg p-8 bg-[#E4E6F3]/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#08044C] mb-2 uppercase tracking-tight">Pathway 2</h3>
                <p className="text-sm uppercase tracking-wider text-gray-600">Regional Qualification</p>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-lg border-2 border-[#08044C]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="text-[#08044C]" size={24} />
                    <h4 className="font-bold text-lg">University Competitions</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Teams compete at their home university
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowUp className="text-[#08044C] rotate-180" size={32} />
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-lg border-2 border-[#08044C]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-[#08044C]" size={24} />
                    <h4 className="font-bold text-lg">Regional Finals</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    University winners compete at Regional Finals (e.g., GSSC x India at Ashoka University)
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowUp className="text-[#08044C] rotate-180" size={32} />
                </div>

                {/* Step 3 - GSSC Worlds */}
                <div className="bg-[#242EC0] text-white p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="text-white" size={24} />
                      <h4 className="font-bold text-lg uppercase tracking-tight">GSSC Worlds</h4>
                    </div>
                    <p className="text-white/90 text-sm">
                      Regional champions advance to Seoul
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Destination - GSSC Worlds Details */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="bg-[#242EC0] text-white p-12 rounded-lg relative overflow-hidden max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="relative z-10 text-center">
            <Trophy className="mx-auto mb-6" size={56} />
            <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">GSSC Worlds</h3>
            <p className="text-xl text-white/90 mb-4">Global Final Round — Seoul, South Korea</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-wider text-white/70 mb-2">Location</p>
                <p className="font-bold text-lg">Asian Leadership Conference</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-wider text-white/70 mb-2">Participants</p>
                <p className="font-bold text-lg">Qualified Winners Only</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-wider text-white/70 mb-2">Funding</p>
                <p className="font-bold text-lg">100% Covered by GSSF</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Example Callout */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-[#E4E6F3] p-10 rounded-lg border-l-4 border-[#08044C]"
        >
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Example: GSSC x India Region</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            In the India region, teams compete at individual universities (IIT Delhi, Ashoka University, OP Jindal University, SRCC, etc.). Winners from each university then compete at the <span className="font-semibold">Regional Finals hosted at Ashoka University</span>. The regional champion earns a fully funded trip to GSSC Worlds in Seoul.
          </p>
          <div className="flex flex-wrap gap-3 items-center text-sm">
            <div className="bg-white px-4 py-2 rounded-full font-semibold">University Competition</div>
            <ArrowRight className="text-gray-400" size={20} />
            <div className="bg-white px-4 py-2 rounded-full font-semibold">Regional Finals at Ashoka</div>
            <ArrowRight className="text-gray-400" size={20} />
            <div className="bg-[#242EC0] text-white px-4 py-2 rounded-full font-semibold">GSSC Worlds in Seoul</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}