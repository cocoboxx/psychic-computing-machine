import { Link } from 'react-router-dom';
import { Shield, CreditCard, TrendingUp, Smartphone, ChevronRight, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const offers = [
    { title: "2% Cash Back", desc: "On all grocery purchases", icon: <TrendingUp className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { title: "0% APR", desc: "For first 12 months", icon: <CreditCard className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "No Fees", desc: "Zero monthly maintenance", icon: <Shield className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-bank-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-bank-primary">Regional EU Bank</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-bank-primary px-3 py-2 font-medium">Sign In</Link>
              <Link to="/register" className="bg-bank-primary text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition font-medium">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block text-gray-600 hover:text-bank-primary py-2 font-medium">Sign In</Link>
            <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="block bg-bank-primary text-white px-4 py-3 rounded-lg hover:bg-blue-900 transition font-medium text-center">
              Get Started
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section - Mobile Optimized Background */}
      <div className="relative text-white overflow-hidden min-h-[500px] sm:min-h-auto" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #172554 100%)'
      }}>
        {/* Background texture - inline SVG for reliability */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(30, 58, 138, 0.5), transparent)'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 sm:px-4 py-1 mb-4 sm:mb-6 border border-white/20 text-sm" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(4px)'
              }}>
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="font-medium">Trusted by 2M+ customers</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                Banking Made <span className="text-blue-300">Simple</span> & <span className="text-emerald-300">Secure</span>
              </h1>
              <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Experience modern banking with zero fees, instant transfers, and real-time analytics. Your money, your control.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/register" className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:brightness-110 transition flex items-center justify-center text-sm sm:text-base" style={{
                  background: '#10b981'
                }}>
                  Open Free Account <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link to="/login" className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:brightness-110 transition border border-white/20 text-center text-sm sm:text-base" style={{
                  background: 'rgba(255, 255, 255, 0.1)'
                }}>
                  Access Account
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500" style={{
                background: 'rgba(255, 255, 255, 0.1)'
              }}>
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="text-sm font-medium text-blue-200">Total Balance</span>
                  <Smartphone className="w-5 h-5 text-blue-200" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">$24,562.80</div>
                <div className="text-emerald-300 text-sm mb-6 sm:mb-8">+ $1,240.00 this month</div>
                <div className="space-y-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="flex justify-between items-center rounded-lg p-3" style={{
                      background: 'rgba(255, 255, 255, 0.05)'
                    }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full" style={{
                          background: 'rgba(255, 255, 255, 0.2)'
                        }}></div>
                        <div className="text-sm">Transaction {i}</div>
                      </div>
                      <div className="text-sm font-medium">-$45.00</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-bank-dark mb-4">Popular Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Exclusive deals designed to help you save more and earn rewards on everyday spending.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {offers.map((offer, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 group">
                <div className={`w-12 h-14 ${offer.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition`}>
                  {offer.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{offer.desc}</p>
                <Link to="/register" className="text-bank-primary font-semibold flex items-center hover:underline text-sm sm:text-base">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-bank-dark text-gray-400 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Regional EU Bank</span>
            </div>
            <div className="text-sm">© 2026 Regional EU Bank. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}