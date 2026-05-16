import { Link } from 'react-router-dom';
import { Shield, TrendingUp, CheckCircle, ArrowRight, Clock, Calendar, Percent } from 'lucide-react';

export default function ThirtyFiveDayPage() {
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
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-amber-300 mr-2" />
              <span className="font-medium">Personal Banking</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              35 Day Notice Account
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Earn 1.85% AER variable with 35 days notice. Higher returns for savers who can plan ahead.
            </p>
          </div>
        </div>
      </div>

      {/* Rate Highlight */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-amber-100 rounded-full mb-4 sm:mb-6">
              <Percent className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">1.85% AER Variable</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Effective from 1st April 2023. Interest is calculated daily and paid annually.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#1e3a8a] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">35 Day Notice</h3>
              <p className="text-gray-600 text-sm sm:text-base">Give 35 days notice before withdrawing funds</p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-[#1e3a8a] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">Daily Interest</h3>
              <p className="text-gray-600 text-sm sm:text-base">Interest calculated daily for maximum returns</p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#1e3a8a] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">Variable Rate</h3>
              <p className="text-gray-600 text-sm sm:text-base">Rate may change in line with market conditions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Higher returns for planned savers
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                In order to earn a higher rate of interest, our 35 Day Notice Account requires advance notice of 35 days before you can withdraw any of your money. While you earn interest on your savings, you will have the comfort that your money will make a positive difference to other people's lives.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "1.85% AER variable interest rate",
                  "35 days notice required for withdrawals",
                  "Minimum opening deposit £1,000",
                  "Interest paid annually",
                  "Online account management"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/register" className="inline-flex items-center bg-[#1e3a8a] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-900 transition text-sm sm:text-base">
                Open Account <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop&q=80" 
                alt="Savings growth" 
                className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}