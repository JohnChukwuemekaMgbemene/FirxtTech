import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: {
      title: "Our Services",
      links: [
        { name: "Remote Support", path: "/services", description: "Get help from anywhere" },
        { name: "Computer Repair", path: "/services", description: "Hardware & software fixes" },
        { name: "Virus Removal", path: "/services", description: "Clean infected systems" },
        { name: "Data Recovery", path: "/services", description: "Recover lost files" },
        { name: "System Setup", path: "/services", description: "New computer setup" }
      ]
    },
    support: {
      title: "Support Center",
      links: [
        { name: "Knowledge Base", path: "/knowledge-base", description: "Self-help articles" },
        { name: "Submit Ticket", path: "/submit-ticket", description: "Get professional help" },
        { name: "Blog", path: "/blog", description: "Tech tips & guides" },
        { name: "Tools", path: "/tools", description: "System utilities" },
        { name: "FAQ", path: "/knowledge-base", description: "Common questions" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Windows Updates", path: "/blog/windows-update-problems", description: "Fix update issues" },
        { name: "Performance Tips", path: "/blog/slow-performance-freezing", description: "Speed up your PC" },
        { name: "Security Guide", path: "/blog/office-licensing-security", description: "Stay protected" },
        { name: "Hardware Help", path: "/blog/overheating-problems", description: "Fix hardware issues" },
        { name: "System Cleanup", path: "/blog/system-cleanup-optimization", description: "Optimize your system" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", path: "/about", description: "Our story & mission" },
        { name: "Contact", path: "/contact", description: "Get in touch" },
        { name: "Privacy Policy", path: "/privacy", description: "How we protect you" },
        { name: "Terms of Service", path: "/terms", description: "Service agreement" },
        { name: "Careers", path: "/careers", description: "Join our team" }
      ]
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Company Info Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">FirxtTech</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Professional computer support and tech solutions. We fix problems, 
            prevent issues, and keep your technology running smoothly.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400 text-sm">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-gray-400 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Links Grid - Windows Blog Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="group block hover:bg-gray-800 rounded p-2 transition-colors"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-white">
                        {link.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300">
                        {link.description}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <p className="text-gray-400">Email: support@firxttech.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-400">Mon-Fri: 9AM - 6PM</p>
              <p className="text-gray-400">Sat-Sun: 10AM - 4PM</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} FirxtTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;