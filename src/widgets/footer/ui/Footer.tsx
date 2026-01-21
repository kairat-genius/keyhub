import Icon from "@/shared/icon";
import { motion } from "motion/react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Keyhub
            </div>
            <p className="text-gray-400 text-sm mb-6">
              The most comprehensive database for automotive key programming
              professionals. Trusted by thousands worldwide.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="size-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Icon icon="github" className="size-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="size-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Icon icon="twitter" className="size-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="size-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Icon icon="linkedin" className="size-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="size-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Icon icon="mail" className="size-5" />
              </motion.a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Database Coverage
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Keyhub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
