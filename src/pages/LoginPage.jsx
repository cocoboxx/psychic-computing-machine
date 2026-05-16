import { Link } from 'react-router-dom';
import { Shield, Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login submitted:', formData);
  };

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

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#1e3a8a]" />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Sign in to your account</h1>
                <p className="text-gray-500 text-sm sm:text-base">Enter your credentials to access your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Username / Email</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
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

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300 text-[#1e3a8a] focus:ring-[#1e3a8a]"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-[#1e3a8a] hover:underline font-medium">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-900 transition text-sm sm:text-base"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm sm:text-base">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-[#1e3a8a] font-semibold hover:underline">
                    Register here
                  </Link>
                </p>
              </div>
            </div>
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