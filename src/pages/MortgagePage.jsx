import { Link } from 'react-router-dom';
import { Shield, Home, CheckCircle, ArrowRight, Users, Star, Heart, KeyRound } from 'lucide-react';

export default function MortgagePage() {
  const products = [
    { title: "Key Worker Mortgages", desc: "Up to 95% LTV for essential workers including NHS staff, teachers, and emergency services.", icon: <Users className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Shared Ownership", desc: "Part buy, part rent solutions for first-time buyers struggling to afford full ownership.", icon: <Home className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { title: "House Purchase", desc: "Ethical mortgages with award-winning service for all homebuyers.", icon: <Shield className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" }
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
              <Home className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 mr-2" />
              <span className="font-medium">Mortgages</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Mortgages with a Social Conscience
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Award-winning customer service and a more ethical approach to banking. Supporting Key Workers and Shared Ownership buyers.
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Mortgage Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Ethical mortgage solutions for every stage of home ownership.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 group text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${product.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition`}>
                  {product.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">{product.desc}</p>
                <Link to="/register" className="text-[#1e3a8a] font-semibold text-sm sm:text-base hover:underline">
                  Learn more <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Why choose a Reliance mortgage?
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                We believe everyone deserves a place to call home. Our mortgages are designed with fairness and flexibility in mind, supporting those who serve our communities.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Up to 95% LTV for key workers",
                  "Shared ownership options available",
                  "No arrangement fees for key workers",
                  "Award-winning customer service",
                  "Flexible overpayment options"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/register" className="inline-flex items-center bg-[#1e3a8a] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-900 transition text-sm sm:text-base">
                Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80" 
                alt="Home ownership" 
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