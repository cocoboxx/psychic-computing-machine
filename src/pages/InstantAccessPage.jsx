import { Link } from 'react-router-dom';
import { Shield, PiggyBank, CheckCircle, ArrowRight, TrendingUp, Clock, Lock } from 'lucide-react';

export default function InstantAccessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative text-white overflow-hidden py-16 sm:py-20 lg:py-24" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #172554 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 mb-4 sm:mb-6 border border-white/20 text-xs sm:text-sm" style={{
              background: 'rgba(255, 255, 255, 0.1)'
            }}>
              <PiggyBank className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300 mr-2" />
              <span className="font-medium">Personal Banking</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Instant Access Savings
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Access your money whenever you need it. Flexible savings with competitive interest rates and no withdrawal restrictions.
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop&q=80" 
                alt="Savings" 
                className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Save with flexibility
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Our Instant Access Savings Account gives you the freedom to withdraw your money whenever you need it, without penalties or notice periods. Perfect for emergency funds or short-term savings goals.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "No withdrawal restrictions",
                  "Competitive variable interest rate",
                  "No minimum balance requirement",
                  "Online account management",
                  "Interest calculated daily"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 sm:p-5 border border-emerald-100 mb-8">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  <span className="font-semibold text-emerald-800 text-sm sm:text-base">Current Interest Rate</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-600">Variable AER</p>
                <p className="text-xs sm:text-sm text-emerald-600 mt-1">Rates subject to change. Please check latest rates.</p>
              </div>
              <Link to="/register" className="inline-flex items-center bg-[#1e3a8a] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-900 transition text-sm sm:text-base">
                Open Savings Account <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}