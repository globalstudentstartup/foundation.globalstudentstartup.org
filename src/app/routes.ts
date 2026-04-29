import { createHashRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import GSSC from "./pages/GSSC";
import AICup from "./pages/AICup";
import Academy from "./pages/Academy";
import Ventures from "./pages/Ventures";
import Advisory from "./pages/Advisory";
import AILabs from "./pages/AILabs";
import Leadership from "./pages/Leadership";
import Network from "./pages/Network";
import GlobalPartners from "./pages/GlobalPartners";
import ContactUs from "./pages/ContactUs";
import Governance from "./pages/Governance";
import Support from "./pages/Support";
import ConflictOfInterest from "./pages/policies/ConflictOfInterest";
import UseOfFunds from "./pages/policies/UseOfFunds";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import BusinessCardPage from "./pages/BusinessCardPage";
import FAQ from "./pages/FAQ";
import IndiaDonation from "./pages/IndiaDonation";
import FinlandDonation from "./pages/FinlandDonation";
import USCDonation from "./pages/USCDonation";
import UCBerkeleyDonation from "./pages/UCBerkeleyDonation";
import CornellDonation from "./pages/CornellDonation";
import HarvardDonation from "./pages/HarvardDonation";
import StanfordDonation from "./pages/StanfordDonation";
import OxfordDonation from "./pages/OxfordDonation";
import NotFound from "./pages/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "programs", Component: Programs },
      { path: "gssc", Component: GSSC },
      { path: "ai-cup", Component: AICup },
      { path: "academy", Component: Academy },
      { path: "ventures", Component: Ventures },
      { path: "advisory", Component: Advisory },
      { path: "ai-labs", Component: AILabs },
      { path: "leadership", Component: Leadership },
      { path: "network", Component: Network },
      { path: "partners", Component: GlobalPartners },
      { path: "contact", Component: ContactUs },
      { path: "foundation", Component: Governance },
      { path: "support", Component: Support },
      { path: "conflict-of-interest", Component: ConflictOfInterest },
      { path: "use-of-funds", Component: UseOfFunds },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "business-card", Component: BusinessCardPage },
      { path: "faq", Component: FAQ },
      { path: "india-donation", Component: IndiaDonation },
      { path: "finland-donation", Component: FinlandDonation },
      { path: "usc-donation", Component: USCDonation },
      { path: "uc-berkeley-donation", Component: UCBerkeleyDonation },
      { path: "cornell-donation", Component: CornellDonation },
      { path: "harvard-donation", Component: HarvardDonation },
      { path: "stanford-donation", Component: StanfordDonation },
      { path: "oxford-donation", Component: OxfordDonation },
      { path: "*", Component: NotFound },
    ],
  },
]);