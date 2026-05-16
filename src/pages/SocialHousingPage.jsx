import { Link } from 'react-router-dom';
import { Shield, Home, CheckCircle, ArrowRight, Building, Users, TrendingUp, Landmark } from 'lucide-react';

export default function SocialHousingPage() {
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
              <Home className="w-3 h-3 sm:w-4 sm:h-4 text-amber-300 mr-2" />
              <span className="font-medium">Charity & Business</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Social Housing Finance
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Funding affordable homes for those in need. Power to change lives for the better.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#1e3a8a] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">£250k-£2.75m</h3>
              <p className="text-gray-600 text-sm sm:text-base">Lending Range</p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <Building className="w-8 h-8 sm:w-10 sm:h-10 text-[#1e3a8a] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">25 Years</h3>
              <p className="text-gray-600 text-sm sm:text-base">Max Repayment Term</p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100 text-center">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#1e3a8a] mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Many</h3>
              <p className="text-gray-600 text-sm sm:text-base">Homes Funded</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80" 
                alt="Social housing" 
                className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Power to change lives for the better
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Regional EU Bank Ltd has proudly supported the social housing sector for many years. We provide funding to Registered Providers of Affordable Housing and Housing Associations, so that they can provide more affordable homes for people on low incomes.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Loans from £250,000 to £2.75 million",
                  "Terms up to 25 years",
                  "Fixed or variable interest rates",
                  "Secured on housing assets",
                  "Support for new build and refurbishment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/register" className="inline-flex items-center bg-[#1e3a8a] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-900 transition text-sm sm:text-base">
                Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}