import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  ArrowLeft, User, DollarSign, FileText, Send,
  CheckCircle, Clock, XCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RequestMoney() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate request sent
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setAmount('');
      setRecipient('');
      setNote('');
    }, 2500);
  };

  const recentRequests = [
    { id: 1, name: 'Sarah Miller', amount: 45.00, status: 'pending', date: '2h ago' },
    { id: 2, name: 'Mike Ross', amount: 120.00, status: 'paid', date: 'Yesterday' },
    { id: 3, name: 'Emma Wilson', amount: 28.50, status: 'declined', date: 'May 30' },
  ];

  const statusIcon = (status) => {
    if (status === 'paid') return <CheckCircle className="w-4 h-4 text-emerald-500" />;
    if (status === 'declined') return <XCircle className="w-4 h-4 text-red-500" />;
    return <Clock className="w-4 h-4 text-amber-500" />;
  };

  const statusText = (status) => {
    if (status === 'paid') return 'text-emerald-600';
    if (status === 'declined') return 'text-red-600';
    return 'text-amber-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0 lg:flex">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-3">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-bank-dark">Request Money</h1>
        </div>
      </header>

      {/* Desktop Sidebar placeholder — in real app, import shared Sidebar component */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col sticky top-0 h-screen shrink-0">
        <div className="p-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-bank-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-bank-primary">Regional EU Bank</span>
        </div>
      </aside>

      <main className="flex-1 overflow-auto min-w-0">
        {/* Desktop Header */}
        <header className="hidden lg:flex bg-white border-b border-gray-200 sticky top-0 z-30 px-8 py-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-bank-dark">Request Money</h1>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto space-y-6">
          {/* Request Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <h2 className="text-base sm:text-lg font-bold text-bank-dark">New Request</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Ask someone to send you money</p>
            </div>

            {sent ? (
              <div className="p-8 sm:p-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-bank-dark mb-1">Request Sent!</h3>
                <p className="text-sm text-gray-500">We'll notify you when they respond.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-lg font-semibold text-bank-dark focus:outline-none focus:ring-2 focus:ring-bank-primary/20 focus:border-bank-primary transition"
                    />
                  </div>
                </div>

                {/* Recipient */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      placeholder="Name, email, or phone"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-bank-dark focus:outline-none focus:ring-2 focus:ring-bank-primary/20 focus:border-bank-primary transition"
                    />
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Note <span className="text-gray-400 font-normal">(optional)</span></label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="What's it for?"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-bank-dark focus:outline-none focus:ring-2 focus:ring-bank-primary/20 focus:border-bank-primary transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!amount || !recipient}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 bg-bank-primary text-white font-semibold rounded-xl hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Recent Requests */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-bank-dark">Recent Requests</h3>
            </div>
            <div className="divide-y divide-gray-50">
              {recentRequests.map((req) => (
                <div key={req.id} className="p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 transition">
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-gray-600">
                        {req.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-bank-dark text-sm sm:text-base truncate">{req.name}</p>
                      <p className="text-xs text-gray-500">{req.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 shrink-0 ml-2">
                    <span className="font-bold text-sm sm:text-base text-bank-dark">
                      ${req.amount.toFixed(2)}
                    </span>
                    <div className={`flex items-center space-x-1 ${statusText(req.status)}`}>
                      {statusIcon(req.status)}
                      <span className="text-xs font-medium capitalize hidden sm:inline">{req.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex justify-around items-center h-16">
          {['Dashboard', 'Cards', 'Transactions', 'Wallet', 'Notifications'].map((name, i) => {
            const icons = [
              <svg key="d" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
              <svg key="c" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
              <svg key="t" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>,
              <svg key="w" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>,
              <svg key="n" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            ];
            return (
              <button
                key={name}
                onClick={() => navigate(name === 'Dashboard' ? '/dashboard' : `/${name.toLowerCase()}`)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition ${name === 'Dashboard' ? 'text-bank-primary' : 'text-gray-400'}`}
              >
                {icons[i]}
                <span className="text-[10px] font-medium">{name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}