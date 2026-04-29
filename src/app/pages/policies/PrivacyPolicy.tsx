import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
        <Link to="/foundation" className="inline-flex items-center gap-2 text-[#242EC0] hover:underline mb-8">
          <ArrowLeft size={20} />
          Back to Non-Profit
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Updated: March 5, 2026
          </p>
          <p className="text-sm text-gray-500 mb-12">
            Applies to: globalstudentstartup.org · foundation.globalstudentstartup.org · All GSSF Program Websites
          </p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              The Global Student Startup Foundation ("GSSF," "Foundation," "we," "us," or "our") is a 501(c)(3) nonprofit organization incorporated in California (EIN: 41-3141550). We are committed to protecting the privacy of all individuals who interact with our websites, programs, and services. This Privacy Policy explains what information we collect, how we use it, and your rights with respect to that information.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              This Policy applies to all websites and digital properties operated by GSSF, including but not limited to globalstudentstartup.org and foundation.globalstudentstartup.org, as well as any program-specific websites affiliated with the Global Student Startup Competition (GSSC), Global AI Cup, and GSSF Advisory.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">1. Information We Collect</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-3">1.1 Information You Provide Directly</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information you voluntarily submit when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Register for a GSSF program, competition, or event (e.g., GSSC Worlds, Global AI Cup)</li>
              <li>Apply as a student participant, organizer, mentor, advisor, or fellow</li>
              <li>Submit an application, proposal, or project for evaluation</li>
              <li>Contact us by email, form submission, or social media</li>
              <li>Subscribe to newsletters or communications</li>
              <li>Make a donation to the Foundation</li>
              <li>Partner with GSSF as a university, sponsor, or institutional partner</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mt-4 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Full name, email address, phone number, and mailing address</li>
              <li>University enrollment status, degree program, graduation year, and student ID</li>
              <li>Country of residence and nationality</li>
              <li>Resume, portfolio, or project submission materials</li>
              <li>Biographical and professional information for mentors, advisors, and fellows</li>
              <li>Payment and donation information (processed securely via third-party providers; we do not store full payment card data)</li>
              <li>Communications you send to us</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3">1.2 Information Collected Automatically</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our websites, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address and approximate geolocation</li>
              <li>Browser type, version, and device information</li>
              <li>Pages visited, time spent on pages, and referring URLs</li>
              <li>Cookie identifiers and similar tracking technologies</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-3">1.3 Information from Third Parties</h3>
            <p className="text-gray-700 leading-relaxed">
              We may receive information about you from participating universities, program co-organizers, or affiliated institutions who refer participants to GSSF programs. We handle such information in accordance with this Policy.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Program Administration</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Processing applications and registrations for GSSF programs and competitions</li>
              <li>Communicating with participants, organizers, mentors, and partners</li>
              <li>Coordinating travel, lodging, and logistics for funded program participants</li>
              <li>Evaluating and selecting teams and individuals through the GSSF Selection Protocol</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Mission & Impact Reporting</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Measuring and reporting on programmatic impact consistent with our 501(c)(3) mission</li>
              <li>Preparing annual reports, donor communications, and regulatory filings (including Form 990-PF)</li>
              <li>Publishing aggregated, non-identifiable statistics about program reach and outcomes</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Communications & Outreach</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Sending program updates, newsletters, and announcements (with your consent where required)</li>
              <li>Responding to inquiries and support requests</li>
              <li>Notifying you of program results, awards, and scholarship decisions</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Website Operations</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Improving website functionality, performance, and user experience</li>
              <li>Detecting and preventing fraud, security incidents, or policy violations</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">3. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GSSF does not sell, rent, or trade personal information. We may share information in the following limited circumstances:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Program Partners & Co-Organizers</h3>
            <p className="text-gray-700 leading-relaxed">
              Universities, regional organizers, and event hosts who need your information to coordinate program logistics and participation.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Mentors & Advisors</h3>
            <p className="text-gray-700 leading-relaxed">
              When you are matched with a mentor or advisor, relevant professional information may be shared to facilitate that relationship.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Service Providers</h3>
            <p className="text-gray-700 leading-relaxed">
              Trusted third-party vendors who assist with website hosting, payment processing, email delivery, and event management, under confidentiality obligations.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Event Venues & Sponsors</h3>
            <p className="text-gray-700 leading-relaxed">
              Information necessary for on-site participation at events such as GSSC Worlds at the Asian Leadership Conference in Seoul.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Legal Compliance</h3>
            <p className="text-gray-700 leading-relaxed">
              When required by law, regulation, or valid legal process, or to protect the rights and safety of the Foundation, its participants, or the public.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Successors</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In connection with a merger, acquisition, or reorganization of the Foundation, with equivalent privacy protections.
            </p>

            <p className="text-gray-700 leading-relaxed italic">
              All third-party sharing is conducted in accordance with the GSSF Value Standard and the 85/15 Rule — ensuring that data sharing serves our charitable mission, never commercial interests.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our websites may use cookies and similar technologies to improve your experience. These may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Essential cookies required for website functionality</li>
              <li>Analytics cookies to understand how visitors use our sites (e.g., Google Analytics)</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may disable cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain personal information for as long as necessary to fulfill the purposes for which it was collected, to administer our programs, to comply with legal obligations (including IRS recordkeeping requirements applicable to 501(c)(3) organizations), and to resolve disputes. Program participation records may be retained indefinitely as part of our institutional history and impact reporting.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure. We encourage you to use caution when sharing personal information online.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">7. International Participants</h2>
            <p className="text-gray-700 leading-relaxed">
              GSSF operates globally across multiple continents. If you are located outside the United States, please be aware that your information will be transferred to and processed in the United States, where our servers and operations are based. By participating in our programs or using our websites, you consent to this transfer. We take appropriate steps to ensure that your information is treated securely and in accordance with this Policy.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">8. Minors</h2>
            <p className="text-gray-700 leading-relaxed">
              GSSF programs are designed for undergraduate university students and professionals. Our websites are not directed at children under the age of 13. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">9. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights with respect to your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal and operational requirements.</li>
              <li><strong>Opt-Out of Communications:</strong> Unsubscribe from marketing or non-essential communications at any time by following the unsubscribe link in any email or contacting us directly.</li>
              <li><strong>Data Portability:</strong> Request your information in a structured, machine-readable format where technically feasible.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, contact us at foundation@globalstudentstartup.org. We will respond within a reasonable timeframe and in accordance with applicable law.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">10. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our websites may contain links to third-party websites, including participating universities, event hosts, and social media platforms. This Privacy Policy does not apply to those third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">11. Social Media</h2>
            <p className="text-gray-700 leading-relaxed">
              GSSF maintains official social media accounts, including @globalstudentstartup on Instagram and LinkedIn. Information you share with us through social media platforms is subject to those platforms' own privacy policies. We may use publicly available information from social media to promote program outcomes and participant achievements, in accordance with applicable program agreements.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">12. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or program operations. When we make material changes, we will update the "Last Updated" date at the top of this Policy and, where appropriate, provide additional notice. Your continued use of our websites or participation in our programs following any update constitutes acceptance of the revised Policy.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-bold text-gray-900 mb-2">Global Student Startup Foundation</p>
              <p className="text-gray-700">1837 McFarlane Street, San Marino, CA 91108</p>
              <p className="text-gray-700">Email: foundation@globalstudentstartup.org</p>
              <p className="text-gray-700">Website: foundation.globalstudentstartup.org</p>
              <p className="text-gray-700 mt-4">EIN: 41-3141550 · 501(c)(3) Nonprofit Public Benefit Corporation</p>
            </div>

            <p className="text-gray-600 leading-relaxed italic mt-8">
              All GSSF programs are operated in furtherance of exclusively charitable and educational purposes under IRC Section 501(c)(3). Donor contributions are tax-deductible under IRC Section 170.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}