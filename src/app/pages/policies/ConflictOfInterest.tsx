import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function ConflictOfInterest() {
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
            Conflict of Interest Policy
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Last Updated: February 15, 2026
          </p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">1. Purpose</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The purpose of this Conflict of Interest Policy is to protect the interests of the Global Student Startup Foundation ("GSSF" or the "Foundation") when it is contemplating entering into a transaction or arrangement that might benefit the private interest of an individual in a leadership or decision-making role. This policy is intended to supplement, but not replace, applicable state and federal laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">2. Covered Persons</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This policy applies to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Members of the Board of Directors and Officers.</li>
                <li>Organizers (including Student and Professional Organizers with decision-making or partnership authority).</li>
                <li>Key employees or contractors with authority over financial, programmatic, or strategic matters.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">3. Definition of Conflict of Interest</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A conflict of interest exists when a Covered Person has a direct or indirect financial or personal interest that could compromise, or appear to compromise, the person's ability to act in the best interests of the Foundation.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Financial Interest:</strong> A material ownership or compensation relationship with an entity doing business with GSSF.</li>
                <li><strong>Family Interest:</strong> A transaction involving a spouse, parent, child, or sibling of a Covered Person.</li>
                <li><strong>Organizational Benefit:</strong> Using a leadership role as an Organizer to steer Foundation resources toward a personal venture or an affiliated third party without disclosure.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">4. Duty to Disclose</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each Covered Person, including Organizers, has a duty to disclose any actual or potential conflict of interest as soon as it arises. Disclosure must include all material facts regarding the nature of the interest and the parties involved.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">5. Procedures for Addressing a Conflict</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When a potential conflict of interest has been disclosed:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Recusal:</strong> The interested person shall leave the meeting during the discussion and vote on the matter.</li>
                <li><strong>Due Diligence:</strong> The remaining disinterested leadership shall determine whether a conflict exists and whether a more advantageous arrangement could be obtained from an entity that does not produce a conflict.</li>
                <li><strong>Determination:</strong> The Board may approve the transaction only if it determines the arrangement is fair, reasonable, and in the best interests of the Foundation.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">6. Compensation Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Any Covered Person whose compensation or service fee is being discussed:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Must disclose the existence of the arrangement.</li>
                <li>Must recuse themselves from the discussion and voting.</li>
                <li>Compensation must be reasonable, market-appropriate, and approved by disinterested directors.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">7. Records of Proceedings</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The minutes of the Board shall contain:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>The names of persons (including Organizers) who disclosed or were found to have a conflict.</li>
                <li>The nature of the conflict and any actions taken.</li>
                <li>The final decision and the record of the vote.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">8. Annual Statements</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Each director, officer, key person, and organizer shall annually sign a statement affirming that they:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Have received and read a copy of this policy.</li>
                <li>Agree to comply with the policy.</li>
                <li>Understand that the Foundation is a charitable organization and must engage primarily in activities that accomplish its tax-exempt purposes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 uppercase">9. Violations of the Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If the Board has reasonable cause to believe a Covered Person has failed to disclose a conflict, it shall inform the person and allow an opportunity for explanation. If a violation is confirmed, the Board may take appropriate corrective action, including removal from their role.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}