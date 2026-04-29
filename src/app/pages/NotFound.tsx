import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export default function NotFound() {
  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center">
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        path="/404"
      />
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-[#242EC0] mb-6">404</h1>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-[#242EC0] hover:bg-[#1a2090] text-white">
                <Home className="mr-2" size={20} />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-[#242EC0] text-[#242EC0] hover:bg-[#242EC0] hover:text-white"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
