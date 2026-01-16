import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";

export function NewHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
          >
            <a href="/">Keyhub</a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/keys"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Keys
            </a>
            <a
              href="/#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="/#showcase"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Database
            </a>
            <a
              href="/#testimonials"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="/#pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <nav className="flex flex-col gap-4">
              <a href="/keys" className="text-gray-600 hover:text-gray-900">
                Keys
              </a>
              <a
                href="/#features"
                className="text-gray-600 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="/#showcase"
                className="text-gray-600 hover:text-gray-900"
              >
                Database
              </a>
              <a
                href="/#testimonials"
                className="text-gray-600 hover:text-gray-900"
              >
                Testimonials
              </a>
              <a href="/#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost">Sign In</Button>
                <Button className="bg-gradient-to-r from-violet-600 to-indigo-600">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
