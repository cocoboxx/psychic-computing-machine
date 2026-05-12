import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try any email/password.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-bank-primary mb-6 sm:mb-8 transition text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bank-primary rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>
          
          <h1 className="text-xl sm:text-2xl font-bold text-center text-bank-dark mb-2">Welcome Back</h1>
          <p className="text-gray-500 text-center mb-6 sm:mb-8 text-sm sm:text-base">Sign in to access your account</p>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 text-center">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm sm:text-base"
                placeholder="alex@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition pr-12 text-sm sm:text-base"
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
            
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-bank-primary focus:ring-bank-primary" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <Link to="#" className="text-bank-primary hover:underline">Forgot password?</Link>
            </div>
            
            <button
              type="submit"
              className="w-full bg-bank-primary text-white py-3 rounded-xl font-semibold hover:bg-blue-900 transition shadow-lg shadow-blue-900/20 text-sm sm:text-base active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-center mt-6 text-gray-600 text-sm sm:text-base">
            Don't have an account?{' '}
            <Link to="/register" className="text-bank-primary font-semibold hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}