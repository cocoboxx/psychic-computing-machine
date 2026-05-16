import { Link } from 'react-router-dom';
import { Shield, Landmark, CheckCircle, ArrowRight, Building, CreditCard, Users, FileText } from 'lucide-react';

export default function BusinessCurrentAccountPage() {
  const features = [
    { title: "Charity-Focused", desc: "Tailored specifically for charities and social enterprises.", icon: <Users className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Easy Transactions", desc: "Streamlined payment processing and fund management.", icon: <CreditCard className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { title: "Reporting Tools", desc: "Comprehensive financial reporting for transparency.", icon: <FileText className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
    { title: "Dedicated Support", desc: "Specialist relationship managers for your organisation.", icon: <Building className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" }
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
              <Landmark className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 mr-2" />
              <span className="font-medium">Charity & Business</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Business Current Account
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Tailored banking for charities and enterprises. Manage your organisation's finances with an ethical partner.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Account Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Designed specifically for the unique needs of charities and social enterprises.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 group text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition`}>
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
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
                Banking that understands your mission
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Our Business Current Account is designed for charities, social enterprises, and purpose-driven organisations. We understand that your finances serve a greater mission.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "No monthly account fees for charities",
                  "Free online banking and statements",
                  "Multi-user access with role permissions",
                  "Integration with accounting software",
                  "Ethical investment of deposits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/register" className="inline-flex items-center bg-[#1e3a8a] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-900 transition text-sm sm:text-base">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80" 
                alt="Business meeting" 
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