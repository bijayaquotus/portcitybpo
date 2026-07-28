import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-[120px] md:text-[180px] font-extrabold text-[#0d5186]/10 leading-none">
            404
          </h1>

          
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Page Not Found
          </h2>

          <p className="text-gray-600 text-lg mt-4 max-w-lg mx-auto">
            The page you are looking for may have been moved, deleted,
            or the URL may be incorrect.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#0d5186] text-white px-7 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Home size={18} />
              Back to Home
            </Link>

          
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-[#0d5186] rounded-full mx-auto mt-12"
        />
      </div>
    </div>
  );
}