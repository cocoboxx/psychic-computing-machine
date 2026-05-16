import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, MessageCircle, Clock, HelpCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
  };

  const faqs = [
    { q: "How do I open an account?", a: "You can open an account by visiting our Online Enrollment page and completing the registration form. You'll need to provide proof of identity and address." },
    { q: "What are your interest rates?", a: "Our 35 Day Notice Account currently offers 1.85% AER variable. Rates are subject to change, so please check our savings page for the latest information." },
    { q: "How do I reset my password?", a: "Click on 'Forgot password?' on the login page and follow the instructions to reset your password via email." },
    { q: "What is the lending range for business loans?", a: "We offer business loans ranging from £250,000 to £2.75 million, with flexible repayment terms up to 25 years." },
    { q: "How can I contact customer support?", a: "You can reach us by phone, email, or through this contact form. Our team is available during business hours to assist you." }
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
              <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 text-amber-300 mr-2" />
              <span className="font-medium">Support Center</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              We take our customers very seriously
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Having payment difficulties? We all know that life can throw all sorts of things at you. But you're not alone – we are here to help you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-[#1e3a8a]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">Call Anytime</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3">Speak directly with our support team</p>
              <a href="tel:+447000000000" className="text-[#1e3a8a] font-semibold text-sm sm:text-base">+44 7000 000000</a>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">Email Us</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3">Send us your queries anytime</p>
              <a href="mailto:contact@example.com" className="text-[#1e3a8a] font-semibold text-sm sm:text-base">contact@example.com</a>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition border border-gray-100 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">Visit Us</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3">Come to our headquarters</p>
              <span className="text-[#1e3a8a] font-semibold text-sm sm:text-base">Faith House, 23-24 Lovat Lane, London EC3R 8EB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form + FAQ */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or question..."
                    rows={5}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-900 transition text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Find quick answers to common questions about our services.
              </p>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition"
                    >
                      <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">{faq.q}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}