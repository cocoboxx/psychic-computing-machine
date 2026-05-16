import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Award, Users, PiggyBank, CreditCard, Home, ArrowRight, Star, Globe } from 'lucide-react';

export default function PerformancePage() {
  const stats = [
    { value: "130+", label: "Years of Banking", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: "30+", label: "Salvation Army Territories", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: "#1", label: "Customer Satisfaction", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { value: "£250k-£2.75m", label: "Lending Range", icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const achievements = [
    { title: "Award-Winning Service", desc: "Recognised for excellence in customer service and ethical banking practices.", icon: <Award className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" },
    { title: "Social Impact Lending", desc: "Over £100m lent to charities and social enterprises in the past decade.", icon: <TrendingUp className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { title: "Community Support", desc: "Supporting 30+ Salvation Army territories worldwide.", icon: <Users className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Affordable Housing", desc: "Funding social housing projects that change lives for the better.", icon: <Home className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" }
  ];

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
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300 mr-2" />
              <span className="font-medium">Our Performance</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Proven Results, Positive Impact
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Our performance is measured not just in financial returns, but in the positive social impact we create.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 sm:py-16 lg:py-20" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-blue-200">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Our commitment to ethical banking has been recognised through numerous awards and milestones.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 group text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition`}>
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Highlights */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Financial Strength You Can Trust
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Regional EU Bank Limited maintains strong capital ratios and prudent risk management practices. Our financial stability ensures that we can continue to support our customers and communities for generations to come.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-base font-medium text-gray-700">Capital Adequacy Ratio</span>
                    <span className="text-sm sm:text-base font-bold text-[#1e3a8a]">Strong</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#1e3a8a] h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-base font-medium text-gray-700">Customer Satisfaction</span>
                    <span className="text-sm sm:text-base font-bold text-emerald-600">#1 Ranked</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-base font-medium text-gray-700">Social Impact Score</span>
                    <span className="text-sm sm:text-base font-bold text-purple-600">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              <Link to="/support" className="inline-flex items-center text-[#1e3a8a] font-semibold hover:underline text-sm sm:text-base">
                Contact Our Team <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80" 
                alt="Financial performance" 
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