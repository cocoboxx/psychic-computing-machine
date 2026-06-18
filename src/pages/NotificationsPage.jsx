import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard, CreditCard, ArrowUpRight, ArrowDownLeft,
  Wallet, Bell, Settings, LogOut, Check, CheckCheck, Trash2,
  AlertTriangle, Info, CheckCircle, XCircle, Menu, X,
  ChevronRight, Clock, Shield, DollarSign, CreditCard as CardIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotificationsPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Notifications');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Large Transaction Alert',
      message: 'A transaction of $1,299.00 was made at Apple Store on your Visa Platinum card.',
      type: 'alert',
      read: false,
      date: 'Today, 2:30 PM',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'bg-red-100 text-red-600',
    },
    {
      id: 2,
      title: 'Salary Deposited',
      message: 'Your salary of $4,500.00 has been deposited to your Main Checking account.',
      type: 'success',
      read: false,
      date: 'Yesterday, 9:00 AM',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: 3,
      title: 'Security Update',
      message: 'Two-factor authentication has been successfully enabled on your account.',
      type: 'info',
      read: true,
      date: 'May 22, 11:45 AM',
      icon: <Shield className="w-5 h-5" />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 4,
      title: 'Low Balance Warning',
      message: 'Your Euro Travel account balance is below €1,000. Consider adding funds.',
      type: 'warning',
      read: false,
      date: 'May 21, 4:20 PM',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      id: 5,
      title: 'Card Payment Due',
      message: 'Your Visa Platinum card payment of $2,450.00 is due in 3 days.',
      type: 'alert',
      read: true,
      date: 'May 20, 8:00 AM',
      icon: <CardIcon className="w-5 h-5" />,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 6,
      title: 'New Login Detected',
      message: 'A new login was detected from Chrome on Windows in New York, USA.',
      type: 'warning',
      read: true,
      date: 'May 19, 7:30 PM',
      icon: <Info className="w-5 h-5" />,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: 7,
      title: 'Savings Goal Reached',
      message: 'Congratulations! You have reached 65% of your Vacation Fund savings goal.',
      type: 'success',
      read: false,
      date: 'May 18, 3:15 PM',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: 8,
      title: 'Failed Transaction',
      message: 'A transaction of $500.00 to Crypto Wallet failed due to insufficient funds.',
      type: 'alert',
      read: true,
      date: 'May 15, 10:00 AM',
      icon: <XCircle className="w-5 h-5" />,
      color: 'bg-red-100 text-red-600',
    },
  ]);

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

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'alert', label: 'Alerts', count: notifications.filter(n => n.type === 'alert').length },
    { id: 'success', label: 'Success', count: notifications.filter(n => n.type === 'success').length },
  ];

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(n => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'unread') return !n.read;
    return n.type === selectedFilter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

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
              {item.name === 'Notifications' && unreadCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount}</span>
              )}
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
              {unreadCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
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
                {item.name === 'Notifications' && unreadCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount}</span>
                )}
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
              <h1 className="text-2xl font-bold text-bank-dark">Notifications</h1>
              <p className="text-gray-500 text-sm">You have {unreadCount} unread notifications</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition">
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
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
            <p className="text-gray-500 text-sm">You have {unreadCount} unread</p>
            <h1 className="text-xl font-bold text-bank-dark">Notifications</h1>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition active:scale-95 ${selectedFilter === filter.id
                      ? 'bg-bank-primary text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                  <span>{filter.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${selectedFilter === filter.id ? 'bg-white/20' : 'bg-gray-100'}`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
            <button 
              onClick={markAllAsRead}
              className="flex items-center space-x-2 text-sm text-bank-primary hover:text-blue-700 transition active:scale-95"
            >
              <CheckCheck className="w-4 h-4" />
              <span className="font-medium">Mark all as read</span>
            </button>
          </div>

          {/* Notifications List */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {filteredNotifications.length === 0 ? (
              <div className="p-8 sm:p-12 text-center">
                <Bell className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No notifications</h3>
                <p className="text-sm text-gray-500">You are all caught up!</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {filteredNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 sm:p-5 flex items-start space-x-3 sm:space-x-4 hover:bg-gray-50 transition ${!notification.read ? 'bg-blue-50/30' : ''}`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${notification.color} rounded-xl flex items-center justify-center shrink-0 mt-0.5`}>
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className={`text-sm sm:text-base font-semibold ${!notification.read ? 'text-bank-dark' : 'text-gray-700'}`}>
                            {notification.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">{notification.message}</p>
                        </div>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full shrink-0 mt-2"></span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-1 text-xs text-gray-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{notification.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition"
                              title="Mark as read"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                          )}
                          <button 
                            onClick={() => deleteNotification(notification.id)}
                            className="p-1.5 rounded-lg hover:bg-red-100 text-gray-400 hover:text-red-600 transition"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition relative ${activeTab === item.name ? 'text-bank-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <div className="relative">
                {item.mobileIcon}
                {item.name === 'Notifications' && unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </div>
              <span className="text-[10px] font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}