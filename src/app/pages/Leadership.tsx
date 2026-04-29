import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Linkedin } from "lucide-react";
import { SEO } from "../components/SEO";
import mikeLeePhoto from "figma:asset/cf0aba56dee3818cdbb409e44a434eeaa2a2fb86.png";
import lizLeePhoto from "figma:asset/b4c9cfa2093c3f9a6b67e59ccaa2bedae32edc0f.png";
import timothyLiPhoto from "figma:asset/2964414f7bdcd0e77078a64dfcdd91d79ea176b8.png";
import carolinaAvilaPhoto from "figma:asset/62e2a4046c2fe8aabff0a6b436b6bdbdbf297029.png";
import bobUphamPhoto from "figma:asset/4cc6664cecf4040ac0565b378c8794054f72b049.png";
import jadeBahngPhoto from "figma:asset/d2c9e1aee1c44fc8f99fb83757e8474fff9cf8c1.png";
import yeseulByunPhoto from "figma:asset/13a152e4f83beef47fed2ca4c8fccb33d4df97c6.png";
import zoeBeachPhoto from "figma:asset/b39fb8b8fc6a7b5c29e3bf0d9ae6db0a66bf79f4.png";
import graceLiPhoto from "figma:asset/5abecfe768c87e45c1c3bb43ee9a86afe5c0aaf5.png";
import jongyeopSeonPhoto from "figma:asset/1765809e59ad76b6d65eca139c51438455393ad9.png";
import manuelaBerrioPhoto from "figma:asset/6d444e55f7b68624b4b3a2bbe116b88e35f34a81.png";
import selinaMejiaPhoto from "figma:asset/c48d02a7594d343af2b882bdd263763b7f3eb845.png";
import praewKedpraditPhoto from "figma:asset/3b04e7dc0aad7809157f49c7188f31e91d8e4f1c.png";
import mirayaAgarwalPhoto from "figma:asset/185f637641d07779feb80f897f5c267b83e23381.png";
import gigiWangPhoto from "figma:asset/85752fbb22d4ecea99cced9c247ef8111441cc7f.png";
import cherylEdisonPhoto from "figma:asset/a2228584c129158abdbe05477af6eb1ea09b0660.png";
import andresBarretoPhoto from "figma:asset/60603fdfa571cb89384c05a6dbdcd5a473ffab28.png";
import nitinKalePhoto from "figma:asset/23d0427dffa832b5fde087d9da59c8af402652b3.png";
import felixLitvinskyPhoto from "figma:asset/e1e3fb8c0209eee41a7592804ece9f985d0e32a9.png";
import apurvaGanooPhoto from "figma:asset/c8c548fa7ebeb5d7a08b0f0bf692e24a8759b1bb.png";
import danielleVivoPhoto from "figma:asset/a8f4d51d9156fd4b69aa857d4a8d35c55dce9b89.png";
import ricardoMarvaoPhoto from "figma:asset/5366ae767f06137e60bafc48f379b8664a5c569d.png";
import gabrielaMartinezPhoto from "figma:asset/ac7115df1ce868ea137f7305dcdb8708a258c737.png";
import maximeChauryPhoto from "figma:asset/37d5f7b4478509021e2cbfafb088e9299d1c82dc.png";
import dolapoSunmolaPhoto from "figma:asset/c6d7a29cab126e79beae694868b8d050022e13e5.png";
import eugeneChoiPhoto from "../../imports/image.png";

export default function Leadership() {
  const location = useLocation();
  const [expandedBios, setExpandedBios] = useState<Set<string>>(new Set());

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const toggleBio = (name: string) => {
    setExpandedBios(prev => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-[#161616]">
      <SEO
        title="Leadership - Team and Advisors"
        description="Meet the GSSF leadership team and global advisors supporting the world's most promising undergraduate founders across 5 continents."
        path="/leadership"
      />

      {/* Hero Section */}
      <section id="leadership" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              The Team
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase leading-tight">Leadership</h1>
            <p className="text-xl text-white/80 max-w-4xl mb-12">The foundation is guided by experienced operators, educators, and ecosystem builders and operated by student organizers who we are developing into future global leaders.</p>

            {/* CTA Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              <a
                href="#global-leadership"
                className="bg-white/5 hover:bg-[#242EC0] border border-white/10 hover:border-[#242EC0] rounded-lg p-6 transition-all group"
              >
                <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-1">
                  Global Leadership
                </h3>
                <p className="text-white/60 text-xs group-hover:text-white/80">
                  Foundation and global program leadership
                </p>
              </a>

              <a
                href="#regional-leadership"
                className="bg-white/5 hover:bg-[#242EC0] border border-white/10 hover:border-[#242EC0] rounded-lg p-6 transition-all group"
              >
                <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-1">
                  Regional Leadership
                </h3>
                <p className="text-white/60 text-xs group-hover:text-white/80">
                  Responsible for growing the presence of all GSSF programs and fundraising from the regional diaspora
                </p>
              </a>

              <a
                href="#global-advisors"
                className="bg-white/5 hover:bg-[#242EC0] border border-white/10 hover:border-[#242EC0] rounded-lg p-6 transition-all group"
              >
                <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-1">
                  Global Advisors
                </h3>
                <p className="text-white/60 text-xs group-hover:text-white/80">
                  Strategic advisors that cross regions and programs
                </p>
              </a>

              <a
                href="#program-regional-advisors"
                className="bg-white/5 hover:bg-[#242EC0] border border-white/10 hover:border-[#242EC0] rounded-lg p-6 transition-all group"
              >
                <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-1">
                  Program & Regional Advisors
                </h3>
                <p className="text-white/60 text-xs group-hover:text-white/80">
                  Strategic advisors with deep program or regional knowledge and relationships
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Leadership */}
      <section id="global-leadership" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-sm uppercase tracking-widest text-white/60 mb-12">Global Leadership</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Mike Lee */}
            <motion.div {...fadeInUp}>
              <img
                src={mikeLeePhoto}
                alt="Mike Lee"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Mike Lee</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">
                Co-Founder & Chairman
              </p>
              <a
                href="https://www.linkedin.com/in/uscprofessor/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('mike') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Mike Lee is a Co-Founder and Chairman of the Global Student Startup Foundation (GSSF) — and the driving force behind its mission to create funded, global, in-person opportunities for the next generation of undergraduate innovators.
                    </p>
                    <p className="mb-4">
                      A veteran of Silicon Valley's most defining era, Mike has led technology from early-stage startups to Fortune 100 companies — including executive roles at Fox, Warner Bros., and Netscape, the pioneering browser company that helped shape the modern Internet. Having made it his mission to engage with and learn from students, he now teaches at the USC Viterbi School of Engineering, focusing on digital entrepreneurship and applied artificial intelligence. A recipient of the USC Marshall Golden Apple Award for teaching excellence — voted on by students — he brings the same credibility to the classroom that he brought to the boardroom.
                    </p>
                    <p>
                      An expert in global entrepreneurship programs, Mike served as Head of Mentors for the European Innovation Academy and is now defining a new model of global undergraduate entrepreneurship as a co-founder of the GSSF Academy. As Co-Founder of GSSF and the Global Student Startup Competition (GSSC), he has built a global platform that brings the world's top undergraduate entrepreneurs — from USC, UC Berkeley, Harvard, Stanford, Oxford, Aalto, Seoul National University, and beyond — to compete on the world stage at the Asian Leadership Conference in Seoul. His mission is simple and unwavering: talent is global, opportunity is not — and GSSF exists to close that gap.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Mike Lee is a Co-Founder and Chairman of the Global Student Startup Foundation (GSSF) — and the driving force behind its mission to create funded, global, in-person opportunities for the next generation of undergraduate innovators.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('mike')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('mike') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Liz Lee */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <img
                src={lizLeePhoto}
                alt="Liz Lee"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Liz Lee</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">
                Co-Founder & Chairman
              </p>
              <a
                href="https://www.linkedin.com/in/lizlee31/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('liz') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Liz Lee is a Co-Founder and Chairman of the Global Student Startup Foundation (GSSF) and one of the architects of the global ecosystem that powers it. Raised across Korea, Canada, Peru, Indonesia, Italy, and the United States, Liz operates with a rare fluency in cultures, markets, and the human dynamics that determine whether ideas travel — or stay local.
                    </p>
                    <p className="mb-4">
                      A seasoned ecosystem builder and cross-border strategist, Liz has spent over a decade building high-performing teams, structuring global partnerships, and designing founder and talent development programs across technical and business domains. She advises founders and institutions on AI strategy, cross-border expansion, and ecosystem positioning — helping organizations turn strategic ambiguity into executable direction, especially when entering new markets or navigating AI-driven transformation.
                    </p>
                    <p>
                      As the founder of I in We and a decade-long leader of Girls in Tech Korea — serving first as Board Member and then as Managing Director — Liz has a deep track record of building communities that connect emerging talent to global opportunity. Girls in Tech is a global nonprofit with 120,000+ members across 35 chapters worldwide, dedicated to eliminating the gender gap in tech and ensuring every voice in the industry is heard. At GSSF, she brings that same conviction to the world stage: that the next generation of great builders is everywhere, and the institutions that reach them first will shape what gets built next.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Liz Lee is a Co-Founder and Chairman of the Global Student Startup Foundation (GSSF) and one of the architects of the global ecosystem that powers it. Raised across Korea, Canada, Peru, Indonesia, Italy, and the United States, Liz operates with a rare fluency in cultures, markets, and the human dynamics that determine whether ideas travel — or stay local.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('liz')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('liz') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Timothy Li */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <img
                src={timothyLiPhoto}
                alt="Timothy Li"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Timothy Li</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">
                Global Advisor & Head of Judging & Pitch
              </p>
              <a
                href="https://www.linkedin.com/in/timothy-li/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('timothy') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Timothy Li is a serial entrepreneur, fintech architect, and the foundation's first Master Mentor — bringing two decades of experience across consumer lending, credit risk, and financial infrastructure to his role as GSSF Global Advisor and Head of Judging & Pitch.
                    </p>
                    <p className="mb-4">
                      Timothy currently serves as Head of Product & Partnerships at LendAPI, a Venture-Backed Product as a Service (PaaS) FinTech Startup. At LendAPI, he directs product strategy and go-to-market for an embedded lending infrastructure platform that powers consumer and small business credit programs at scale. Before LendAPI, Timothy founded Consurge, an AI-driven credit platform, and built BridgeWell, a regulated marketplace lender serving SMB and consumer credit markets in South Korea.
                    </p>
                    <p className="mb-4">
                      Earlier in his career, Timothy served as VP of Consumer Credit Risk at TD Bank, where he led the strategy and execution of TD Bank's Canadian Credit Card Risk Strategy — a portfolio responsible for the risk management of $7 billion in consumer credit exposure. His work spanned the full credit lifecycle: underwriting, portfolio optimization, regulatory compliance, and early fraud detection architecture, building a foundation in the systems, governance, and institutional precision that power modern consumer credit at scale.
                    </p>
                    <p>
                      As GSSF's Global Advisor and Head of Judging & Pitch, Timothy's framework for evaluating pitching, traction, and early-stage venture readiness has been adopted as the foundation's global standard — the evaluative lens through which all GSSF programs assess founder potential, market validation, and the path from undergraduate idea to institutional-grade venture. His approach bridges the gap between what students believe matters and what actually moves the needle in the eyes of sophisticated capital — and it is now the foundation upon which GSSF builds the next generation of globally competitive undergraduate founders.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Timothy Li is a serial entrepreneur, fintech architect, and the foundation's first Master Mentor — bringing two decades of experience across consumer lending, credit risk, and financial infrastructure to his role as GSSF Global Advisor and Head of Judging & Pitch.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('timothy')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('timothy') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Carolina Avila */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <img
                src={carolinaAvilaPhoto}
                alt="Carolina Avila"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Carolina Avila</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">
                CEO, Academy
              </p>
              <a
                href="https://www.linkedin.com/in/caroavi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('carolina') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Carolina Avila is the CEO of the GSSF Academy and one of the world's most experienced builders of global innovation and entrepreneurship programs. Over 15+ years, she has designed and led transformative programs across two continents — at the intersection of innovation strategy, education, and ecosystem building — helping startups, students, and institutions unlock creativity and drive real-world impact.
                    </p>
                    <p className="mb-4">
                      Her career spans some of the most respected organizations in global innovation. As Project Director for the Mayor's Office of Bogotá, Carolina led Ciempiés — an award-winning initiative that redesigned safe school commutes for children and won the 2016 Bloomberg Mayors Challenge, one of the most prestigious recognitions for bold public sector innovation. She has consulted for the UNDP across Colombia, Bolivia, and the Dominican Republic, designing innovation portfolios and sustainable development strategies for some of the world's most complex challenges.
                    </p>
                    <p className="mb-4">
                      As Head of Program Development and Innovation at the European Innovation Academy — one of the world's largest innovation programs for students and startups — Carolina led the end-to-end design and delivery of a flagship three-week program serving 350+ students and 50+ mentors across multiple international locations. She has also led the achievement of Ashoka Changemaker Campus designation, launched university innovation centers, and built global partnerships with NGOs, accelerators, and leading institutions worldwide.
                    </p>
                    <p>
                      At GSSF, Carolina brings this rare depth of program-building expertise to the GSSF Academy — designing the in-person, theory-to-execution experience that prepares the world's most promising undergraduate founders to compete and lead on the global stage.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Carolina Avila is the CEO of the GSSF Academy and one of the world's most experienced builders of global innovation and entrepreneurship programs. Over 15+ years, she has designed and led transformative programs across two continents — at the intersection of innovation strategy, education, and ecosystem building — helping startups, students, and institutions unlock creativity and drive real-world impact.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('carolina')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('carolina') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Bob Upham */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <img
                src={bobUphamPhoto}
                alt="Bob Upham"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Bob Upham</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Head of Mentors</p>
              <a
                href="https://www.linkedin.com/in/bobupham/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('bob') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Bob Upham is a Silicon Valley-based startup advisor, investor, and ecosystem builder with a career spanning decades at the forefront of the global technology industry. A 2x founder and 2x Head of Business Development at venture-backed startups, Bob brings hard-won operational experience to every founder he works with.
                    </p>
                    <p className="mb-4">
                      His corporate career reads like a tour of Silicon Valley's defining moments — from negotiating the landmark Yahoo-Microsoft Search Agreement, one of the largest partnership deals in Yahoo's history, to leading the global rollout of Visa's digital products including Apple Pay, Samsung Pay, and Android Pay. He has generated hundreds of millions of dollars in value through partnerships, strategic alliances, and business development across some of the world's most consequential technology companies.
                    </p>
                    <p>
                      Today, as Managing Partner of Asesoria Partners, Bob advises startups, corporations, accelerators, and universities across the globe on fundraising, product strategy, go-to-market, and US market entry. He mentors founders through Techstars Tokyo, AlchemistX, The Batchery, and ESADE, and serves as a Program Development Fellow at UC Berkeley — where he has supported entrepreneurship programs for nearly a decade. As GSSF's Head of Mentors, Bob brings his global network, Silicon Valley credibility, and founder-first mentality to bear on the world's most promising undergraduate founders — connecting them to the people, capital, and frameworks they need to build what's next.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Bob Upham is a Silicon Valley-based startup advisor, investor, and ecosystem builder with a career spanning decades at the forefront of the global technology industry. A 2x founder and 2x Head of Business Development at venture-backed startups, Bob brings hard-won operational experience to every founder he works with.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('bob')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('bob') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Jade Bahng */}
            <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
              <img
                src={jadeBahngPhoto}
                alt="Jade Bahng"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Jade Bahng</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Co-Founder & Managing Director, Global Competition</p>
              <a
                href="https://www.linkedin.com/in/jadebahng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('jade') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Jade Bahng is a Co-Founder of the Global Student Startup Foundation and serves as Managing Director of Global Competition. As one of the original architects of GSSF, she helped build the foundation from the ground up — establishing the competition framework, culture, and global standards that now span multiple continents.
                    </p>
                    <p className="mb-4">
                      In her operational role, Jade co-leads the Global Competition pillar alongside Yeseul Byun, overseeing the strategic vision and execution of GSSF's flagship competition programs. Together, they ensure that every regional qualifier and the GSSC Worlds stage in Seoul reflects a world-class standard of quality, relevance, and student experience.
                    </p>
                    <p className="mb-4">
                      Jade's professional background is in brand marketing, social strategy, influencer communications, and experiential across CPG, entertainment, and consumer tech. She has worked with culturally resonant brands including Poppi, Notion, Partiful, and DoorDash, building programs that bridge brands to communities through social media, ambassador networks, and live events. She has held roles at TikTok, Airbnb, and CJ ENM America, and through her own venture, Dorm Room Digital, has consulted for Apple and NVIDIA on digital marketing and campus go-to-market strategy.
                    </p>
                    <p>
                      At GSSF, she applies this expertise to curate a growing network of early-career mentors from major technology and media companies — ensuring GSSF programs remain hyper-relevant for the next generation of student builders and the brands that want to reach them.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Jade Bahng is a Co-Founder of the Global Student Startup Foundation and serves as Managing Director of Global Competition. As one of the original architects of GSSF, she helped build the foundation from the ground up — establishing the competition framework, culture, and global standards that now span multiple continents.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('jade')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('jade') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Yeseul Byun */}
            <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
              <img
                src={yeseulByunPhoto}
                alt="Yeseul Byun"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Yeseul Byun</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Managing Director, Global Competition</p>
              <a
                href="https://www.linkedin.com/in/yeseulbyun/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('yeseul') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Yeseul Byun's path to GSSF leadership began on the GSSC stage itself — as a competitor. After advancing as a GSSC Finalist at the Asian Leadership Conference in Seoul in May 2025, she joined the foundation as Co-Managing Director of Global Competition just months later, embodying the GSSF "Organizers as Leaders" pipeline at its most direct.
                    </p>
                    <p className="mb-4">
                      In her role, Yeseul co-leads the Global Competition pillar alongside Jade Bahng, focusing on the strategic expansion of the GSSC brand, the institutionalization of the Worlds stage, and maintaining a world-class standard across all regional qualifiers and global finals.
                    </p>
                    <p className="mb-4">
                      Her professional background spans product design and creative entrepreneurship. She has worked as a UI/UX Designer, a Product Planner, and has built an engaged audience around her original illustration work with @draw.ayun. She also completed the UC Berkeley Sutardja Center for Entrepreneurship and Technology's BMoE program, deepening her foundation in entrepreneurship and innovation.
                    </p>
                    <p>
                      Yeseul brings a builder's eye and a competitor's perspective to the GSSF mission — having experienced the program as a student, she now shapes it as a leader.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Yeseul Byun's path to GSSF leadership began on the GSSC stage itself — as a competitor. After advancing as a GSSC Finalist at the Asian Leadership Conference in Seoul in May 2025, she joined the foundation as Co-Managing Director of Global Competition just months later, embodying the GSSF \"Organizers as Leaders\" pipeline at its most direct.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('yeseul')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('yeseul') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Zoe Beach */}
            <motion.div {...fadeInUp} transition={{ delay: 0.7 }}>
              <img
                src={zoeBeachPhoto}
                alt="Zoe Beach"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Zoe Beach</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Managing Director, Ventures</p>
              <a
                href="https://www.linkedin.com/in/zoebeach/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('zoe') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Zoe Beach is the Managing Director of GSSF Ventures and a mentor for GSSC Worlds 2026 in Seoul — a role she steps into having competed on that same stage herself. As a GSSC Finalist, Zoe led a team of five to develop a digital platform for informal dementia caregivers, representing USC at the inaugural Global Student Startup Competition in Korea. She now returns to the GSSF ecosystem as both a leader and mentor.
                    </p>
                    <p className="mb-4">
                      GSSF Ventures was created to close a gap Zoe witnessed firsthand through GSSC: exceptional undergraduate talent exists everywhere, but access to venture networks does not. As Managing Director, she identifies high-potential student founding teams globally and connects them to leading venture capital firms and accelerators through the GSSF Selection Protocol.
                    </p>
                    <p>
                      Professionally, Zoe is an Associate Product Marketing Manager at Google working on AI Responsibility and Science. Her background spans product marketing, brand, and creative leadership across consumer tech and AI, with experience at Google, Partiful, The Browser Company, and Studio — a Google Ventures-backed AI startup. She also co-founded Supasilly, a college lifestyle brand that generated over $35K in revenue within its first two months. Her design thinking, entrepreneurial track record, and front-row seat to AI's evolution at Google make her uniquely positioned to identify and elevate the next generation of global student founders.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Zoe Beach is the Managing Director of GSSF Ventures and a mentor for GSSC Worlds 2026 in Seoul — a role she steps into having competed on that same stage herself. As a GSSC Finalist, Zoe led a team of five to develop a digital platform for informal dementia caregivers, representing USC at the inaugural Global Student Startup Competition in Korea.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('zoe')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('zoe') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Grace Li */}
            <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
              <img
                src={graceLiPhoto}
                alt="Grace Li"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Grace Li</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Director, University & Student Relations</p>
              <a
                href="https://www.linkedin.com/in/grace-z-li/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                <p>
                  {truncateText("Grace Li is a software engineer, researcher, and student leader who brings a rare combination of technical depth and institutional range to her role as GSSF's Director of University & Student Relations. A USC student operating at the intersection of computer science, applied AI, and community building, Grace is the connective tissue between GSSF and the universities and students it exists to serve.")}
                </p>
              </div>
            </motion.div>

            {/* Jongyeop Seon */}
            <motion.div {...fadeInUp} transition={{ delay: 0.9 }}>
              <img
                src={jongyeopSeonPhoto}
                alt="Jongyeop Seon"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Jongyeop (Colin) Seon</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Director, Korea Relations</p>
              <a
                href="https://www.linkedin.com/in/jongyeopseon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                <p>
                  {truncateText("Jongyeop Seon — known as Colin — manages the GSSF footprint in South Korea, serving as the primary liaison for the GSSC Worlds anchor event in Seoul. He oversees participating universities, Korean participant coordination, and local corporate and government engagement to support the annual summit at the Asian Leadership Conference (ALC).")}
                </p>
              </div>
            </motion.div>

            {/* Manuela Berrio */}
            <motion.div {...fadeInUp} transition={{ delay: 1.0 }}>
              <img
                src={manuelaBerrioPhoto}
                alt="Manuela Berrio"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Manuela Berrio</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Director, Programming & Mentor Relations</p>
              <a
                href="https://www.linkedin.com/in/manuelaberrio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                <p>
                  {truncateText("A builder at heart, Manuela brings a rare combination of computer science and business administration to her role at GSSF. A USC Viterbi student and Teaching Assistant for TAC499: Building Personal AI Agents, she operates at the cutting edge of applied AI — having spoken at the AI4 Artificial Intelligence Conference in Las Vegas and interned across AR/AI/Robotics, UX/UI design, and software development.")}
                </p>
              </div>
            </motion.div>

            {/* Selina Mejia */}
            <motion.div {...fadeInUp} transition={{ delay: 1.1 }}>
              <img
                src={selinaMejiaPhoto}
                alt="Selina Mejia"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Selina Mejia</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Director, Marketing & Social Media</p>
              <a
                href="https://www.linkedin.com/in/selinamejiaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                <p>
                  {truncateText("Selina Mejia is a first-generation college student and junior at the USC Annenberg School for Communication and Journalism, pursuing a degree in Public Relations & Advertising with a minor in Customer Analytics at the Marshall School of Business — building a foundation that sits squarely at the intersection of global brand strategy and data-driven insight.")}
                </p>
              </div>
            </motion.div>

            {/* Praew Kedpradit */}
            <motion.div {...fadeInUp} transition={{ delay: 1.2 }}>
              <img
                src={praewKedpraditPhoto}
                alt="Praew Kedpradit"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Praew Kedpradit</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Director, Creative & Brand Strategy</p>
              <a
                href="https://www.linkedin.com/in/praewkedpradit/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                <p>
                  {truncateText("Praew Kedpradit is a multidisciplinary creative who brings rare convergence of visual storytelling, strategic thinking, and cultural intelligence to her role as GSSF's Director of Creative & Brand Strategy. Raised in Bangkok and now based in Los Angeles, she operates across the full creative spectrum — from brand identity and art direction to consumer insight and campaign strategy.")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Leadership */}
      <section id="regional-leadership" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-sm uppercase tracking-widest text-white/60 mb-12">Regional Leadership</motion.h2>
          <motion.p {...fadeInUp} className="text-white/70 leading-relaxed max-w-4xl mb-16">
            Managing Directors manage established regions, focusing on growing the ecosystem and impact through global foundation programs. Regional Directors build the ecosystem, establish university relationships, and lay groundwork in emerging markets. All regions follow the regional scaling model developed by Miraya Agarwal for the India region in the 2025-26 cycle.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Miraya Agarwal */}
            <motion.div {...fadeInUp}>
              <img
                src={mirayaAgarwalPhoto}
                alt="Miraya Agarwal"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Miraya Agarwal</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Managing Director, India</p>
              <a
                href="https://www.linkedin.com/in/mirayaagarwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('miraya') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Miraya Agarwal is the architect of GSSF's first Mega-Region. As Managing Director, India, she is responsible for scaling the foundation's full suite of programs across one of the world's most dynamic student ecosystems — building toward a fully self-sustaining regional model that serves as the operational blueprint for every GSSF region that follows.
                    </p>
                    <p className="mb-4">
                      Under Miraya's leadership, the India region became the first GSSF region to achieve self-funded status, pioneering the regional scaling model that is now replicated across Ukraine, Colombia, Singapore, and beyond. She oversees participating universities, regional managing directors, and the full activation pipeline from campus-level competitions to GSSC Worlds qualification.
                    </p>
                    <p className="mb-4">
                      Miraya's background reflects both creative leadership and entrepreneurial drive. Before university, she hosted over 100 episodes of a weekly radio show broadcast across 30 cities and 7 states in India on 94.3 MY FM, where she was named the station's Youngest RJ of the Year. She later co-founded Get It Growing, a social enterprise that produces manure sticks for home plants while creating additional income opportunities for female farmers in India, gaining firsthand experience in building and scaling a purpose-driven venture.
                    </p>
                    <p className="mb-4">
                      At USC, she has been deeply involved on campus, serving as President of the Digital Media Association, where she led organizational growth and expanded professional programming and industry connections for students. Alongside her leadership roles, she has pursued internships across media and strategy, further grounding her work in real-world execution.
                    </p>
                    <p>
                      Miraya brings to GSSF the lived experience of building from India, for India, with a global standard in mind.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Miraya Agarwal is the architect of GSSF's first Mega-Region. As Managing Director, India, she is responsible for scaling the foundation's full suite of programs across one of the world's most dynamic student ecosystems — building toward a fully self-sustaining regional model that serves as the operational blueprint for every GSSF region that follows.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('miraya')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('miraya') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase">
            Advisors
          </motion.h2>
          <motion.p {...fadeInUp} className="text-white/70 leading-relaxed max-w-4xl mb-16">
            GSSF's advisors are not names on a page. Each has generously committed to meeting directly with GSSF leadership — bringing their expertise, networks, and judgment to bear in real, one-on-one guidance sessions. Their involvement reflects a shared belief in expanding access to global opportunities for talented students worldwide.
          </motion.p>

          <motion.h2 {...fadeInUp} id="global-advisors" className="text-sm uppercase tracking-widest text-white/60 mb-12">
            Global Advisors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Gigi Wang */}
            <motion.div {...fadeInUp}>
              <img
                src={gigiWangPhoto}
                alt="Gigi Wang"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Gigi Wang</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Co-Founder, Chair Emeritus & Global Fellow</p>
              <a
                href="https://www.linkedin.com/in/gigiwang/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('gigi') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Gigi Wang is a co-founder of the Global Student Startup Competition (GSSC) and a trailblazing leader at the intersection of entrepreneurship, innovation, and global business transformation. A Stanford-trained engineer with an MBA from UC Berkeley Haas, Gigi's career spans venture co-founding, market launches, and ecosystem building across continents.
                    </p>
                    <p className="mb-4">
                      She co-founded TrustE, the renowned data privacy initiative, and launched Pacific Internet as Southeast Asia's first major ISP — taking it public on NASDAQ. As an Industry Fellow & Faculty at UC Berkeley's Sutardja Center for Entrepreneurship & Technology, she chairs the Berkeley Method of Entrepreneurship Bootcamp, a globally recognized program that transforms students into entrepreneurs around the world.
                    </p>
                    <p>
                      Through her consulting firm MG-Team, Gigi advises governments, corporations, and accelerators worldwide on innovation and growth in the age of disruption. A sought-after speaker, mentor, and connector of worlds — bridging Silicon Valley with Europe, Asia, and MENA — she brings to GSSF a rare combination of technical rigor, global strategic vision, and a lifelong commitment to unlocking the next generation of founders.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Gigi Wang is a co-founder of the Global Student Startup Competition (GSSC) and a trailblazing leader at the intersection of entrepreneurship, innovation, and global business transformation. A Stanford-trained engineer with an MBA from UC Berkeley Haas, Gigi's career spans venture co-founding, market launches, and ecosystem building across continents.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('gigi')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('gigi') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Cheryl Edison */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <img
                src={cherylEdisonPhoto}
                alt="Cheryl Edison"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Cheryl Edison</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">GLOBAL FELLOW</p>
              <a
                href="https://www.linkedin.com/in/cheryledison/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('cheryl') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Cheryl Edison is a Silicon Valley-based business growth strategist, global advisor, and CEO of Edison International, LLC — recognized by CNN and USA Today as a leading voice in innovation and market entry. Having worked across 76 countries and 65 industries, Cheryl is one of the most globally experienced entrepreneurship advisors in the world.
                    </p>
                    <p className="mb-4">
                      A trusted Strategic Consultant to the US State Department and advisor to the United Nations, Cheryl specializes in helping international startups and scaleups break into the US market and scale with precision. Her work spans embassy trade missions to Silicon Valley, curriculum development for universities, and strategic advisory to incubators, accelerators, venture studios, and major institutional partners worldwide.
                    </p>
                    <p>
                      As a GSSF Global Fellow, Cheryl brings her unparalleled global network and decades of ecosystem-building expertise to the next generation of undergraduate founders — helping them develop the strategic clarity, investor readiness, and market instincts needed to compete on the world stage.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Cheryl Edison is a Silicon Valley-based business growth strategist, global advisor, and CEO of Edison International, LLC — recognized by CNN and USA Today as a leading voice in innovation and market entry. Having worked across 76 countries and 65 industries, Cheryl is one of the most globally experienced entrepreneurship advisors in the world.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('cheryl')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('cheryl') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Andres Barreto */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <img
                src={andresBarretoPhoto}
                alt="Andres Barreto"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Andres Barreto</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">
                Global Advisor & Regional Advisor, Columbia
              </p>
              <a
                href="https://www.linkedin.com/in/andreshb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('andres') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Andres Barreto is a Managing Director at Techstars and a serial entrepreneur who brings a rare founder-first perspective to early-stage investing. He has funded over 100 pre-seed startups through Techstars and invested in more than 85 companies through Socialatom Group — making him one of the most active early-stage investors in the Americas.
                    </p>
                    <p className="mb-4">
                      A builder before he was an investor, Andres co-founded Grooveshark, PulsoSocial, Socialatom Group, and Onswipe — the latter a Techstars 2011 alumni company — giving him firsthand insight into the challenges founders face at every stage of growth. He specializes in accelerating the path to product-market fit, streamlining fundraising, and recruiting top-tier engineering talent once funding is secured.
                    </p>
                    <p className="mb-4">
                      A passionate champion of innovation in Latin America and emerging markets, Andres has collaborated with governments, accelerators, and investors to build startup ecosystems across the region. He also co-founded coderise.org, a nonprofit dedicated to Computer Science education, reflecting his commitment to expanding access to the tools of the innovation economy.
                    </p>
                    <p>
                      As a GSSF Global Advisor, Andres brings his deep operational experience and global investor network to bear on the next generation of undergraduate founders — helping them build with the clarity and conviction that investors demand.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Andres Barreto is a Managing Director at Techstars and a serial entrepreneur who brings a rare founder-first perspective to early-stage investing. He has funded over 100 pre-seed startups through Techstars and invested in more than 85 companies through Socialatom Group — making him one of the most active early-stage investors in the Americas.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('andres')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('andres') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Nitin Kale */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <img
                src={nitinKalePhoto}
                alt="Nitin Kale"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Nitin Kale</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Global Advisor & Regional Advisor, India</p>
              <a
                href="https://www.linkedin.com/in/nitin-kale-06767325/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('nitin') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Nitin Kale is a Professor at the USC Viterbi School of Engineering — one of the world's premier engineering institutions — where he focuses on Artificial Intelligence and Applied Computing and has spent nearly three decades at the frontier of emerging technology. A builder of programs, not just curricula, Nitin has shaped how the next generation of engineers and innovators think about and apply the technologies transforming the global economy.
                    </p>
                    <p className="mb-4">
                      His work sits at the cutting edge: Applied Artificial Intelligence, Blockchain, Data Analytics, and Enterprise Systems — disciplines he doesn't just teach, but actively advances through speaking and publishing. A published author and globally sought-after speaker, Nitin travels the world to engage academic and industry audiences on the technologies redefining what's possible.
                    </p>
                    <p>
                      At GSSF, Nitin brings the rare combination of deep technical mastery and the ability to make complex ideas accessible, actionable, and inspiring — meeting student founders exactly where they are and pushing them further than they thought they could go.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Nitin Kale is a Professor at the USC Viterbi School of Engineering — one of the world's premier engineering institutions — where he focuses on Artificial Intelligence and Applied Computing and has spent nearly three decades at the frontier of emerging technology. A builder of programs, not just curricula, Nitin has shaped how the next generation of engineers and innovators think about and apply the technologies transforming the global economy.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('nitin')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('nitin') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Eugene Choi */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <img
                src={eugeneChoiPhoto}
                alt="Eugene Choi"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Eugene Choi</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Global Advisor & Regional Advisor, South Korea</p>
              <a
                href="https://www.linkedin.com/in/eugenechoi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('eugene') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Eugene Choi is a Global Advisor and Regional Advisor for South Korea at the Global Student Startup Foundation (GSSF) — bringing to the network a career built at the intersection of digital media, the creator economy, and cross-Pacific business, with deep roots in the Korean market that make him a natural anchor for GSSF's most important regional stage.
                    </p>
                    <p className="mb-4">
                      Eugene is the Co-Founder and CEO of Collab Asia, Inc., a venture-backed digital media company and influencer network with offices in Seoul, Tokyo, Jakarta, Hong Kong, Manila, and Singapore. Spun off from Los Angeles-based Collab Inc. in 2017, Collab Asia operates as a YouTube-certified Multi-Channel Network managing hundreds of channels across gaming, beauty, lifestyle, music, and entertainment — generating over 250 million monthly YouTube views. Before leading the spinoff, Eugene spent three years at Collab Inc. growing its MCN footprint in Korea and Japan from 40 to over 400 channel partners, helping shape the early creator economy in both markets.
                    </p>
                    <p className="mb-4">
                      Earlier in his career, Eugene served as Executive Producer at Electus, co-creating the reality series K-Town and Roll Models for YouTube's Original Channels initiative — with K-Town earning a Streamy Award nomination for Best Non-Fiction Series. He also executive-produced Aka Dan, a documentary series co-produced with Arirang TV and distributed on Hulu and DramaFever. Prior to that, he worked as a Senior Analyst in the Strategy and Planning group at CJ America, supporting the US launches of Bibigo, CGV, and Mnet, and consulted for Fuji Television on international format licensing and distribution — an engagement that began as his MBA Capstone Project at USC Marshall and continued after graduation.
                    </p>
                    <p className="mb-4">
                      Eugene began his career at Carat USA on the Hyundai and Kia accounts, and later joined entertainment marketing agency EMP, playing a key role in its acquisition by Ketchum, an Omnicom company.
                    </p>
                    <p>
                      Eugene holds an MBA in International Business from the USC Marshall School of Business and a BA in Mass Communications from UC Berkeley.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Eugene Choi is a Global Advisor and Regional Advisor for South Korea at the Global Student Startup Foundation (GSSF) — bringing to the network a career built at the intersection of digital media, the creator economy, and cross-Pacific business, with deep roots in the Korean market that make him a natural anchor for GSSF's most important regional stage.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('eugene')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('eugene') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Program & Regional Advisors */}
          <motion.h2 {...fadeInUp} id="program-regional-advisors" className="text-sm uppercase tracking-widest text-white/60 mb-12 mt-24">
            Program & Regional Advisors
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Felix Litvinsky */}
            <motion.div {...fadeInUp}>
              <img
                src={felixLitvinskyPhoto}
                alt="Felix Litvinsky"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Felix Litvinsky</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Regional Advisor, Ukraine</p>
              <a
                href="https://www.linkedin.com/in/felixlitvinsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('felix') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Felix Litvinsky is a seasoned international technology entrepreneur, ecosystem builder, and one of the most deeply connected startup advisors bridging the United States and Ukraine. As Managing Director of LaunchPad Ezra (formerly Blackstone) at Cornell University, Felix leads an experiential entrepreneurship program that delivers hands-on coaching, ideation, and venture creation support to students, alumni, staff, and faculty — making him a natural fit for GSSF's mission of building the next generation of global founders through in-person, practitioner-led programming.
                    </p>
                    <p className="mb-4">
                      Felix serves as an Entrepreneur in Residence at NYSERDA, where he works with early-stage companies on strategy, business models, investment preparation, and growth. He is a Mentor at Techstars, a US Coordinator, Lecturer, and Advisor at eō Business Incubators — Ukraine's premier seed-stage mentor-driven incubator — and an Expert and Member of the Competition Commission at the Ukrainian Startup Fund, a country-wide investment program funding Ukraine's most promising tech startups.
                    </p>
                    <p className="mb-4">
                      Earlier in his career, Felix co-founded and served as CEO of Alarity Corporation, a multimedia IP company he built into a trusted strategic partner for Tier 1 OEM and ODM customers globally — ultimately acquired by ARC International (LSE: ARK.L), now part of Synopsys. He subsequently joined ARC as VP of Worldwide Business Development, where he directed strategic relationships with semiconductor, consumer electronics, and OEM companies worldwide. Felix also co-founded Minority Venture Partners (MVP), a New York-based business accelerator dedicated to expanding minority and women entrepreneurs' participation in emerging technology sectors.
                    </p>
                    <p>
                      A sought-after speaker at international industry events and an active member of angel investor communities, Felix brings to GSSF a rare combination of deep operator experience, cross-continental ecosystem relationships, and a long-standing commitment to unlocking entrepreneurial talent in Ukraine and beyond.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Felix Litvinsky is a seasoned international technology entrepreneur, ecosystem builder, and one of the most deeply connected startup advisors bridging the United States and Ukraine. As Managing Director of LaunchPad Ezra (formerly Blackstone) at Cornell University, Felix leads an experiential entrepreneurship program that delivers hands-on coaching, ideation, and venture creation support to students, alumni, staff, and faculty.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('felix')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('felix') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Apurva Ganoo */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <img
                src={apurvaGanooPhoto}
                alt="Apurva Ganoo"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Apurva Ganoo</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Regional Advisor, Finland</p>
              <a
                href="https://www.linkedin.com/in/apurvaganoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('apurva') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Apurva Ganoo is a Permanent Lecturer in Entrepreneurship at Aalto University School of Business — one of Europe's leading innovation universities — where his research and teaching sit at the intersection of early-stage entrepreneurship, ecosystem theory, and the institutions that shape how founders learn and grow. As a tenured faculty member in the Entrepreneurship Unit of the Department of Management Studies, Apurva teaches across the full arc of the entrepreneurial journey: from problem identification and user understanding to business models, value propositions, and market entry strategy. He employs experiential, practice-based methods in his teaching and has mentored numerous project teams through the uncertainty of early-stage venture creation.
                    </p>
                    <p className="mb-4">
                      His influence extends well beyond the Aalto campus. He has guest lectured at Columbia University, Stellenbosch University, and IIT Guwahati, and facilitated sessions for Finnish multinational organizations — bringing the rigor of academic inquiry directly into the rooms where practitioners operate. An active ecosystem builder, Apurva has played a central role in securing over €3M in EU-funded capacity-building initiatives, including as Project Coordinator for the €1.34M EIT-HEI CODEUNITED project and a TFK-funded collaboration between Aalto and the Indian Institute of Management Bangalore — both reflecting a sustained commitment to building entrepreneurship infrastructure across borders.
                    </p>
                    <p className="mb-4">
                      His research critically examines entrepreneurial education and its relationship to the broader ecosystem, with a particular focus on Finland and the Nordic region — ground zero for some of the world's most studied innovation cultures. In 2024, he was recognized by the Finnish Businessmen's Association (Suomen Liikemies-Yhdistys) for his contributions to advancing entrepreneurship at Aalto and beyond.
                    </p>
                    <p>
                      As GSSF's Regional Advisor for Finland, Apurva brings deep roots in one of the world's most respected entrepreneurship education ecosystems — and the institutional relationships, research credibility, and practitioner mindset to help Finland's most promising undergraduate founders find their path to the global stage.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Apurva Ganoo is a Permanent Lecturer in Entrepreneurship at Aalto University School of Business — one of Europe's leading innovation universities — where his research and teaching sit at the intersection of early-stage entrepreneurship, ecosystem theory, and the institutions that shape how founders learn and grow.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('apurva')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('apurva') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Danielle Vivo */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <img
                src={danielleVivoPhoto}
                alt="Danielle Vivo"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Danielle Vivo</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Academy Advisor</p>
              <a
                href="https://www.linkedin.com/in/daniellevivo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('danielle') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Danielle Vivo is a global innovation leader working at the intersection of entrepreneurship, education, and cultural transformation — and one of the most credentialed ecosystem builders in the GSSF network.
                    </p>
                    <p className="mb-4">
                      As Director of Programs at Alchemist Accelerator, Danielle leads high-impact initiatives across four continents, collaborating with partners including AWS, the University of Chicago, the Qatar Foundation, and the Japan Trade Organization. Her career spans Big Tech, academia, and venture capital: she has held roles at Uber, UC Berkeley's Sutardja Center for Entrepreneurship and Technology (SCET), Bridge Funding Global, and the European Innovation Academy — where she also serves as a Life & Leadership Coach. Having worked across Silicon Valley, Europe, Asia, and the Middle East, she brings a rare cross-sector, cross-cultural lens to the design of inclusive innovation programs.
                    </p>
                    <p className="mb-4">
                      Born in Brazil and a first-generation college graduate, Danielle approaches her work with a deeply human and systems-driven mindset. She designs programs not just to drive innovation, but to expand who gets to participate in it — a philosophy that aligns directly with the GSSF Academy's mission of parity, access, and in-person global experience.
                    </p>
                    <p>
                      As an Advisor to the GSSF Academy, Danielle brings the operational expertise and global relationships to help shape the Academy into a world-class innovation residency for the next generation of undergraduate founders.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Danielle Vivo is a global innovation leader working at the intersection of entrepreneurship, education, and cultural transformation — and one of the most credentialed ecosystem builders in the GSSF network. As Director of Programs at Alchemist Accelerator, Danielle leads high-impact initiatives across four continents, collaborating with partners including AWS, the University of Chicago, the Qatar Foundation, and the Japan Trade Organization.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('danielle')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('danielle') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Ricardo Marvão */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <img
                src={ricardoMarvaoPhoto}
                alt="Ricardo Marvão"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Ricardo Marvão</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Academy Advisor & Regional Advisor, Europe</p>
              <a
                href="https://www.linkedin.com/in/ricardomarvao/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('ricardo') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Ricardo Marvão is one of Europe's most prolific entrepreneurship ecosystem builders and an Advisor to the GSSF Academy.
                    </p>
                    <p className="mb-4">
                      He is the Co-Founder and Partner of Beta-i — born in Lisbon in 2010 and recognized by Wired Magazine as Portugal's top player in the startup ecosystem. Beta-i is a global collaborative innovation consultancy that has helped organizations like Novartis, Unilever, Airbus, Santander, and Carrefour design and scale innovation programs from strategy to pilot.
                    </p>
                    <p className="mb-4">
                      Ricardo's commitment to entrepreneurship education runs deep. He co-founded the European Innovation Academy Portugal — a program that challenges university students to build a startup in three weeks, directly parallel to the GSSF Academy model. He also co-founded Singularity University Portugal, Próxima Geração, and Space for Business, among others. He is a frequent keynote speaker, a former Forbes Portugal columnist, and a jury member for the European Innovation Council of the European Commission. He is also a founding member of Allied for Startups and the European Startup Network.
                    </p>
                    <p className="mb-4">
                      As an investor, Ricardo deployed a 21M€ pre-seed fund across 60+ startups over seven years. Prior to Beta-i, he co-founded Evolve Space Solutions — a space tech startup with clients including ESA, Airbus, Boeing, and Embraer — which he sold in 2011.
                    </p>
                    <p>
                      Ricardo brings to the GSSF Academy a uniquely European perspective, a proven model for student venture-building at scale, and the institutional relationships to help anchor the Academy's home in Europe.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Ricardo Marvão is one of Europe's most prolific entrepreneurship ecosystem builders and an Advisor to the GSSF Academy. He is the Co-Founder and Partner of Beta-i — born in Lisbon in 2010 and recognized by Wired Magazine as Portugal's top player in the startup ecosystem.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('ricardo')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('ricardo') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Gabriela Martinez Altamirano */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <img
                src={gabrielaMartinezPhoto}
                alt="Gabriela Martinez Altamirano"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Gabriela Martinez Altamirano</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Regional Advisor, Mexico</p>
              <a
                href="https://www.linkedin.com/in/gabrielamtzaltamirano/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('gabriela') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>
                      A former member of the Mexican National Soccer Team, Gabriela brings the discipline, competitive drive, and team-first mentality of an elite athlete to everything she builds. A two-time alumna of the European Innovation Academy — first as a student founder developing a healthcare startup, then returning as a keynote speaker and mentor — she embodies the GSSF belief that the most powerful leaders are those who come back to lift others. Her professional career spans founding GAMA Business Solutions, leading marketplace growth and partner development at a Series-funded proptech company, and managing B2B marketing and events at scale. What distinguishes Gabriela is her lived fluency in cross-cultural collaboration: she has worked, studied, and competed across Mexico, the United States, Portugal, and Europe, giving her a rare instinct for the human dynamics that make global teams succeed. As GSSF's Regional Advisor for Mexico, she guides the exploration of Mexico as the foundation's next major region — drawing on her deep roots and cultural fluency to navigate the local university landscape, build early ecosystem relationships, and lay the groundwork for Mexican student founders to access the global stage.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("A former member of the Mexican National Soccer Team, Gabriela brings the discipline, competitive drive, and team-first mentality of an elite athlete to everything she builds. A two-time alumna of the European Innovation Academy — first as a student founder developing a healthcare startup, then returning as a keynote speaker and mentor — she embodies the GSSF belief that the most powerful leaders are those who come back to lift others.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('gabriela')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('gabriela') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Maxime Chaury */}
            <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
              <img
                src={maximeChauryPhoto}
                alt="Maxime Chaury"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Maxime Chaury</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Regional Advisor, Singapore</p>
              <a
                href="https://www.linkedin.com/in/maximechaury/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('maxime') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>
                      Maxime Chaury is a serial entrepreneur, operator, and startup ecosystem builder whose career spans four continents and some of the most dynamic emerging markets in the world. Currently serving as General Manager of Southeast Asia at Taptap Send — a cross-border fintech on a mission to reduce the cost of sending money home for immigrants across emerging markets — Maxime owns the full P&L and growth strategy for the region. A Forbes 30 Under 30 honoree, his operator track record is rare in its breadth: as Co-Founder of Upworth, he built a money management platform from zero; as Managing Director of Flash Coffee Indonesia, he grew the business from 14 stores to 90+, scaled monthly sales by 30x, and returned the country to profitability; and as Managing Director of Malaysia for Rocket Internet's Zen Rooms, he built a 30-person team and expanded the partner base from 20 to over 100 accounts — earning a seat on the company's Executive Board. Before becoming an operator, Maxime honed his strategic instincts at Roland Berger and Strategy& (PwC) across North and West Africa, and in private equity at Adenia Partners in Côte d'Ivoire. He holds degrees from Sciences Po Paris, ESSEC, The University of Chicago, Seoul National University, and Saint-Cyr Coëtquidan — France's foremost officer school. As GSSF's Regional Advisor for Singapore, Maxime brings deep Southeast Asian operator experience and a founder's instinct to the GSSF network — and plays a central role in ensuring that Singapore's most promising undergraduate entrepreneurs have a path to the global stage.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Maxime Chaury is a serial entrepreneur, operator, and startup ecosystem builder whose career spans four continents and some of the most dynamic emerging markets in the world. Currently serving as General Manager of Southeast Asia at Taptap Send — a cross-border fintech on a mission to reduce the cost of sending money home for immigrants across emerging markets.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('maxime')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('maxime') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>

            {/* Dolapo Sunmola */}
            <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
              <img
                src={dolapoSunmolaPhoto}
                alt="Dolapo Sunmola"
                className="w-48 h-48 object-cover rounded-lg mb-6 grayscale"
              />
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Dolapo Sunmola</h3>
              <p className="text-sm uppercase tracking-wider text-white mb-4 font-bold">Regional Advisor, Nigeria</p>
              <a
                href="https://www.linkedin.com/in/dolaposunmola/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#242EC0] transition-colors mb-4"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="text-white/70 leading-relaxed">
                {expandedBios.has('dolapo') ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4">
                      Dolapo Sunmola is a seasoned operator, strategist, and ecosystem builder whose 15-year career spans continents, sectors, and some of the most complex challenges at the intersection of business and human development. Based in the United States and working across global markets, Dolapo brings to GSSF a rare combination of corporate operational rigor and a deep, long-standing commitment to unlocking economic opportunity across Africa.
                    </p>
                    <p className="mb-4">
                      As the Founding Partner of Optimize Africa Dev, Dolapo leads a consulting and advisory firm purpose-built to drive sustainable, inclusive growth across the African continent. The firm works with governments, private companies, NGOs, international development agencies, and multilateral investors — delivering supply chain transformation, socioeconomic advisory, market entry strategy, and digital transformation solutions that bridge the gap between capital, policy, and on-the-ground execution. It is precisely the kind of institution-building work that GSSF's mission was designed to complement: identifying where talent exists, and creating the infrastructure for it to reach the world.
                    </p>
                    <p className="mb-4">
                      His operational background is equally global. At CEVA Logistics, one of the world's largest supply chain management companies, Dolapo led supply chain operations across complex international logistics environments. Earlier, as a Business Strategist at Media Gear Interactive in London, he spent nearly six years developing the strategic instincts that now define his cross-sector advisory practice. He currently serves as a Strategic Advisor at JDF Solution LLC and as an Advisory Council Member at the YMCA of Pierce and Kitsap Counties — where he provides governance oversight, evaluates community needs, and mentors emerging leaders.
                    </p>
                    <p>
                      As GSSF's Regional Advisor for Nigeria, Dolapo brings his continental relationships, development expertise, and operator credibility to bear on one of Africa's most dynamic student ecosystems — helping to build the pathways that connect Nigeria's next generation of founders to the global stage.
                    </p>
                  </motion.div>
                ) : (
                  <p>
                    {truncateText("Dolapo Sunmola is a seasoned operator, strategist, and ecosystem builder whose 15-year career spans continents, sectors, and some of the most complex challenges at the intersection of business and human development. Based in the United States and working across global markets, Dolapo brings to GSSF a rare combination of corporate operational rigor and a deep, long-standing commitment to unlocking economic opportunity across Africa.")}
                  </p>
                )}
                <button
                  onClick={() => toggleBio('dolapo')}
                  className="text-[#242EC0] hover:text-[#242EC0]/80 font-semibold mt-3 transition-colors"
                >
                  {expandedBios.has('dolapo') ? 'Read less' : 'Read more'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
