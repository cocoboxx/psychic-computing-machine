import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, CreditCard, ArrowUpRight, ArrowDownLeft, 
  Wallet, Bell, Settings, LogOut, TrendingUp, TrendingDown,
  Send, Download, ShoppingCart, Coffee, Home, Zap, Menu, X,
  ChevronRight, ChevronLeft, Search, User, Building2, Clock,
  AlertCircle, CheckCircle2, Shield, Fingerprint, Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SendMoney() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Send Money');
  
  // Flow states: 'amount' -> 'recipient' -> 'review' -> 'processing' -> 'restricted'
  const [step, setStep] = useState('amount');
  const [amount, setAmount] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [note, setNote] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showRestriction, setShowRestriction] = useState(false);
  const [restrictionReason, setRestrictionReason] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, mobileIcon: <LayoutDashboard className="w-6 h-6" /> },
    { name: 'Cards', icon: <CreditCard className="w-5 h-5" />, mobileIcon: <CreditCard className="w-6 h-6" /> },
    { name: 'Transactions', icon: <ArrowUpRight className="w-5 h-5" />, mobileIcon: <ArrowUpRight className="w-6 h-6" /> },
    { name: 'Wallet', icon: <Wallet className="w-5 h-5" />, mobileIcon: <Wallet className="w-6 h-6" /> },
    { name: 'Notifications', icon: <Bell className="w-5 h-5" />, mobileIcon: <Bell className="w-6 h-6" /> },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, mobileIcon: <Settings className="w-6 h-6" /> },
  ];

  const quickAmounts = [50, 100, 250, 500, 1000, 2500];
  
  const recentRecipients = [
    { id: 1, name: 'Sarah Miller', handle: '@sarahm', avatar: 'SM', color: 'bg-pink-500', type: 'personal' },
    { id: 2, name: 'James Wilson', handle: '@jwilson', avatar: 'JW', color: 'bg-blue-500', type: 'personal' },
    { id: 3, name: 'Electric Co.', handle: 'Utility Bill', avatar: 'EC', color: 'bg-yellow-500', type: 'business' },
    { id: 4, name: 'Netflix Sub', handle: 'Subscription', avatar: 'NF', color: 'bg-red-500', type: 'business' },
    { id: 5, name: 'Mom', handle: '@mom_2024', avatar: 'MO', color: 'bg-emerald-500', type: 'personal' },
  ];

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleQuickAmount = (val) => {
    setAmount(val.toString());
  };

  const handleContinue = () => {
    if (parseFloat(amount) > 0) {
      setStep('recipient');
    }
  };

  const handleSelectRecipient = (recipient) => {
    setSelectedRecipient(recipient);
    setStep('review');
  };

  const handleSend = () => {
    setIsProcessing(true);
    setStep('processing');
    
    // Simulate processing then show restriction
    setTimeout(() => {
      setIsProcessing(false);
      setShowRestriction(true);
      setRestrictionReason('Account verification required. Your sending privileges have been temporarily restricted pending identity confirmation. Please verify your account to continue.');
    }, 2500);
  };

  const handleCloseRestriction = () => {
    setShowRestriction(false);
    navigate('/dashboard');
  };

  const handleGoToVerification = () => {
    setShowRestriction(false);
    navigate('/settings/verification');
  };

  const formatAmount = () => {
    const num = parseFloat(amount);
    return num > 0 ? num.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '$0.00';
  };

  // Restriction Popup Component
  const RestrictionPopup = () => {
    if (!showRestriction) return null;

    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseRestriction}></div>
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
          {/* Header with warning gradient */}
          <div className="bg-gradient-to-br from-red-500 to-orange-500 p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 bg-white/10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full -ml-12 -mb-12 bg-white/5"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Transfer Blocked</h2>
              <p className="text-red-100 text-sm">Transaction cannot be completed</p>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start space-x-3 mb-6 bg-red-50 rounded-xl p-4 border border-red-100">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 leading-relaxed">{restrictionReason}</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                <span className="text-gray-500">Amount</span>
                <span className="font-semibold text-bank-dark">{formatAmount()}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                <span className="text-gray-500">Recipient</span>
                <span className="font-semibold text-bank-dark">{selectedRecipient?.name}</span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="text-gray-500">Status</span>
                <span className="font-semibold text-red-600 flex items-center gap-1">
                  <X className="w-3 h-3" /> Declined
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={handleGoToVerification}
                className="w-full py-3.5 rounded-xl bg-bank-primary text-white font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
              >
                <Fingerprint className="w-5 h-5" />
                Verify Account Now
              </button>
              <button 
                onClick={handleCloseRestriction}
                className="w-full py-3.5 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
              >
                Go to Dashboard
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4">
              Need help? <button className="text-bank-primary hover:underline font-medium">Contact Support</button>
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Amount Step
  const AmountStep = () => (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-bank-dark">Send Money</h2>
        <p className="text-gray-500">Enter the amount you want to send</p>
      </div>

      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
        {/* Amount Display */}
        <div className="text-center space-y-4">
          <div className="relative">
            <span className="text-gray-400 text-2xl sm:text-3xl font-light absolute left-1/2 -translate-x-[calc(50%+4px)] top-1/2 -translate-y-1/2 pointer-events-none">$</span>
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0.00"
              className="text-5xl sm:text-6xl font-bold text-bank-dark text-center w-full bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-gray-200 pl-8"
              autoFocus
            />
          </div>
          <p className="text-sm text-gray-400">Available Balance: $24,562.80</p>
        </div>

        {/* Quick Amounts */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {quickAmounts.map((val) => (
            <button
              key={val}
              onClick={() => handleQuickAmount(val)}
              className={`py-2.5 rounded-xl text-sm font-semibold transition ${
                amount === val.toString() 
                  ? 'bg-bank-primary text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ${val}
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={!amount || parseFloat(amount) <= 0}
          className="w-full py-4 rounded-xl bg-bank-primary text-white font-semibold text-lg hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20 active:scale-[0.98]"
        >
          Continue
        </button>
      </div>

      {/* Recent Recipients Quick Select */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Recent Recipients</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {recentRecipients.slice(0, 4).map((recipient) => (
            <button
              key={recipient.id}
              onClick={() => {
                setAmount('500');
                setSelectedRecipient(recipient);
                setStep('review');
              }}
              className="flex flex-col items-center space-y-2 min-w-[72px] group"
            >
              <div className={`w-12 h-12 ${recipient.color} rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition`}>
                {recipient.avatar}
              </div>
              <span className="text-xs font-medium text-gray-700 truncate max-w-[72px]">{recipient.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Recipient Step
  const RecipientStep = () => (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <button 
          onClick={() => setStep('amount')}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-bank-dark">Choose Recipient</h2>
          <p className="text-sm text-gray-500">Sending {formatAmount()}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Search */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, @username, or phone..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bank-primary/20 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Recipients List */}
        <div className="divide-y divide-gray-50 max-h-[400px] overflow-y-auto">
          {recentRecipients.map((recipient) => (
            <button
              key={recipient.id}
              onClick={() => handleSelectRecipient(recipient)}
              className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 transition text-left active:bg-gray-100"
            >
              <div className={`w-12 h-12 ${recipient.color} rounded-full flex items-center justify-center text-white font-bold shrink-0`}>
                {recipient.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-bank-dark text-sm sm:text-base">{recipient.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{recipient.handle}</p>
              </div>
              {recipient.type === 'business' ? (
                <Building2 className="w-4 h-4 text-gray-400" />
              ) : (
                <User className="w-4 h-4 text-gray-400" />
              )}
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </button>
          ))}
        </div>

        {/* Add New */}
        <button className="w-full p-4 flex items-center space-x-4 text-bank-primary hover:bg-blue-50 transition text-left border-t border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Send className="w-5 h-5 text-bank-primary" />
          </div>
          <div>
            <p className="font-semibold text-sm sm:text-base">Send to New Recipient</p>
            <p className="text-xs sm:text-sm text-gray-500">Enter bank details or phone number</p>
          </div>
          <ChevronRight className="w-4 h-4 ml-auto" />
        </button>
      </div>
    </div>
  );

  // Review Step
  const ReviewStep = () => (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <button 
          onClick={() => setStep('recipient')}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-bank-dark">Review & Send</h2>
          <p className="text-sm text-gray-500">Confirm transaction details</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Recipient Card */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className={`w-14 h-14 ${selectedRecipient?.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
              {selectedRecipient?.avatar}
            </div>
            <div>
              <p className="font-bold text-bank-dark text-lg">{selectedRecipient?.name}</p>
              <p className="text-sm text-gray-500">{selectedRecipient?.handle}</p>
            </div>
          </div>
        </div>

        {/* Amount Details */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-500">Amount</span>
            <span className="text-2xl font-bold text-bank-dark">{formatAmount()}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-gray-100">
            <span className="text-gray-500">Fee</span>
            <span className="font-semibold text-emerald-600">Free</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-gray-100">
            <span className="text-gray-500 font-semibold">Total</span>
            <span className="text-xl font-bold text-bank-dark">{formatAmount()}</span>
          </div>
        </div>

        {/* Note Input */}
        <div className="px-6 pb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Add a note (optional)</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's this for?"
            className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-bank-primary/20 focus:bg-white transition border border-gray-200"
          />
        </div>
      </div>

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <Shield className="w-4 h-4 text-emerald-500" />
        <span>256-bit encryption • Secure transfer</span>
      </div>

      <button
        onClick={handleSend}
        className="w-full py-4 rounded-xl bg-bank-primary text-white font-semibold text-lg hover:bg-blue-800 transition shadow-lg shadow-blue-900/20 active:scale-[0.98] flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        Confirm & Send
      </button>
    </div>
  );

  // Processing Step
  const ProcessingStep = () => (
    <div className="max-w-lg mx-auto text-center py-12 sm:py-20">
      <div className="relative w-24 h-24 mx-auto mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-bank-primary border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-bank-primary animate-spin" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-bank-dark mb-2">Processing Transfer...</h2>
      <p className="text-gray-500">Verifying transaction details</p>
      
      <div className="mt-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100 inline-block w-full max-w-xs">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">To</span>
          <span className="font-semibold">{selectedRecipient?.name}</span>
        </div>
        <div className="flex items-center justify-between text-sm mt-2 pt-2 border-t border-gray-100">
          <span className="text-gray-500">Amount</span>
          <span className="font-bold text-bank-dark">{formatAmount()}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row pb-20 lg:pb-0">
      {/* Restriction Popup Overlay */}
      <RestrictionPopup />

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
              onClick={() => {
                setActiveTab(item.name);
                if (item.name === 'Dashboard') navigate('/dashboard');
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                activeTab === item.name
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
                onClick={() => {
                  setActiveTab(item.name);
                  setMobileMenuOpen(false);
                  if (item.name === 'Dashboard') navigate('/dashboard');
                }}
                className={`w-full flex items-center space-x-3 px-4 py-4 rounded-xl transition text-lg ${
                  activeTab === item.name
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

        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Mobile Welcome */}
          <div className="lg:hidden mb-6">
            <p className="text-gray-500 text-sm">Welcome back,</p>
            <h1 className="text-xl font-bold text-bank-dark flex items-center gap-2">
              {user?.name || 'User'}
              <span className="text-xs bg-bank-primary/10 text-bank-primary px-2 py-1 rounded-full font-medium">Premium</span>
            </h1>
          </div>

          {/* Flow Content */}
          {step === 'amount' && <AmountStep />}
          {step === 'recipient' && <RecipientStep />}
          {step === 'review' && <ReviewStep />}
          {step === 'processing' && <ProcessingStep />}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                if (item.name === 'Dashboard') navigate('/dashboard');
              }}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition ${
                activeTab === item.name
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