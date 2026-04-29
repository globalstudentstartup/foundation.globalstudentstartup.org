import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoBlack from "figma:asset/79566f8df6b5c3761b519dc9d46ef31e438a7a0b.png";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { 
      path: "/#programs", 
      label: "Programs",
      title: "Explore Our Programs",
      description: "From campus competitions to global stages and executive advisory programs.",
      subItems: [
        { path: "/gssc", label: "Competition", description: "Global Student Startup Competition" },
        { path: "/ai-cup", label: "AI Cup", description: "Global AI prototype competition" },
        { path: "/ai-labs", label: "AI Labs", description: "Applied AI Product Internships" }
      ]
    },
    {
      path: "/leadership",
      label: "Leadership",
      title: "Meet the People Behind GSSF",
      description: "The global team activating the next generation of undergraduate innovators."
    },
    { 
      path: "/network", 
      label: "Network",
      title: "Global Friends & Family Network",
      description: "Participating universities, mentors, and advisors from the world's most influential institutions."
    },
    { 
      path: "/partners", 
      label: "Partners",
      title: "Global Partners & Sponsors",
      description: "Actively growing global partners and sponsors to grow the student impact."
    },
    { 
      path: "/foundation", 
      label: "Non-Profit",
      title: "Non-Profit Governance",
      description: "Policies, structure, and accountability for a global nonprofit institution."
    },
    { 
      path: "/contact", 
      label: "Contact",
      title: "Get in Touch",
      description: "Connect with us via email or social media."
    },
    { 
      path: "/support", 
      label: "Support",
      title: "Support GSSC",
      description: "Put the world's next generation of founders on the global stage."
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white border-b border-black/8 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <motion.img 
              src={logoBlack} 
              alt="GSSF" 
              className="h-20 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>

          {/* Menu button for all screens */}
          <motion.button
            className="text-gray-700 hover:text-[#242EC0] transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium uppercase text-sm tracking-wide">Menu</span>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              style={{ maxHeight: 'calc(100vh - 5rem)' }}
            >
              <div className="pb-6 pt-2 space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 7rem)' }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block p-5 rounded-lg transition-all ${ 
                        isActive(item.path)
                          ? "bg-[#242EC0] text-white"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="uppercase text-sm tracking-wide font-bold">
                          {item.label}
                        </span>
                        {item.title && (
                          <span className={`text-sm font-semibold ${
                            isActive(item.path) ? "text-white/90" : "text-gray-900"
                          }`}>
                            {item.title}
                          </span>
                        )}
                        {item.description && (
                          <span className={`text-sm ${
                            isActive(item.path) ? "text-white/70" : "text-gray-600"
                          }`}>
                            {item.description}
                          </span>
                        )}
                      </div>
                    </Link>
                    
                    {/* Sub-items for Programs */}
                    {item.subItems && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.05) + (subIndex * 0.03) }}
                          >
                            <Link
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className={`block p-3 rounded-lg transition-all border-l-2 ${
                                location.pathname === subItem.path
                                  ? "bg-[#242EC0] text-white border-white"
                                  : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-[#242EC0]"
                              }`}
                            >
                              <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-bold">
                                  {subItem.label}
                                </span>
                                {subItem.description && (
                                  <span className={`text-xs ${
                                    location.pathname === subItem.path ? "text-white/70" : "text-gray-500"
                                  }`}>
                                    {subItem.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}