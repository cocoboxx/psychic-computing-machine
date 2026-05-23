import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, CreditCard, ArrowUpRight, ArrowDownLeft,
  Wallet, Bell, Settings, LogOut, TrendingUp, TrendingDown,
  Send, Download, Plus, Minus, RefreshCw, DollarSign, Euro,
  PoundSterling, JapaneseYen, Bitcoin, ArrowRightLeft, Menu, X,
  ChevronRight, PiggyBank, Target, Landmark, Globe, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WalletPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Wallet');
  const [activeWalletTab, setActiveWalletTab] = useState('accounts');
  const [convertModal, setConvertModal] = useState(false);

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

  const accounts = [
    { id: 1, name: 'Main Checking', type: 'Checking', balance: 12540.50, currency: 'USD', icon: <DollarSign className="w-5 h-5" />, color: 'bg-blue-500', number: '**** 4521' },
    { id: 2, name: 'Savings Account', type: 'Savings', balance: 24800.00, currency: 'USD', icon: <PiggyBank className="w-5 h-5" />, color: 'bg-emerald-500', number: '**** 8834' },
    { id: 3, name: 'Euro Travel', type: 'Travel', balance: 5420.00, currency: 'EUR', icon: <Euro className="w-5 h-5" />, color: 'bg-purple-500', number: '**** 2291' },
    { id: 4, name: 'Crypto Wallet', type: 'Crypto', balance: 1.245, currency: 'BTC', icon: <Bitcoin className="w-5 h-5" />, color: 'bg-orange-500', number: '**** 7A3F' },
  ];

  const savingsGoals = [
    { id: 1, name: 'Emergency Fund', target: 10000, current: 7500, color: 'bg-blue-500' },
    { id: 2, name: 'New Car', target: 25000, current: 12000, color: 'bg-purple-500' },
    { id: 3, name: 'Holiday Trip', target: 5000, current: 3240, color: 'bg-emerald-500' },
  ];

  const recentTransfers = [
    { id: 1, from: 'Main Checking', to: 'Savings Account', amount: 500, date: 'Today', status: 'Completed' },
    { id: 2, from: 'Euro Travel', to: 'Main Checking', amount: 1200, date: 'Yesterday', status: 'Completed' },
    { id: 3, from: 'Main Checking', to: 'Crypto Wallet', amount: 500, date: 'May 20', status: 'Pending' },
  ];

  const totalBalance = accounts.reduce((sum, acc) => {
    if (acc.currency === 'USD') return sum + acc.balance;
    if (acc.currency === 'EUR') return sum + (acc.balance * 1.08);
    return sum;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row pb-20 lg:pb-0">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col sticky top-0 h-screen shrink-0">
        <div className="p-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-bank-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-bank-primary">NovaBank</span>
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
            <span className="text-lg font-bold text-bank-primary">NovaBank</span>
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
              <h1 className="text-2xl font-bold text-bank-dark">My Wallet</h1>
              <p className="text-gray-500 text-sm">Manage accounts and savings</p>
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
            <h1 className="text-xl font-bold text-bank-dark">Wallet & Accounts</h1>
          </div>

          {/* Total Balance Hero */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32 bg-white/10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full -ml-24 -mb-24 bg-white/5 pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-blue-200 text-sm mb-2">Total Net Worth</p>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h2>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition active:scale-95">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Add Funds</span>
                </button>
                <button 
                  onClick={() => setConvertModal(true)}
                  className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition active:scale-95"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                  <span className="text-sm font-medium">Convert</span>
                </button>
                <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition active:scale-95">
                  <Send className="w-4 h-4" />
                  <span className="text-sm font-medium">Send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="bg-white rounded-xl p-1.5 shadow-sm border border-gray-100 flex overflow-x-auto">
            {[
              { id: 'accounts', label: 'Accounts', icon: <Landmark className="w-4 h-4" /> },
              { id: 'savings', label: 'Savings Goals', icon: <Target className="w-4 h-4" /> },
              { id: 'transfers', label: 'Transfers', icon: <ArrowRightLeft className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveWalletTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition flex-1 justify-center ${activeWalletTab === tab.id
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

          {/* Accounts Tab */}
          {activeWalletTab === 'accounts' && (
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {accounts.map((account) => (
                <div key={account.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${account.color} rounded-xl flex items-center justify-center text-white`}>
                        {account.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-bank-dark text-sm sm:text-base">{account.name}</h3>
                        <p className="text-xs text-gray-500">{account.type} • {account.number}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">Active</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-1">Available Balance</p>
                    <p className="text-xl sm:text-2xl font-bold text-bank-dark">
                      {account.currency === 'BTC' ? '₿' : account.currency === 'EUR' ? '€' : '$'}
                      {account.balance.toLocaleString('en-US', { minimumFractionDigits: account.currency === 'BTC' ? 3 : 2 })}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{account.currency}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-sm font-medium active:scale-95">
                      <Plus className="w-4 h-4" />
                      <span>Deposit</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-sm font-medium active:scale-95">
                      <Minus className="w-4 h-4" />
                      <span>Withdraw</span>
                    </button>
                  </div>
                </div>
              ))}
              <button className="rounded-2xl p-4 sm:p-6 border-2 border-dashed border-gray-300 hover:border-bank-primary hover:bg-blue-50/50 transition flex flex-col items-center justify-center space-y-2 min-h-[200px] active:scale-95">
                <Plus className="w-8 h-8 text-gray-400" />
                <span className="text-sm font-medium text-gray-500">Open New Account</span>
              </button>
            </div>
          )}

          {/* Savings Goals Tab */}
          {activeWalletTab === 'savings' && (
            <div className="space-y-4 sm:space-y-6">
              {savingsGoals.map((goal) => (
                <div key={goal.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${goal.color} rounded-xl flex items-center justify-center text-white`}>
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-bank-dark">{goal.name}</h3>
                        <p className="text-xs text-gray-500">Target: ${goal.target.toLocaleString()}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-bank-dark">${goal.current.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
                    <div className={`${goal.color} h-3 rounded-full transition-all duration-500`} style={{ width: `${(goal.current / goal.target) * 100}%` }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <span>{Math.round((goal.current / goal.target) * 100)}% completed</span>
                    <span>${(goal.target - goal.current).toLocaleString()} remaining</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 rounded-xl bg-bank-primary text-white hover:bg-blue-700 transition text-sm font-medium active:scale-95">
                      Add Funds
                    </button>
                    <button className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition text-sm font-medium active:scale-95">
                      Edit Goal
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full rounded-2xl p-4 sm:p-6 border-2 border-dashed border-gray-300 hover:border-bank-primary hover:bg-blue-50/50 transition flex items-center justify-center space-x-2 active:scale-95">
                <Plus className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-500">Create New Goal</span>
              </button>
            </div>
          )}

          {/* Transfers Tab */}
          {activeWalletTab === 'transfers' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-bold text-bank-dark">Recent Transfers</h3>
                <button className="text-bank-primary text-xs sm:text-sm font-semibold hover:underline">View All</button>
              </div>
              <div className="divide-y divide-gray-50">
                {recentTransfers.map((tx) => (
                  <div key={tx.id} className="p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition active:bg-gray-100">
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${tx.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-yellow-100 text-yellow-600'}`}>
                        <ArrowRightLeft className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-bank-dark text-sm sm:text-base truncate">{tx.from} → {tx.to}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{tx.date} • <span className={tx.status === 'Completed' ? 'text-emerald-600' : 'text-yellow-600'}>{tx.status}</span></p>
                      </div>
                    </div>
                    <span className="font-bold text-sm sm:text-base shrink-0 ml-2 text-bank-dark">
                      ${tx.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
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