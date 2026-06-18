import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, CreditCard, ArrowUpRight, ArrowDownLeft,
  Wallet, Bell, Settings, LogOut, TrendingUp, TrendingDown,
  Search, Filter, Download, Calendar, ChevronDown, ShoppingCart,
  Coffee, Home, Zap, Car, Heart, Briefcase, Gamepad2, Menu, X,
  ChevronRight, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TransactionsPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Transactions');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [dateRange, setDateRange] = useState('This Month');

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

  const categories = [
    { name: 'All', icon: <FileText className="w-4 h-4" /> },
    { name: 'Income', icon: <ArrowDownLeft className="w-4 h-4" /> },
    { name: 'Shopping', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'Food', icon: <Coffee className="w-4 h-4" /> },
    { name: 'Housing', icon: <Home className="w-4 h-4" /> },
    { name: 'Utilities', icon: <Zap className="w-4 h-4" /> },
    { name: 'Transport', icon: <Car className="w-4 h-4" /> },
    { name: 'Health', icon: <Heart className="w-4 h-4" /> },
    { name: 'Business', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Entertainment', icon: <Gamepad2 className="w-4 h-4" /> },
  ];

  const allTransactions = [
    { id: 1, name: 'Apple Store', category: 'Shopping', amount: -1299.00, date: '2026-05-23', icon: <ShoppingCart className="w-4 h-4" />, color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'Salary Deposit', category: 'Income', amount: 4500.00, date: '2026-05-22', icon: <ArrowDownLeft className="w-4 h-4" />, color: 'bg-emerald-100 text-emerald-600' },
    { id: 3, name: 'Starbucks', category: 'Food', amount: -24.50, date: '2026-05-22', icon: <Coffee className="w-4 h-4" />, color: 'bg-orange-100 text-orange-600' },
    { id: 4, name: 'Electric Bill', category: 'Utilities', amount: -145.00, date: '2026-05-20', icon: <Zap className="w-4 h-4" />, color: 'bg-yellow-100 text-yellow-600' },
    { id: 5, name: 'Rent Payment', category: 'Housing', amount: -1800.00, date: '2026-05-01', icon: <Home className="w-4 h-4" />, color: 'bg-purple-100 text-purple-600' },
    { id: 6, name: 'Uber Ride', category: 'Transport', amount: -32.40, date: '2026-05-19', icon: <Car className="w-4 h-4" />, color: 'bg-cyan-100 text-cyan-600' },
    { id: 7, name: 'Netflix', category: 'Entertainment', amount: -15.99, date: '2026-05-18', icon: <Gamepad2 className="w-4 h-4" />, color: 'bg-pink-100 text-pink-600' },
    { id: 8, name: 'Gym Membership', category: 'Health', amount: -49.99, date: '2026-05-15', icon: <Heart className="w-4 h-4" />, color: 'bg-red-100 text-red-600' },
    { id: 9, name: 'Client Payment', category: 'Business', amount: 2500.00, date: '2026-05-14', icon: <Briefcase className="w-4 h-4" />, color: 'bg-emerald-100 text-emerald-600' },
    { id: 10, name: 'Grocery Store', category: 'Food', amount: -156.30, date: '2026-05-12', icon: <Coffee className="w-4 h-4" />, color: 'bg-orange-100 text-orange-600' },
    { id: 11, name: 'Gas Station', category: 'Transport', amount: -58.00, date: '2026-05-10', icon: <Car className="w-4 h-4" />, color: 'bg-cyan-100 text-cyan-600' },
    { id: 12, name: 'Online Course', category: 'Business', amount: -199.00, date: '2026-05-08', icon: <Briefcase className="w-4 h-4" />, color: 'bg-indigo-100 text-indigo-600' },
  ];

  const filteredTransactions = allTransactions.filter(tx => {
    const matchesSearch = tx.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFilter === 'All' || tx.category === selectedFilter;
    return matchesSearch && matchesCategory;
  });

  const totalIncome = filteredTransactions.filter(tx => tx.amount > 0).reduce((sum, tx) => sum + tx.amount, 0);
  const totalExpenses = filteredTransactions.filter(tx => tx.amount < 0).reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

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
              <h1 className="text-2xl font-bold text-bank-dark">Transactions</h1>
              <p className="text-gray-500 text-sm">View and manage your transaction history</p>
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
            <p className="text-gray-500 text-sm">View your</p>
            <h1 className="text-xl font-bold text-bank-dark">Transaction History</h1>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium mb-1">Total Transactions</h3>
              <p className="text-lg sm:text-2xl font-bold text-bank-dark">{filteredTransactions.length}</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium mb-1">Total Income</h3>
              <p className="text-lg sm:text-2xl font-bold text-emerald-600">+${totalIncome.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                  <TrendingDown className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium mb-1">Total Expenses</h3>
              <p className="text-lg sm:text-2xl font-bold text-red-600">-${totalExpenses.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Wallet className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-gray-500 text-xs sm:text-sm font-medium mb-1">Net Balance</h3>
              <p className="text-lg sm:text-2xl font-bold text-bank-dark">${(totalIncome - totalExpenses).toLocaleString()}</p>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-bank-primary focus:ring-2 focus:ring-blue-100 outline-none transition text-sm sm:text-base"
                />
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition active:scale-95 ${filterOpen ? 'border-bank-primary text-bank-primary bg-blue-50' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                >
                  <Filter className="w-5 h-5" />
                  <span className="text-sm font-medium hidden sm:inline">Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition active:scale-95">
                  <Download className="w-5 h-5" />
                  <span className="text-sm font-medium hidden sm:inline">Export</span>
                </button>
              </div>
            </div>

            {/* Category Filters */}
            {filterOpen && (
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedFilter(cat.name)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition active:scale-95 ${selectedFilter === cat.name
                          ? 'bg-bank-primary text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                      {cat.icon}
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Transactions List */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <h3 className="text-base sm:text-lg font-bold text-bank-dark">All Transactions</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{dateRange}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <div className="divide-y divide-gray-50">
              {filteredTransactions.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-lg font-medium">No transactions found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </div>
              ) : (
                filteredTransactions.map((tx) => (
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
                ))
              )}
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