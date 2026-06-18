import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, CreditCard, ArrowUpRight, ArrowDownLeft,
  Wallet, Bell, Settings, LogOut, User, Shield, Moon, Sun,
  Globe, ChevronRight, Camera, Mail, Phone, MapPin, Key,
  Fingerprint, Smartphone, Laptop, Tablet, Trash2, AlertTriangle,
  Check, X, Menu, ChevronDown, Eye, EyeOff, Lock, Unlock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Settings');
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [biometric, setBiometric] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, mobileIcon: <LayoutDashboard className="w-6 h-6" />, path: '/dashboard' },
    { name: 'Cards', icon: <CreditCard className="w-5 h-5" />, mobileIcon: <CreditCard className="w-6 h-6" />, path: '/cards' },
    { name: 'Transactions', icon: <ArrowUpRight className="w-5 h-5" />, mobileIcon: <ArrowUpRight className="w-6 h-6" />, path: '/transactions' },
    { name: 'Wallet', icon: <Wallet className="w-5 h-5" />, mobileIcon: <Wallet className="w-6 h-6" />, path: '/wallet' },
    { name: 'Notifications', icon: <Bell className="w-5 h-5" />, mobileIcon: <Bell className="w-6 h-6" />, path: '/notifications' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, mobileIcon: <Settings className="w-6 h-6" />, path: '/settings' },
  ];

  const settingsTabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'devices', label: 'Devices', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'danger', label: 'Danger Zone', icon: <AlertTriangle className="w-4 h-4" /> },
  ];

  const devices = [
    { id: 1, name: 'iPhone 15 Pro', type: 'mobile', lastActive: 'Active now', location: 'New York, USA', icon: <Smartphone className="w-5 h-5" /> },
    { id: 2, name: 'MacBook Pro', type: 'desktop', lastActive: '2 hours ago', location: 'New York, USA', icon: <Laptop className="w-5 h-5" /> },
    { id: 3, name: 'iPad Air', type: 'tablet', lastActive: '3 days ago', location: 'Boston, USA', icon: <Tablet className="w-5 h-5" /> },
  ];

  const toggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row pb-20 lg:pb-0">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col sticky top-0 h-screen shrink-0">
        <div className="p-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-bank-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-bank-primary">Regional EU Bank</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { setActiveTab(item.name); navigate(item.path); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${activeTab === item.name
                  ? 'bg-bank-primary text-white shadow-lg shadow-blue-900/20'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-bank-primary rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-bank-primary">Regional EU Bank</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-bank-primary rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-bank-primary">Menu</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => { setActiveTab(item.name); setMobileMenuOpen(false); navigate(item.path); }}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-xl transition text-lg ${activeTab === item.name
                    ? 'bg-bank-primary text-white shadow-lg shadow-blue-900/20'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
                <ChevronRight className="w-5 h-5 ml-auto opacity-50" />
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-4">
              <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-4 rounded-xl text-red-600 hover:bg-red-50 transition text-lg">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto min-w-0">
        {/* Desktop Header */}
        <header className="hidden lg:flex bg-white border-b border-gray-200 sticky top-0 z-30 px-8 py-4">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-2xl font-bold text-bank-dark">Settings</h1>
              <p className="text-gray-500 text-sm">Manage your account preferences</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-bank-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name?.[0] || 'U'}
                </div>
                <div className="hidden xl:block">
                  <p className="text-sm font-semibold text-bank-dark">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 lg:space-y-8">
          {/* Mobile Welcome */}
          <div className="lg:hidden">
            <p className="text-gray-500 text-sm">Manage your</p>
            <h1 className="text-xl font-bold text-bank-dark">Account Settings</h1>
          </div>

          {/* Settings Navigation */}
          <div className="bg-white rounded-xl p-1.5 shadow-sm border border-gray-100 flex overflow-x-auto">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSettingsTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition flex-1 justify-center ${activeSettingsTab === tab.id
                    ? 'bg-bank-primary text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeSettingsTab === 'profile' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-bank-primary rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                      {user?.name?.[0] || 'U'}
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-bank-primary transition">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-bank-dark">{user?.name || 'Alex Johnson'}</h3>
                    <p className="text-gray-500 text-sm">Premium Member since 2024</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3">
                      <span className="flex items-center space-x-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                        <Mail className="w-3 h-3" />
                        <span>alex@Regional EU Bank.com</span>
                      </span>
                      <span className="flex items-center space-x-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                        <Phone className="w-3 h-3" />
                        <span>+1 (555) 123-4567</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info Form */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-bank-dark mb-4">Personal Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input type="text" defaultValue={user?.name || 'Alex Johnson'} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" defaultValue="alex@RegionaleUbank.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth</label>
                    <input type="date" defaultValue="1990-05-15" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="text" defaultValue="123 Finance Street, New York, NY 10001" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="bg-bank-primary text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition text-sm font-medium active:scale-95">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Appearance */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-bank-dark mb-4">Appearance</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      {darkMode ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-gray-600" />}
                    </div>
                    <div>
                      <p className="font-medium text-bank-dark text-sm sm:text-base">Dark Mode</p>
                      <p className="text-xs text-gray-500">Switch between light and dark themes</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative w-12 h-7 rounded-full transition ${darkMode ? 'bg-bank-primary' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${darkMode ? 'translate-x-5' : ''}`}></span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeSettingsTab === 'security' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Password */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-bank-dark mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label>
                    <input type={showPassword ? 'text' : 'password'} defaultValue="password123" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm pr-10" />
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
                    <input type="password" placeholder="Enter new password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm New Password</label>
                    <input type="password" placeholder="Confirm new password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="bg-bank-primary text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition text-sm font-medium active:scale-95">
                    Update Password
                  </button>
                </div>
              </div>

              {/* 2FA */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Key className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-bank-dark text-sm sm:text-base">Two-Factor Authentication</p>
                      <p className="text-xs text-gray-500">Add an extra layer of security</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`relative w-12 h-7 rounded-full transition ${twoFactor ? 'bg-emerald-500' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${twoFactor ? 'translate-x-5' : ''}`}></span>
                  </button>
                </div>
                {twoFactor && (
                  <div className="mt-4 p-4 bg-emerald-50 rounded-xl">
                    <div className="flex items-center space-x-2 text-emerald-700 text-sm">
                      <Check className="w-4 h-4" />
                      <span>2FA is enabled via Authenticator App</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Biometric */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Fingerprint className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-bank-dark text-sm sm:text-base">Biometric Login</p>
                      <p className="text-xs text-gray-500">Use fingerprint or face recognition</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setBiometric(!biometric)}
                    className={`relative w-12 h-7 rounded-full transition ${biometric ? 'bg-emerald-500' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${biometric ? 'translate-x-5' : ''}`}></span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeSettingsTab === 'notifications' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-bank-dark">Notification Preferences</h3>
                <p className="text-sm text-gray-500 mt-1">Choose how you want to be notified</p>
              </div>
              <div className="divide-y divide-gray-50">
                {[
                  { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email', icon: <Mail className="w-5 h-5" /> },
                  { key: 'push', label: 'Push Notifications', desc: 'Receive push notifications on your device', icon: <Bell className="w-5 h-5" /> },
                  { key: 'sms', label: 'SMS Notifications', desc: 'Receive text messages for important alerts', icon: <Phone className="w-5 h-5" /> },
                  { key: 'marketing', label: 'Marketing Emails', desc: 'Receive promotional offers and news', icon: <Globe className="w-5 h-5" /> },
                ].map((item) => (
                  <div key={item.key} className="p-4 sm:p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-bank-dark text-sm sm:text-base">{item.label}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleNotification(item.key)}
                      className={`relative w-12 h-7 rounded-full transition ${notifications[item.key] ? 'bg-bank-primary' : 'bg-gray-300'}`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${notifications[item.key] ? 'translate-x-5' : ''}`}></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Devices Tab */}
          {activeSettingsTab === 'devices' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-100">
                  <h3 className="text-base sm:text-lg font-bold text-bank-dark">Active Devices</h3>
                  <p className="text-sm text-gray-500 mt-1">Manage devices that have access to your account</p>
                </div>
                <div className="divide-y divide-gray-50">
                  {devices.map((device) => (
                    <div key={device.id} className="p-4 sm:p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600">
                          {device.icon}
                        </div>
                        <div>
                          <p className="font-medium text-bank-dark text-sm sm:text-base">{device.name}</p>
                          <p className="text-xs text-gray-500">{device.location} • {device.lastActive}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {device.lastActive === 'Active now' && (
                          <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">Current</span>
                        )}
                        <button className="p-2 rounded-lg hover:bg-red-100 text-gray-400 hover:text-red-600 transition">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Danger Zone */}
          {activeSettingsTab === 'danger' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-100">
                  <h3 className="text-base sm:text-lg font-bold text-red-600 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Danger Zone</span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Irreversible and destructive actions</p>
                </div>
                <div className="divide-y divide-gray-50">
                  <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-bank-dark text-sm sm:text-base">Delete Account</p>
                      <p className="text-xs text-gray-500 mt-1">Permanently delete your account and all data</p>
                    </div>
                    <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition text-sm font-medium active:scale-95">
                      Delete Account
                    </button>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-bank-dark text-sm sm:text-base">Export Data</p>
                      <p className="text-xs text-gray-500 mt-1">Download a copy of all your personal data</p>
                    </div>
                    <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition text-sm font-medium active:scale-95">
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.name}
              onClick={() => { setActiveTab(item.name); navigate(item.path); }}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition ${activeTab === item.name ? 'text-bank-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {item.mobileIcon}
              <span className="text-[10px] font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}