import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="w-full py-6 lg:py-12 mx-auto px-4 max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center md:items-start">
              <Link to="/">
                <span className="font-bold tracking-tight text-xl text-gray-900">
                  keyhub
                </span>
              </Link>
              <div className="text-muted-foreground mt-4 text-center text-sm md:text-left">
                <p>Sahaajankatu 45</p>
                <p>00800 Helsinki, Finland</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-sm font-semibold text-gray-900">
                Contact us
              </h3>
              <a
                href="mailto:info@keyhub.com"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                info@keyhub.com
              </a>
            </div>
            <div className="hidden flex-col items-center md:block md:items-end">
              <nav className="flex flex-col items-center space-y-2 md:items-end">
                <Link
                  className="text-gray-600 transition-colors hover:text-gray-900"
                  to="/keys"
                >
                  Keys
                </Link>
                <Link
                  className="text-gray-600 transition-colors hover:text-gray-900"
                  to="/about-us"
                >
                  About Us
                </Link>
                <Link
                  className="text-gray-600 transition-colors hover:text-gray-900"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="text-gray-600 transition-colors hover:text-gray-900"
                  to="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
                <Link
                  className="text-gray-600 transition-colors hover:text-gray-900"
                  to="https://www.keyhub.com/glossary"
                >
                  Glossary
                </Link>
                <Link
                  className="text-gray-600 transition-colors hover:text-gray-900"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </nav>
            </div>
          </div>
      </div>
      <div className="border-t py-8">
        <p className="text-center text-sm text-gray-500">
          ©2026 keyhub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
