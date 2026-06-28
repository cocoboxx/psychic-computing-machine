import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, CreditCard, ArrowUpRight, ArrowDownLeft,
  Wallet, Bell, Settings, LogOut, TrendingUp, TrendingDown,
  Send, Download, ShoppingCart, Coffee, Home, Zap, Menu, X,
  ChevronRight
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync activeTab with current route
  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path === '/dashboard' || path === '/') return 'Dashboard';
    if (path === '/cards') return 'Cards';
    if (path === '/transactions') return 'Transactions';
    if (path === '/wallet') return 'Wallet';
    if (path === '/notifications') return 'Notifications';
    if (path === '/settings') return 'Settings';
    return 'Dashboard';
  };

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath());

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleNavigation = (tabName, path) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    navigate(path);
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, mobileIcon: <LayoutDashboard className="w-6 h-6" />, path: '/dashboard' },
    { name: 'Cards', icon: <CreditCard className="w-5 h-5" />, mobileIcon: <CreditCard className="w-6 h-6" />, path: '/cards' },
    { name: 'Transactions', icon: <ArrowUpRight className="w-5 h-5" />, mobileIcon: <ArrowUpRight className="w-6 h-6" />, path: '/transactions' },
    { name: 'Wallet', icon: <Wallet className="w-5 h-5" />, mobileIcon: <Wallet className="w-6 h-6" />, path: '/wallet' },
    { name: 'Notifications', icon: <Bell className="w-5 h-5" />, mobileIcon: <Bell className="w-6 h-6" />, path: '/notifications' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, mobileIcon: <Settings className="w-6 h-6" />, path: '/settings' },
  ];

  const stats = [
    { title: 'Total Balance', amount: '$24,562.80', change: '+12.5%', up: true, icon: <Wallet className="w-5 h-5" /> },
    { title: 'Income', amount: '$8,240.00', change: '+8.2%', up: true, icon: <ArrowDownLeft className="w-5 h-5" /> },
    { title: 'Expenses', amount: '$3,450.20', change: '-2.4%', up: false, icon: <ArrowUpRight className="w-5 h-5" /> },
    { title: 'Savings', amount: '$12,800.00', change: '+15.3%', up: true, icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const transactions = [
    { id: 1, name: 'Apple Store', category: 'Electronics', amount: -1299.00, date: 'Today', icon: <ShoppingCart className="w-4 h-4" />, color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'Salary Deposit', category: 'Income', amount: 4500.00, date: 'Yesterday', icon: <Download className="w-4 h-4" />, color: 'bg-emerald-100 text-emerald-600' },
    { id: 3, name: 'Starbucks', category: 'Food', amount: -24.50, date: 'Yesterday', icon: <Coffee className="w-4 h-4" />, color: 'bg-orange-100 text-orange-600' },
    { id: 4, name: 'Electric Bill', category: 'Utilities', amount: -145.00, date: 'May 8', icon: <Zap className="w-4 h-4" />, color: 'bg-yellow-100 text-yellow-600' },
    { id: 5, name: 'Rent Payment', category: 'Housing', amount: -1800.00, date: 'May 1', icon: <Home className="w-4 h-4" />, color: 'bg-purple-100 text-purple-600' },
  ];

  const quickActions = [
    { name: 'Send', 
      icon: <Send className="w-5 h-5" />, 
      color: 'bg-blue-500' ,
      onClick: () => navigate('/send') 
    },
    { name: 'Request', 
      icon: <Download className="w-5 h-5" />,
       color: 'bg-emerald-500' ,
      onClick: () => {navigate('/request_money')} 
      },
    { name: 'Top Up',
       icon: <CreditCard className="w-5 h-5" />, 
       color: 'bg-purple-500',
       onClick: () => {} 
       },
    { name: 'More', 
      icon: <Settings className="w-5 h-5" />, 
      color: 'bg-gray-500',
    onClick: () => navigate('/settings') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row pb-20 lg:pb-0">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col sticky top-0 h-screen shrink-0">
        <div className="p-6 flex items-center space-x-2">
        
          <span className="text-xl font-bold text-bank-primary">Regional EU Bank</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name, item.path)}
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
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
         
            <span className="text-lg font-bold text-bank-primary">Regional EU Bank</span>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/notifications')}
              className="relative p-2 text-gray-400 hover:text-gray-600 transition"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            >
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
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.name, item.path)}
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
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-4 rounded-xl text-red-600 hover:bg-red-50 transition text-lg"
              >
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
              <h1 className="text-2xl font-bold text-bank-dark">{activeTab}</h1>
              <p className="text-gray-500 text-sm">Welcome back, {user?.name || 'User'}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/notifications')}
                className="relative p-2 text-gray-400 hover:text-gray-600 transition"
              >
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
          {/* Mobile Welcome Section */}
          <div className="lg:hidden">
            <p className="text-gray-500 text-sm">Welcome back,</p>
            <h1 className="text-xl font-bold text-bank-dark flex items-center gap-2">
              {user?.name || 'User'}
              <span className="text-xs bg-bank-primary/10 text-bank-primary px-2 py-1 rounded-full font-medium">Premium</span>
            </h1>
          </div>

          {/* Stats Grid - Mobile Optimized */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${stat.up ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                    {stat.icon}
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold flex items-center ${stat.up ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.up ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-500 text-xs sm:text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-lg sm:text-2xl font-bold text-bank-dark">{stat.amount}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              {/* Credit Card - Mobile Optimized with Guaranteed Background */}
              <div className="relative rounded-2xl p-5 sm:p-8 text-white shadow-xl overflow-hidden" style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #172554 100%)'
              }}>
                {/* Decorative circles - positioned to show on all screen sizes */}
                <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 rounded-full -mr-20 -mt-20 sm:-mr-32 sm:-mt-32 pointer-events-none" style={{
                  background: 'rgba(255, 255, 255, 0.1)'
                }}></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 rounded-full -ml-16 -mb-16 sm:-ml-24 sm:-mb-24 pointer-events-none" style={{
                  background: 'rgba(255, 255, 255, 0.05)'
                }}></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
                  background: 'rgba(96, 165, 250, 0.1)'
                }}></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <div>
                      <p className="text-blue-200 text-xs sm:text-sm mb-1">Current Balance</p>
                      <h2 className="text-2xl sm:text-4xl font-bold">$24,562.80</h2>
                    </div>
                    <CreditCard className="w-8 h-8 sm:w-12 sm:h-12 text-blue-200/50" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-blue-200 text-xs sm:text-sm mb-1">Card Holder</p>
                      <p className="font-semibold text-sm sm:text-lg tracking-wider">{user?.name || 'ALEX JOHNSON'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-200 text-xs sm:text-sm mb-1">Expires</p>
                      <p className="font-semibold text-sm sm:text-base">12/28</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions - Mobile Optimized */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {quickActions.map((action) => (
                  <button onClick={action.onClick} key={action.name} className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col items-center space-y-1.5 sm:space-y-2 group active:scale-95">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${action.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition`}>
                      {action.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{action.name}</span>
                  </button>
                ))}
              </div>

              {/* Recent Transactions - Mobile Optimized */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-bold text-bank-dark">Recent Transactions</h3>
                  <button 
                    onClick={() => navigate('/transactions')}
                    className="text-bank-primary text-xs sm:text-sm font-semibold hover:underline"
                  >
                    View All
                  </button>
                </div>
                <div className="divide-y divide-gray-50">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition active:bg-gray-100">
                      <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 ${tx.color} rounded-full flex items-center justify-center shrink-0`}>
                          {tx.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-bank-dark text-sm sm:text-base truncate">{tx.name}</p>
                          <p className="text-xs sm:text-sm text-gray-500">{tx.category} • {tx.date}</p>
                        </div>
                      </div>
                      <span className={`font-bold text-sm sm:text-base shrink-0 ml-2 ${tx.amount > 0 ? 'text-emerald-600' : 'text-bank-dark'}`}>
                        {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Mobile Optimized */}
            <div className="space-y-6 lg:space-y-8">
              {/* Monthly Spending */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-bank-dark mb-4 sm:mb-6">Monthly Budget</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Shopping', value: 65, color: 'bg-blue-500', amount: '$1,299' },
                    { label: 'Food & Dining', value: 45, color: 'bg-orange-500', amount: '$450' },
                    { label: 'Transport', value: 30, color: 'bg-purple-500', amount: '$280' },
                    { label: 'Entertainment', value: 20, color: 'bg-pink-500', amount: '$180' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs sm:text-sm mb-2">
                        <span className="font-medium text-gray-700">{item.label}</span>
                        <span className="text-gray-500">{item.amount}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full transition-all duration-500`} style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Savings Goal - Fixed for Mobile */}
              <div className="rounded-2xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden" style={{
                background: 'linear-gradient(135deg, #10b981 0%, #0d9488 50%, #0f766e 100%)'
              }}>
                {/* Decorative elements for visual interest */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 pointer-events-none" style={{
                  background: 'rgba(255, 255, 255, 0.1)'
                }}></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full -ml-12 -mb-12 pointer-events-none" style={{
                  background: 'rgba(255, 255, 255, 0.05)'
                }}></div>

                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-bold mb-2">Vacation Fund</h3>
                  <p className="text-emerald-100 text-xs sm:text-sm mb-4 sm:mb-6">Target: $5,000</p>
                  <div className="text-2xl sm:text-3xl font-bold mb-4">$3,240</div>
                  <div className="w-full rounded-full h-2.5 sm:h-3 mb-2" style={{
                    background: 'rgba(255, 255, 255, 0.2)'
                  }}>
                    <div className="h-2.5 sm:h-3 rounded-full" style={{
                      width: '65%',
                      background: '#ffffff'
                    }}></div>
                  </div>
                  <p className="text-emerald-100 text-xs sm:text-sm">65% completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name, item.path)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition ${activeTab === item.name
                  ? 'text-bank-primary'
                  : 'text-gray-400 hover:text-gray-600'
                }`}
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