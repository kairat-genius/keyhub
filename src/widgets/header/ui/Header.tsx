import Icon from "@/shared/icon";
import { AnimatePresence, motion } from "motion/react"; 
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)} 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-screen w-screen"
            style={{ zIndex: -1 }} 
          />
        )}
      </AnimatePresence>

      <div className="container py-4 relative z-10 bg-white"> 
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
          >
            <a href="/">Keyhub</a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/keys"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Keys
            </Link>
            <Link
              to="/#features"
              reloadDocument
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/#showcase"
              reloadDocument
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Database
            </Link>
            <Link
              to="/#testimonials"
              reloadDocument
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/#pricing"
              reloadDocument
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <Link
            to="/auth/login"
            className="hidden md:flex text-center h-9 px-4 py-2 text-white rounded-md text-sm font-medium bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
          >
            Sign In
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer relative z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <Icon icon="close" className="size-6 text-black" />
            ) : (
              <Icon icon="menu" className="size-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4 pb-2 overflow-hidden"
            >
              <nav className="flex flex-col gap-4">
                <Link 
                  to="/keys" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Keys
                </Link>
                <Link
                  to="/#features"
                  reloadDocument
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Features
                </Link>
                <Link
                  to="/#showcase"
                  reloadDocument
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Database
                </Link>
                <Link
                  to="/#testimonials"
                  reloadDocument
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Testimonials
                </Link>
                <Link
                  to="/#pricing"
                  reloadDocument
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
                <Link
                  to="/auth/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-center h-9 px-4 py-2 text-white rounded-md text-sm font-medium bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                >
                  Log in
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;