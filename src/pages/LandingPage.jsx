import { Link } from 'react-router-dom';
import { Shield, CreditCard, TrendingUp, Mail, MapPin, Smartphone, Phone, ChevronRight, Star, Home, Users, Building, PiggyBank, Landmark, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('personal');
  const PHONE = "+44 7000 000000";
  const EMAIL = "contact@example.com";
  const ADDRESS = "Faith House, 23-24 Lovat Lane, London EC3R 8EB";

  const services = [
    { title: "Secure Banking", desc: "Safe and reliable banking services you can trust", icon: <Shield className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { title: "Business Process", desc: "Streamlined solutions for your business needs", icon: <Building className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Insurance", desc: "Comprehensive coverage to protect what matters most", icon: <Heart className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
    { title: "Loans", desc: "Flexible lending options with competitive rates", icon: <CreditCard className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" }
  ];

  const personalProducts = [
    { title: "Current Account", desc: "Easy and fast transactions for everyday banking", icon: <Smartphone className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Instant Access Savings", desc: "Access your money whenever you need it", icon: <PiggyBank className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { title: "35 Day Notice Account", desc: "Earn 1.85% AER variable with 35 days notice", icon: <TrendingUp className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" }
  ];

  const businessProducts = [
    { title: "Business Current Account", desc: "Tailored banking for charities and enterprises", icon: <Landmark className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Business Loan", desc: "Flexible lending from £250k to £2.75m", icon: <CreditCard className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { title: "Charity Loan", desc: "Supporting organisations that make a difference", icon: <Heart className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
    { title: "Social Housing Finance", desc: "Funding affordable homes for those in need", icon: <Home className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" }
  ];

  const mortgageProducts = [
    { title: "Key Worker Mortgages", desc: "Up to 95% LTV for essential workers", icon: <Users className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { title: "Shared Ownership", desc: "Part buy, part rent solutions", icon: <Home className="w-6 h-6" />, color: "bg-emerald-100 text-emerald-600" },
    { title: "House Purchase", desc: "Ethical mortgages with award-winning service", icon: <Shield className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" }
  ];

  const stats = [
    { value: "130+", label: "Years of Banking" },
    { value: "30+", label: "Salvation Army Territories" },
    { value: "#1", label: "Customer Satisfaction" },
    { value: "£250k-£2.75m", label: "Lending Range" }
  ];

  return (
    <div className="min-h-screen bg-white">
{/* Hero Section */}
      <div className="relative text-white overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #172554 100%)'
      }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(30, 58, 138, 0.5), transparent)'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 sm:px-4 py-1 mb-4 sm:mb-6 border border-white/20 text-xs sm:text-sm" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(4px)'
              }}>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2" />
                <span className="font-medium">#1 in Customer Satisfaction 2021</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                At Regional EU Bank <span className="text-blue-300">Banking</span> is what we <span className="text-emerald-300">do</span>
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                We believe that the way we choose to bank can mirror the way we choose to live – by putting good before greed and people before profit. Banking with a social conscience since 1890.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/register" className="text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:brightness-110 transition flex items-center justify-center text-sm sm:text-base" style={{
                  background: '#10b981'
                }}>
                  Open Free Account <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link to="/support" className="text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:brightness-110 transition border border-white/20 text-center text-sm sm:text-base" style={{
                  background: 'rgba(255, 255, 255, 0.1)'
                }}>
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500" style={{
                background: 'rgba(255, 255, 255, 0.1)'
              }}>
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="text-sm font-medium text-blue-200">Account Overview</span>
                  <Smartphone className="w-5 h-5 text-blue-200" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">£24,562.80</div>
                <div className="text-emerald-300 text-sm mb-6 sm:mb-8">+ £1,240.00 this month</div>
                <div className="space-y-3">
                  {[
                    { name: "Salary Deposit", amount: "+£3,200.00", pos: true },
                    { name: "Mortgage Payment", amount: "-£1,150.00", pos: false },
                    { name: "Grocery Shopping", amount: "-£85.40", pos: false }
                  ].map((tx, i) => (
                    <div key={i} className="flex justify-between items-center rounded-lg p-3" style={{
                      background: 'rgba(255, 255, 255, 0.05)'
                    }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                          background: 'rgba(255, 255, 255, 0.2)'
                        }}>
                          {tx.pos ? <TrendingUp className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                        </div>
                        <div className="text-sm">{tx.name}</div>
                      </div>
                      <div className={`text-sm font-medium ${tx.pos ? 'text-emerald-300' : 'text-white'}`}>{tx.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Delivering the Best Consulting Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              At Regional EU Bank we believe that the way we choose to bank can mirror the way we choose to live – by putting good before greed and people before profit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 group">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition`}>
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.desc}</p>
                <Link to="/support" className="text-[#1e3a8a] font-semibold flex items-center hover:underline text-sm sm:text-base">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Tabs Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Banking Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              From personal savings to business lending and ethical mortgages, we have solutions tailored to your needs.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex bg-gray-100 rounded-xl p-1 flex-wrap justify-center">
              {[
                { id: 'personal', label: 'Personal Banking' },
                { id: 'business', label: 'Charity & Business' },
                { id: 'mortgage', label: 'Mortgages' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all m-0.5 ${
                    activeTab === tab.id
                      ? 'bg-[#1e3a8a] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {(activeTab === 'personal' ? personalProducts : activeTab === 'business' ? businessProducts : mortgageProducts).map((product, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-xl transition border border-gray-100 group">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${product.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition`}>
                  {product.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{product.desc}</p>
                <Link to={`/${activeTab === 'personal' ? (idx === 0 ? 'current_account' : idx === 1 ? 'instant_access' : '35day') : activeTab === 'business' ? (idx === 0 ? 'business_current_account' : idx === 1 ? 'business_loan' : idx === 2 ? 'charity_loan' : 'social_housing') : 'mortgage'}`} className="text-[#1e3a8a] font-semibold flex items-center hover:underline text-sm sm:text-base">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 lg:py-20" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 mb-4 border border-[#1e3a8a]/20 text-xs sm:text-sm bg-blue-50 text-[#1e3a8a]">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="font-medium">Our Vision</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                We want to be the socially responsible bank of choice
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                We are an enduring ethical bank that exists to enable positive social impact. Founded by William Booth in 1890, we have been at the forefront of social impact banking for over 130 years.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Giving money real meaning",
                  "Supporting charities and social enterprises",
                  "Prioritising people before profit",
                  "Award-winning customer service"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/vision" className="inline-flex items-center text-[#1e3a8a] font-semibold hover:underline text-sm sm:text-base">
                Read Our Vision <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80" 
                  alt="Professional business meeting" 
                  className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 lg:p-6 hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">#1 Rated</div>
                    <div className="text-xs text-gray-500">Charity Finance Survey</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Housing Highlight */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80" 
                  alt="Modern residential homes" 
                  className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center rounded-full px-3 py-1 mb-4 border border-emerald-200 text-xs sm:text-sm bg-emerald-50 text-emerald-700">
                <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="font-medium">Social Housing Finance</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Power to change lives for the better
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Regional EU Bank Ltd has proudly supported the social housing sector for many years. We provide funding to Registered Providers of Affordable Housing and Housing Associations, so that they can provide more affordable homes for people on low incomes.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-[#1e3a8a]">£250k-£2.75m</div>
                  <div className="text-xs text-gray-500 mt-1">Lending Range</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-[#1e3a8a]">25 Years</div>
                  <div className="text-xs text-gray-500 mt-1">Max Repayment Term</div>
                </div>
              </div>
              <Link to="/social_housing" className="inline-flex items-center text-[#1e3a8a] font-semibold hover:underline text-sm sm:text-base">
                Explore Social Housing Finance <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mortgage Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 mb-4 border border-purple-200 text-xs sm:text-sm bg-purple-50 text-purple-700">
              <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="font-medium">Mortgages</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Mortgages with a Social Conscience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Award-winning customer service and a more ethical approach to banking. Supporting Key Workers and Shared Ownership buyers.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {mortgageProducts.map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 group text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${product.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition`}>
                  {product.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{product.desc}</p>
                <Link to="/mortgage" className="text-[#1e3a8a] font-semibold flex items-center justify-center hover:underline text-sm sm:text-base">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 lg:py-24" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #172554 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Let's Grow Business with a New Savings Account
          </h2>
          <p className="text-blue-100 mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            In order to earn a higher rate of interest, our 35 Day Notice Account requires advance notice of 35 days before you can withdraw any of your money. While you earn interest on your savings, you will have the comfort that your money will make a positive difference to other people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/register" className="text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:brightness-110 transition flex items-center justify-center text-sm sm:text-base" style={{
              background: '#10b981'
            }}>
              Open an Account <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link to="/35day" className="text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:brightness-110 transition border border-white/20 text-center text-sm sm:text-base" style={{
              background: 'rgba(255, 255, 255, 0.1)'
            }}>
              View Savings Rates
            </Link>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 mb-4 border border-amber-200 text-xs sm:text-sm bg-amber-50 text-amber-700">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="font-medium">Support</span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                We take our customers very seriously
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Having payment difficulties? We all know that life can throw all sorts of things at you. If you find that you are starting to worry about your money, it can be tough to acknowledge you have a problem. But you're not alone – we are here to help you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Call Anytime</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{PHONE}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Email Us</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{EMAIL}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e3a8a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Visit Us</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{ADDRESS}</div>
                  </div>
                </div>
              </div>
              <Link to="/support" className="inline-flex items-center text-[#1e3a8a] font-semibold hover:underline text-sm sm:text-base">
                Visit Support Center <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&q=80" 
                  alt="Customer support representative" 
                  className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

          </div>
  );
}