import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Eye, EyeOff, ArrowLeft, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (register(formData.name, formData.email, formData.password)) {
      navigate('/dashboard');
    }
  };

  const features = [
    "Free checking account",
    "No monthly fees",
    "Instant notifications",
    "Virtual cards"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {/* Left Side - Benefits */}
        <div className="hidden md:flex flex-col justify-center">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-bank-primary mb-8 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
          </Link>
          <h2 className="text-3xl font-bold text-bank-dark mb-4">Join NovaBank Today</h2>
          <p className="text-gray-600 mb-8">Open your account in minutes and start enjoying modern banking features.</p>
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="md:hidden flex justify-center mb-6">
            <div className="w-12 h-12 bg-bank-primary rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center text-bank-dark mb-2">Create Account</h1>
          <p className="text-gray-500 text-center mb-8">Start your journey with us</p>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 text-center">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition"
                placeholder="Alex Johnson"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition"
                placeholder="alex@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 rounded border-gray-300 text-bank-primary focus:ring-bank-primary" required />
              <span className="ml-2 text-sm text-gray-600">
                I agree to the <Link to="#" className="text-bank-primary hover:underline">Terms of Service</Link> and <Link to="#" className="text-bank-primary hover:underline">Privacy Policy</Link>
              </span>
            </div>
            
            <button
              type="submit"
              className="w-full bg-bank-primary text-white py-3 rounded-xl font-semibold hover:bg-blue-900 transition shadow-lg shadow-blue-900/20"
            >
              Create Free Account
            </button>
          </form>
          
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-bank-primary font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}