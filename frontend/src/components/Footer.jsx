import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.15) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-600/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                  JobMonk
                </h2>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Connecting talented professionals with their dream careers.
                  Build your future with opportunities that match your skills
                  and aspirations.
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-sm font-bold">t</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-sm font-bold">ig</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  "Find Jobs",
                  "Browse Companies",
                  "Career Advice",
                  "Salary Guide",
                  "Resume Builder",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                  "FAQ",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-12 border-t border-gray-700">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-8">
                Get the latest job opportunities delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 JobPortal. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Made with ❤️ in India
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
