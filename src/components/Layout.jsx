import { Link, useLocation } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0f1f3d] text-white text-xs sm:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> +44 7000 000000</span>
            <span className="hidden sm:flex items-center"><Mail className="w-3 h-3 mr-1" /> contact@example.com</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link to="/login" className="hover:text-blue-300 transition">Login</Link>
            <span className="text-gray-500">|</span>
            <Link to="/enroll_user" className="hover:text-blue-300 transition">Online Enrollment</Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16 items-center">
            <Link to="/" >
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-[#1e3a8a]">Regional EU Bank</span>
            </div>
</Link>
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link to="/" className={`px-3 py-2 font-medium text-sm transition ${isActive('/') ? 'text-[#1e3a8a]' : 'text-gray-700 hover:text-[#1e3a8a]'}`}>Home</Link>
              <Link to="/vision" className={`px-3 py-2 font-medium text-sm transition ${isActive('/vision') ? 'text-[#1e3a8a]' : 'text-gray-700 hover:text-[#1e3a8a]'}`}>Our Vision</Link>
              <Link to="/performance" className={`px-3 py-2 font-medium text-sm transition ${isActive('/performance') ? 'text-[#1e3a8a]' : 'text-gray-700 hover:text-[#1e3a8a]'}`}>Our Performance</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#1e3a8a] px-3 py-2 font-medium text-sm flex items-center">
                  Personal <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/current_account" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] first:rounded-t-xl">Current Account</Link>
                  <Link to="/instant_access" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">Instant Access Savings</Link>
                  <Link to="/35day" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] last:rounded-b-xl">35 Day Notice Account</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#1e3a8a] px-3 py-2 font-medium text-sm flex items-center">
                  Charity & Business <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/business_current_account" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] first:rounded-t-xl">Business Current Account</Link>
                  <Link to="/business_loan" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">Business Loan</Link>
                  <Link to="/charity_loan" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">Charity Loan</Link>
                  <Link to="/social_housing" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] last:rounded-b-xl">Social Housing Finance</Link>
                </div>
              </div>
              <Link to="/mortgage" className={`px-3 py-2 font-medium text-sm transition ${isActive('/mortgage') ? 'text-[#1e3a8a]' : 'text-gray-700 hover:text-[#1e3a8a]'}`}>Mortgage</Link>
              <Link to="/support" className={`px-3 py-2 font-medium text-sm transition ${isActive('/support') ? 'text-[#1e3a8a]' : 'text-gray-700 hover:text-[#1e3a8a]'}`}>Support</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/login" className="text-gray-600 hover:text-[#1e3a8a] px-3 py-2 font-medium text-sm">Sign In</Link>
              <Link to="/register" className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition font-medium text-sm">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`block py-2 font-medium ${isActive('/') ? 'text-[#1e3a8a]' : 'text-gray-700'}`}>Home</Link>
            <Link to="/vision" onClick={() => setMobileMenuOpen(false)} className={`block py-2 font-medium ${isActive('/vision') ? 'text-[#1e3a8a]' : 'text-gray-700'}`}>Our Vision</Link>
            <Link to="/performance" onClick={() => setMobileMenuOpen(false)} className={`block py-2 font-medium ${isActive('/performance') ? 'text-[#1e3a8a]' : 'text-gray-700'}`}>Our Performance</Link>
            <div className="py-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Personal</span>
              <Link to="/current_account" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1e3a8a] py-1 pl-3 text-sm">Current Account</Link>
              <Link to="/instant_access" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1e3a8a] py-1 pl-3 text-sm">Instant Access Savings</Link>
              <Link to="/35day" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1e3a8a] py-1 pl-3 text-sm">35 Day Notice Account</Link>
            </div>
            <div className="py-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Charity & Business</span>
              <Link to="/business_current_account" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1e3a8a] py-1 pl-3 text-sm">Business Current Account</Link>
              <Link to="/business_loan" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1e3a8a] py-1 pl-3 text-sm">Business Loan</Link>
              <Link to="/charity_loan" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1e3a8a] py-1 pl-3 text-sm">Charity Loan</Link>
              <Link to="/social_housing" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1e3a8a] py-1 pl-3 text-sm">Social Housing Finance</Link>
            </div>
            <Link to="/mortgage" onClick={() => setMobileMenuOpen(false)} className={`block py-2 font-medium ${isActive('/mortgage') ? 'text-[#1e3a8a]' : 'text-gray-700'}`}>Mortgage</Link>
            <Link to="/support" onClick={() => setMobileMenuOpen(false)} className={`block py-2 font-medium ${isActive('/support') ? 'text-[#1e3a8a]' : 'text-gray-700'}`}>Support</Link>
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-[#1e3a8a] py-2 font-medium text-center">Sign In</Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="block bg-[#1e3a8a] text-white px-4 py-3 rounded-lg hover:bg-blue-900 transition font-medium text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1f3d] text-gray-400 py-10 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span className="text-lg sm:text-xl font-bold text-white">Regional EU Bank</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">
                Banking with a social conscience since 1890. Putting good before greed and people before profit.
              </p>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+44 7000 000000</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Personal Banking</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link to="/current_account" className="hover:text-white transition">Current Account</Link></li>
                <li><Link to="/instant_access" className="hover:text-white transition">Instant Access Savings</Link></li>
                <li><Link to="/35day" className="hover:text-white transition">35 Day Notice Account</Link></li>
                <li><Link to="/mortgage" className="hover:text-white transition">Mortgages</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Charity & Business</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link to="/business_current_account" className="hover:text-white transition">Business Current Account</Link></li>
                <li><Link to="/business_loan" className="hover:text-white transition">Business Loan</Link></li>
                <li><Link to="/charity_loan" className="hover:text-white transition">Charity Loan</Link></li>
                <li><Link to="/social_housing" className="hover:text-white transition">Social Housing Finance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link to="/vision" className="hover:text-white transition">Our Vision</Link></li>
                <li><Link to="/performance" className="hover:text-white transition">Our Performance</Link></li>
                <li><Link to="/support" className="hover:text-white transition">Support Center</Link></li>
                <li><Link to="/enroll_user" className="hover:text-white transition">Online Enrollment</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs sm:text-sm mb-4 md:mb-0">© 2026 Regional EU Bank Limited. All rights reserved.</div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-center md:text-left">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Faith House, 23-24 Lovat Lane, London EC3R 8EB, United Kingdom</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}