import { Link } from 'react-router-dom';
import { Shield, CreditCard, TrendingUp, Smartphone, ChevronRight, Star } from 'lucide-react';

export default function LandingPage() {
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
              <span className="text-xl font-bold text-bank-primary">NovaBank</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-bank-primary px-3 py-2 font-medium">Sign In</Link>
              <Link to="/register" className="bg-bank-primary text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-bank-primary via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-white/20">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Trusted by 2M+ customers</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Banking Made <span className="text-blue-300">Simple</span> & <span className="text-emerald-300">Secure</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Experience modern banking with zero fees, instant transfers, and real-time analytics. Your money, your control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 transition flex items-center justify-center">
                  Open Free Account <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/login" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition border border-white/20 text-center">
                  Access Account
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-medium text-blue-200">Total Balance</span>
                  <Smartphone className="w-5 h-5 text-blue-200" />
                </div>
                <div className="text-4xl font-bold mb-2">$24,562.80</div>
                <div className="text-emerald-300 text-sm mb-8">+ $1,240.00 this month</div>
                <div className="space-y-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
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
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-bank-dark mb-4">Popular Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Exclusive deals designed to help you save more and earn rewards on everyday spending.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition border border-gray-100 group">
                <div className={`w-14 h-14 ${offer.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                  {offer.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.desc}</p>
                <Link to="/register" className="text-bank-primary font-semibold flex items-center hover:underline">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-bank-dark text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">NovaBank</span>
            </div>
            <div className="text-sm">© 2026 NovaBank. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}