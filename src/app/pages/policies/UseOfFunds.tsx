import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function UseOfFunds() {
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
            Use of Funds Policy
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Global Student Startup Foundation
          </p>
          <p className="text-sm text-gray-500 mb-12">
            Adopted: December 23, 2025 | Updated: February 14, 2026
          </p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">I. Purpose and Core Philosophy</h2>
            <p className="text-gray-700 leading-relaxed">
              The Global Student Startup Foundation (the "Foundation") is a 501(c)(3) nonprofit organization dedicated to fostering undergraduate entrepreneurship and global leadership. To ensure the highest level of stewardship of donor capital and mission-alignment, the Foundation adheres to a strict "Impact-First" financial model. This policy outlines the allocation of funds to programmatic activities versus organizational overhead.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">II. The 85/15 Rule</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To maintain operational efficiency and transparency, the Foundation adheres to the following annual allocation ratios for its General Fund:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Programmatic Commitment (Minimum 85%)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At least 85% of total annual qualifying expenditures shall be directed toward direct mission delivery. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Student travel, lodging, and logistics for GSSC Worlds and regional qualifiers.</li>
              <li>Curriculum development, mentor workshops, and bootcamp production.</li>
              <li>Global Ecosystem Fellowships and regional programmatic grants.</li>
              <li>Personnel costs directly tied to program delivery and student mentorship.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Administrative & Operational Cap (Maximum 15%)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              No more than 15% of total annual qualifying expenditures shall be used for general management and administrative oversight. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Legal, accounting, and 501(c)(3) compliance fees.</li>
              <li>General office software, banking/payment processing fees (e.g., Wise), and web hosting.</li>
              <li>General governance and board-related expenses.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">III. Donor-Directed Discretionary Funds (The Exclusion Rule)</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To provide operational flexibility while protecting the integrity of the 85% programmatic ratio, the Foundation recognizes a distinct category of capital:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <div>
                <p className="font-bold text-gray-900 mb-2">Definition:</p>
                <p className="text-gray-700 leading-relaxed">
                  "Discretionary Funds" are contributions where the donor has explicitly designated in writing that the funds are to be used for organizational infrastructure, leadership development, or administrative capacity building.
                </p>
              </div>
              
              <div>
                <p className="font-bold text-gray-900 mb-2">Accounting Treatment:</p>
                <p className="text-gray-700 leading-relaxed">
                  Because these funds are restricted by the donor for non-programmatic use, they are tracked separately and are excluded from the denominator when calculating the Foundation's annual 85% programmatic spend ratio.
                </p>
              </div>
              
              <div>
                <p className="font-bold text-gray-900 mb-2">Substantiation:</p>
                <p className="text-gray-700 leading-relaxed">
                  Every discretionary gift must be accompanied by a written donor designation (e.g., a Gift Letter) to satisfy internal audit and IRS requirements.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">IV. Financial Oversight and Governance</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>
                <strong>Statutory Authority:</strong> In accordance with the Foundation's Bylaws and Articles of Incorporation, the President (Mike Seung Lee) and the Chief Financial Officer (Elizabeth Flora Lee) hold ultimate responsibility for the approval and execution of all financial disbursements.
              </li>
              <li>
                <strong>Global Operations:</strong> The Foundation is authorized to utilize international financial platforms to facilitate global mission delivery. All international transfers must comply with U.S. Treasury (OFAC) regulations.
              </li>
              <li>
                <strong>Reasonable Compensation:</strong> All expenditures, including those from Discretionary Funds, must comply with IRS prohibitions against private inurement. Compensation for services rendered must be reasonable, market-appropriate, and board-approved.
              </li>
              <li>
                <strong>Reporting:</strong> The Board shall conduct an annual review of the functional expense breakdown to ensure continued compliance with the 85/15 Rule.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-4 uppercase">V. Transparency and Accountability</h2>
            <p className="text-gray-700 leading-relaxed">
              The Foundation maintains an "Extreme Transparency" standard. Detailed financial reports reflecting the use of both Programmatic and Discretionary funds shall be made available to major donors and relevant regulatory bodies to demonstrate the impact of their contributions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}