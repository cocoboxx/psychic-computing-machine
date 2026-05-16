import { Link } from 'react-router-dom';
import { Shield, Heart, CheckCircle, ArrowRight, Star, Users, Globe, TrendingUp } from 'lucide-react';

export default function VisionPage() {
  const values = [
    { title: "Integrity", desc: "We conduct our business with honesty, transparency, and ethical standards.", icon: <Shield className="w-6 h-6" /> },
    { title: "Compassion", desc: "We care about the communities we serve and the people within them.", icon: <Heart className="w-6 h-6" /> },
    { title: "Excellence", desc: "We strive for the highest standards in everything we do.", icon: <Star className="w-6 h-6" /> },
    { title: "Innovation", desc: "We embrace new ideas to better serve our customers.", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Community", desc: "We believe in the power of collective action for social good.", icon: <Users className="w-6 h-6" /> },
    { title: "Sustainability", desc: "We are committed to long-term positive impact.", icon: <Globe className="w-6 h-6" /> }
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
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300 mr-2" />
              <span className="font-medium">Our Vision</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              We want to be the socially responsible bank of choice
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              We are an enduring ethical bank that exists to enable positive social impact. Founded by William Booth in 1890, we have been at the forefront of social impact banking for over 130 years.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Giving money real meaning
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                At Regional EU Bank we believe that the way we choose to bank can mirror the way we choose to live – by putting good before greed and people before profit. We are proud to be part of The Salvation Army and to share their mission of serving humanity without discrimination.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Supporting charities and social enterprises",
                  "Prioritising people before profit",
                  "Award-winning customer service",
                  "Ethical investment practices",
                  "Community-focused lending"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/performance" className="inline-flex items-center text-[#1e3a8a] font-semibold hover:underline text-sm sm:text-base">
                See Our Performance <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80" 
                alt="Team collaboration" 
                className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              These principles guide every decision we make and every interaction we have with our customers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-[#1e3a8a] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition">
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Over 130 years of ethical banking and social impact.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {[
              { year: "1890", title: "Founded by William Booth", desc: "The Salvation Army established Regional EU Bank to serve the financial needs of the organisation and its communities." },
              { year: "1950", title: "Expanding Services", desc: "Began offering personal banking services to the general public, extending our ethical banking mission." },
              { year: "1990", title: "Centenary Celebration", desc: "Marked 100 years of service with expanded lending capabilities and new product offerings." },
              { year: "2010", title: "Digital Transformation", desc: "Launched online banking services to better serve customers in the digital age." },
              { year: "2021", title: "#1 Customer Satisfaction", desc: "Recognised as the top bank for customer satisfaction in the Charity Finance Survey." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="sm:w-32 flex-shrink-0">
                  <div className="inline-block bg-[#1e3a8a] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-sm sm:text-base">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 pb-6 sm:pb-8 border-b border-gray-200 last:border-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}