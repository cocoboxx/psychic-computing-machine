import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  CreditCard, Plus, Eye, EyeOff, Lock, Unlock,
  ArrowUpRight, ArrowDownLeft, Wallet, Bell, Settings,
  LogOut, LayoutDashboard, ArrowUpRight as ArrowIcon,
  Wallet as WalletIcon, Menu, X, ChevronRight, Shield,
  Star, Trash2, Copy, Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CardsPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Cards');
  const [showCardNumber, setShowCardNumber] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCard, setSelectedCard] = useState(0);
  const [freezeModal, setFreezeModal] = useState(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, mobileIcon: <LayoutDashboard className="w-6 h-6" />, path: '/dashboard' },
    { name: 'Cards', icon: <CreditCard className="w-5 h-5" />, mobileIcon: <CreditCard className="w-6 h-6" />, path: '/cards' },
    { name: 'Transactions', icon: <ArrowIcon className="w-5 h-5" />, mobileIcon: <ArrowIcon className="w-6 h-6" />, path: '/transactions' },
    { name: 'Wallet', icon: <WalletIcon className="w-5 h-5" />, mobileIcon: <WalletIcon className="w-6 h-6" />, path: '/wallet' },
    { name: 'Notifications', icon: <Bell className="w-5 h-5" />, mobileIcon: <Bell className="w-6 h-6" />, path: '/notifications' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, mobileIcon: <Settings className="w-6 h-6" />, path: '/settings' },
  ];

  const cards = [
    {
      id: 1,
      type: 'Visa Platinum',
      number: '4532 8847 1234 5678',
      holder: user?.name || 'ALEX JOHNSON',
      expiry: '12/28',
      cvv: '342',
      balance: 24562.80,
      limit: 50000,
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-600',
      frozen: false,
      primary: true,
    },
    {
      id: 2,
      type: 'Mastercard Gold',
      number: '5425 2334 8765 4321',
      holder: user?.name || 'ALEX JOHNSON',
      expiry: '09/27',
      cvv: '891',
      balance: 8750.50,
      limit: 25000,
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-600',
      frozen: false,
      primary: false,
    },
    {
      id: 3,
      type: 'Amex Business',
      number: '3782 822463 10005',
      holder: user?.name || 'ALEX JOHNSON',
      expiry: '03/29',
      cvv: '4521',
      balance: 12300.00,
      limit: 35000,
      color: 'from-emerald-600 to-emerald-800',
      bgColor: 'bg-emerald-600',
      frozen: true,
      primary: false,
    },
  ];

  const recentCardTransactions = [
    { id: 1, name: 'Apple Store', amount: -1299.00, date: 'Today', card: 1 },
    { id: 2, name: 'Netflix Subscription', amount: -15.99, date: 'Yesterday', card: 1 },
    { id: 3, name: 'Gas Station', amount: -45.00, date: 'May 20', card: 2 },
    { id: 4, name: 'Amazon Purchase', amount: -234.50, date: 'May 18', card: 1 },
    { id: 5, name: 'Restaurant', amount: -67.80, date: 'May 15', card: 2 },
  ];

  const toggleCardNumber = (id) => {
    setShowCardNumber(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ''));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const maskNumber = (num) => '•••• •••• •••• ' + num.slice(-4);

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
              <h1 className="text-2xl font-bold text-bank-dark">My Cards</h1>
              <p className="text-gray-500 text-sm">Manage your payment methods</p>
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
            <h1 className="text-xl font-bold text-bank-dark">Payment Cards</h1>
          </div>

          {/* Add New Card Button */}
          <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-bank-primary text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-900/20 active:scale-95">
            <Plus className="w-5 h-5" />
            <span className="font-medium">Add New Card</span>
          </button>

          {/* Cards List */}
          <div className="space-y-6">
            {cards.map((card, idx) => (
              <div key={card.id} className={`bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 overflow-hidden ${selectedCard === idx ? 'ring-2 ring-bank-primary' : ''}`}>
                {/* Card Visual */}
                <div className="relative p-6 sm:p-8 text-white overflow-hidden" style={{
                    background: card.id === 1 ? 'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)' :
                                card.id === 2 ? 'linear-gradient(135deg, #9333ea 0%, #7c3aed 50%, #6b21a8 100%)' :
                                'linear-gradient(135deg, #059669 0%, #0d9488 50%, #115e59 100%)'
                  }}>
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32 bg-white/10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full -ml-24 -mb-24 bg-white/5 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-2">
                        {card.primary && <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />}
                        <span className="text-sm font-medium text-white/80">{card.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {card.frozen && <Lock className="w-5 h-5 text-white/70" />}
                        <CreditCard className="w-8 h-8 text-white/50" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <p className="text-xl sm:text-2xl font-mono tracking-wider">
                          {showCardNumber[card.id] ? card.number : maskNumber(card.number)}
                        </p>
                        <button onClick={() => toggleCardNumber(card.id)} className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition">
                          {showCardNumber[card.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button onClick={() => copyToClipboard(card.number, card.id)} className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition">
                          {copiedId === card.id ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white/60 text-xs mb-1">Card Holder</p>
                        <p className="font-semibold tracking-wider text-sm sm:text-base">{card.holder}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/60 text-xs mb-1">Expires</p>
                        <p className="font-semibold">{card.expiry}</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="text-white/60 text-xs mb-1">CVV</p>
                        <p className="font-semibold">{showCardNumber[card.id] ? card.cvv : '•••'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Details & Actions */}
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <p className="text-gray-500 text-xs mb-1">Current Balance</p>
                      <p className="text-lg sm:text-xl font-bold text-bank-dark">${card.balance.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <p className="text-gray-500 text-xs mb-1">Credit Limit</p>
                      <p className="text-lg sm:text-xl font-bold text-bank-dark">${card.limit.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <p className="text-gray-500 text-xs mb-1">Available</p>
                      <p className="text-lg sm:text-xl font-bold text-emerald-600">${(card.limit - card.balance).toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <p className="text-gray-500 text-xs mb-1">Status</p>
                      <p className={`text-lg sm:text-xl font-bold ${card.frozen ? 'text-red-500' : 'text-emerald-600'}`}>
                        {card.frozen ? 'Frozen' : 'Active'}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <button 
                      onClick={() => setFreezeModal(card.id)}
                      className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl transition active:scale-95 ${card.frozen ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'}`}
                    >
                      {card.frozen ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      <span className="text-sm font-medium">{card.frozen ? 'Unfreeze' : 'Freeze'}</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition active:scale-95">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-medium">Security</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition active:scale-95">
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Card Transactions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-bold text-bank-dark">Card Transactions</h3>
              <button className="text-bank-primary text-xs sm:text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="divide-y divide-gray-50">
              {recentCardTransactions.map((tx) => (
                <div key={tx.id} className="p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition active:bg-gray-100">
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${tx.amount > 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                      {tx.amount > 0 ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-bank-dark text-sm sm:text-base truncate">{tx.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{tx.date} • Card ending {cards.find(c => c.id === tx.card)?.number.slice(-4)}</p>
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