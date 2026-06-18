import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import VisionPage from './pages/VisionPage';
import PerformancePage from './pages/PerformancePage';
import SupportPage from './pages/SupportPage';
import CurrentAccountPage from './pages/CurrentAccountPage';
import InstantAccessPage from './pages/InstantAccessPage';
import ThirtyFiveDayPage from './pages/ThirtyFiveDayPage';
import BusinessCurrentAccountPage from './pages/BusinessCurrentAccountPage';
import BusinessLoanPage from './pages/BusinessLoanPage';
import CharityLoanPage from './pages/CharityLoanPage';
import SocialHousingPage from './pages/SocialHousingPage';
import MortgagePage from './pages/MortgagePage';
import Layout from './components/Layout';


import { AuthProvider, useAuth } from './context/AuthContext';
import SendMoney from './pages/SendMoney';
import CardsPage from './pages/CardsPage';
import TransactionsPage from './pages/TransactionsPage';
import WalletPage from './pages/WalletPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import RequestMoney from './pages/RequestMoney';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/enroll_user" element={<RegisterPage />} />
          <Route path="/vision" element={<Layout><VisionPage /></Layout>} />
          <Route path="/performance" element={<Layout><PerformancePage /></Layout>} />
          <Route path="/support" element={<Layout><SupportPage /></Layout>} />
          <Route path="/current_account" element={<Layout><CurrentAccountPage /></Layout>} />
          <Route path="/instant_access" element={<Layout><InstantAccessPage /></Layout>} />
          <Route path="/35day" element={<Layout><ThirtyFiveDayPage /></Layout>} />
          <Route path="/business_current_account" element={<Layout><BusinessCurrentAccountPage /></Layout>} />
          <Route path="/business_loan" element={<Layout><BusinessLoanPage /></Layout>} />
          <Route path="/charity_loan" element={<Layout><CharityLoanPage /></Layout>} />
          <Route path="/social_housing" element={<Layout><SocialHousingPage /></Layout>} />
          <Route path="/mortgage" element={<Layout><MortgagePage /></Layout>} />
          <Route path="/dashboard"element={<PrivateRoute><Dashboard /></PrivateRoute>    } />
          <Route path="/send" element={<PrivateRoute> <SendMoney /></PrivateRoute> } />
          <Route path="/request_money" element={<PrivateRoute> <RequestMoney /></PrivateRoute> } />


          <Route path="/cards" element={  <PrivateRoute> <CardsPage /></PrivateRoute>} />
<Route path="/transactions" element={ <PrivateRoute><TransactionsPage /></PrivateRoute> } />
<Route path="/wallet" element={ <PrivateRoute><WalletPage /></PrivateRoute> } />
<Route path="/notifications" element={ <PrivateRoute> <NotificationsPage /></PrivateRoute>} />
<Route path="/settings" element={ <PrivateRoute><SettingsPage /></PrivateRoute> } />
        </Routes>




      </Router>
    </AuthProvider>
  );
}

export default App;