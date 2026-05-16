import { Link } from 'react-router-dom';
import { Shield, Eye, EyeOff, User, Mail, Lock, Phone, MapPin, CreditCard, ArrowLeft, CheckCircle, Upload } from 'lucide-react';
import { useState } from 'react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
    accountType: 'personal',
    username: '',
    password: '',
    confirmPassword: '',
    passportFile: null,
    idCardFile: null,
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Registration submitted:', formData);
    }
  };

  const steps = [
    { id: 1, label: 'Personal Info' },
    { id: 2, label: 'Account Details' },
    { id: 3, label: 'Verification' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-[#0f1f3d] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold">Regional EU Bank</span>
          </Link>
          <Link to="/" className="text-sm text-gray-300 hover:text-white flex items-center transition">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Register Form */}
      <div className="flex-1 flex items-start justify-center px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Online Enrollment</h1>
                <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                  Create your account to access business and personal banking services
                </p>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  {steps.map((s, idx) => (
                    <div key={s.id} className="flex items-center">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition ${
                        step >= s.id
                          ? 'bg-[#1e3a8a] text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {step > s.id ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> : s.id}
                      </div>
                      <span className={`hidden sm:block ml-2 text-xs sm:text-sm font-medium ${
                        step >= s.id ? 'text-[#1e3a8a]' : 'text-gray-400'
                      }`}>
                        {s.label}
                      </span>
                      {idx < steps.length - 1 && (
                        <div className={`w-6 sm:w-10 h-0.5 mx-1 sm:mx-2 ${
                          step > s.id ? 'bg-[#1e3a8a]' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {step === 1 && (
                  <div className="space-y-4 sm:space-y-5 animate-fadeIn">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="johndoe@example.com"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 7000 000000"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main Street"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="London"
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Postcode</label>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          placeholder="EC3R 8EB"
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="United Kingdom"
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Account Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center justify-center p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition ${
                          formData.accountType === 'personal' ? 'border-[#1e3a8a] bg-blue-50' : 'border-gray-200'
                        }`}>
                          <input
                            type="radio"
                            name="accountType"
                            value="personal"
                            checked={formData.accountType === 'personal'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <User className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-[#1e3a8a]" />
                            <span className="text-xs sm:text-sm font-medium">Personal</span>
                          </div>
                        </label>
                        <label className={`flex items-center justify-center p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition ${
                          formData.accountType === 'business' ? 'border-[#1e3a8a] bg-blue-50' : 'border-gray-200'
                        }`}>
                          <input
                            type="radio"
                            name="accountType"
                            value="business"
                            checked={formData.accountType === 'business'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-[#1e3a8a]" />
                            <span className="text-xs sm:text-sm font-medium">Business</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 sm:space-y-5 animate-fadeIn">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Username</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="johndoe123"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Create a strong password"
                          className="w-full pl-10 pr-12 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                          className="w-full pl-10 pr-12 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none transition text-sm sm:text-base"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 sm:space-y-5 animate-fadeIn">
                    <div className="bg-blue-50 rounded-xl p-4 sm:p-5 border border-blue-100">
                      <h3 className="font-semibold text-[#1e3a8a] mb-2 text-sm sm:text-base">Identity Verification</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-4">
                        To comply with regulatory requirements, please upload a copy of your passport or government-issued ID.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Passport</label>
                          <div className="relative">
                            <input
                              type="file"
                              name="passportFile"
                              onChange={handleChange}
                              accept=".jpg,.jpeg,.png,.pdf"
                              className="hidden"
                              id="passport-upload"
                            />
                            <label
                              htmlFor="passport-upload"
                              className="flex items-center justify-center w-full p-4 sm:p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#1e3a8a] hover:bg-blue-50 transition"
                            >
                              <div className="text-center">
                                <Upload className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-400" />
                                <span className="text-xs sm:text-sm text-gray-600">
                                  {formData.passportFile ? formData.passportFile.name : 'Click to upload passport'}
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Upload ID Card (Optional)</label>
                          <div className="relative">
                            <input
                              type="file"
                              name="idCardFile"
                              onChange={handleChange}
                              accept=".jpg,.jpeg,.png,.pdf"
                              className="hidden"
                              id="idcard-upload"
                            />
                            <label
                              htmlFor="idcard-upload"
                              className="flex items-center justify-center w-full p-4 sm:p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#1e3a8a] hover:bg-blue-50 transition"
                            >
                              <div className="text-center">
                                <Upload className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-gray-400" />
                                <span className="text-xs sm:text-sm text-gray-600">
                                  {formData.idCardFile ? formData.idCardFile.name : 'Click to upload ID card'}
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a]"
                        required
                      />
                      <label className="text-xs sm:text-sm text-gray-600">
                        I agree to the{' '}
                        <Link to="/terms" className="text-[#1e3a8a] hover:underline font-medium">Terms and Conditions</Link>
                        {' '}and{' '}
                        <Link to="/privacy" className="text-[#1e3a8a] hover:underline font-medium">Privacy Policy</Link>
                        . I confirm that all information provided is accurate and complete.
                      </label>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition text-sm sm:text-base"
                    >
                      Previous
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex-1 bg-[#1e3a8a] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-900 transition text-sm sm:text-base"
                  >
                    {step === 3 ? 'Complete Enrollment' : 'Continue'}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm sm:text-base">
                  Already have an account?{' '}
                  <Link to="/login" className="text-[#1e3a8a] font-semibold hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 sm:mt-6 bg-white rounded-xl p-4 sm:p-5 border border-gray-200 shadow-sm">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Regional EU Bank Limited provides information about and access to accounts and financial services provided by Regional EU Bank Limited and its affiliates. Terms, conditions and fees for accounts, products, programs and services are subject to change. Not all accounts, products, and services as well as pricing described here are available in all jurisdictions or to all customers. Your eligibility for a particular product and service is subject to a final determination by Regional EU Bank Limited.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f1f3d] text-gray-400 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-sm sm:text-base font-bold text-white">Regional EU Bank</span>
          </div>
          <p className="text-xs sm:text-sm">© 2026 Regional EU Bank Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}