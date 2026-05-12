import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, CreditCard, ArrowUpRight, ArrowDownLeft, 
  Wallet, Bell, Settings, LogOut, TrendingUp, TrendingDown,
  Send, Download, ShoppingCart, Coffee, Home, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
    { name: 'Send', icon: <Send className="w-5 h-5" />, color: 'bg-blue-500' },
    { name: 'Request', icon: <Download className="w-5 h-5" />, color: 'bg-emerald-500' },
    { name: 'Top Up', icon: <CreditCard className="w-5 h-5" />, color: 'bg-purple-500' },
    { name: 'More', icon: <Settings className="w-5 h-5" />, color: 'bg-gray-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-bank-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-bank-primary">NovaBank</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {[
            { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, active: true },
            { name: 'Cards', icon: <CreditCard className="w-5 h-5" /> },
            { name: 'Transactions', icon: <ArrowUpRight className="w-5 h-5" /> },
            { name: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
            { name: 'Notifications', icon: <Bell className="w-5 h-5" /> },
            { name: 'Settings', icon: <Settings className="w-5 h-5" /> },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                item.active 
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

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30 px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-bank-dark">Dashboard</h1>
              <p className="text-gray-500 text-sm">Welcome back, {user?.name || 'User'}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-bank-primary rounded-full flex items-center justify-center text-white font-semibold">
                {user?.name?.[0] || 'U'}
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${stat.up ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                    {stat.icon}
                  </div>
                  <span className={`text-sm font-semibold flex items-center ${stat.up ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.up ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-bank-dark">{stat.amount}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Card & Quick Actions */}
            <div className="lg:col-span-2 space-y-8">
              {/* Credit Card Visual */}
              <div className="bg-gradient-to-br from-bank-primary via-blue-800 to-blue-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                <div className="relative">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-blue-200 text-sm mb-1">Current Balance</p>
                      <h2 className="text-4xl font-bold">$24,562.80</h2>
                    </div>
                    <CreditCard className="w-12 h-12 text-blue-200/50" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-blue-200 text-sm mb-1">Card Holder</p>
                      <p className="font-semibold text-lg tracking-wider">{user?.name || 'ALEX JOHNSON'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-200 text-sm mb-1">Expires</p>
                      <p className="font-semibold">12/28</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-4 gap-4">
                {quickActions.map((action) => (
                  <button key={action.name} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col items-center space-y-2 group">
                    <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition`}>
                      {action.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{action.name}</span>
                  </button>
                ))}
              </div>

              {/* Recent Transactions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-bank-dark">Recent Transactions</h3>
                  <button className="text-bank-primary text-sm font-semibold hover:underline">View All</button>
                </div>
                <div className="divide-y divide-gray-50">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 ${tx.color} rounded-full flex items-center justify-center`}>
                          {tx.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-bank-dark">{tx.name}</p>
                          <p className="text-sm text-gray-500">{tx.category} • {tx.date}</p>
                        </div>
                      </div>
                      <span className={`font-bold ${tx.amount > 0 ? 'text-emerald-600' : 'text-bank-dark'}`}>
                        {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Monthly Spending */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-bank-dark mb-6">Monthly Budget</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Shopping', value: 65, color: 'bg-blue-500', amount: '$1,299' },
                    { label: 'Food & Dining', value: 45, color: 'bg-orange-500', amount: '$450' },
                    { label: 'Transport', value: 30, color: 'bg-purple-500', amount: '$280' },
                    { label: 'Entertainment', value: 20, color: 'bg-pink-500', amount: '$180' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-2">
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

              {/* Savings Goal */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-lg font-bold mb-2">Vacation Fund</h3>
                <p className="text-emerald-100 text-sm mb-6">Target: $5,000</p>
                <div className="text-3xl font-bold mb-4">$3,240</div>
                <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                  <div className="bg-white h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-emerald-100 text-sm">65% completed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}