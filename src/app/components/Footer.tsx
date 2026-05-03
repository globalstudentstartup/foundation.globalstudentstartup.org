import { Link, useLocation } from "react-router";
import { Linkedin, Instagram } from "lucide-react";
import logoBlack from "figma:asset/79566f8df6b5c3761b519dc9d46ef31e438a7a0b.png";

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-white border-t border-black/8 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link 
              to="/"
              onClick={() => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="inline-block"
            >
              <img src={logoBlack} alt="GSSF" className="h-28 w-auto mx-[0px] mt-[0px] mb-[24px] cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-gray-600 max-w-md leading-relaxed mb-4">
              Talent is global. Opportunity is not.
            </p>
            <p className="text-gray-500 text-sm">
              GSSF is a 501(c)(3) non-profit organization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/gssc" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  GSSC
                </Link>
              </li>
              <li>
                <Link to="/ai-cup" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  AI Cup
                </Link>
              </li>
              <li>
                <Link to="/ai-labs" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  AI Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#programs" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/leadership#global-leadership" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/leadership#global-advisors" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Advisors
                </Link>
              </li>
              <li>
                <Link to="/network#universities" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Universities
                </Link>
              </li>
              <li>
                <Link to="/network#mentors" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Mentors
                </Link>
              </li>
              <li>
                <Link to="/foundation" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Non-Profit
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/8 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-gray-500 text-sm hover:text-[#242EC0] transition-colors">
            &copy; 2026 GSSF. All rights reserved.
          </Link>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/company/globalstudentstartup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#242EC0] transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://instagram.com/globalstudentstartup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#242EC0] transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-500">
            <Link to="/conflict-of-interest" className="hover:text-[#242EC0] transition-colors">
              Conflict of Interest Policy
            </Link>
            <Link to="/use-of-funds" className="hover:text-[#242EC0] transition-colors">
              Use of Funds Policy
            </Link>
            <Link to="/privacy-policy" className="hover:text-[#242EC0] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Designer Credit */}
        <div className="mt-8 pt-6 border-t border-black/8 text-center">
          <p className="text-gray-500 text-sm">Designed by <a href="https://www.linkedin.com/in/jacquelinejiminlee/" target="_blank" rel="noopener noreferrer" className="hover:text-[#242EC0] transition-colors">Jacqueline Lee</a></p>
        </div>
      </div>
    </footer>
  );
}