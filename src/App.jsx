import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Transition from './pages/Transition';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import DashLogin from './Auth/DashLogin'; // Adjust the path according to your project structure
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile';
import Plans from './pages/Plans';
import Payment from './pages/Payment';
import AdminPanel from './admin/AdminPanel';
import AdminLogin from './admin/AdminLogin';
import PaymentMethods from './pages/PaymentMethods';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Show from './pages/Show';
import PrivateRoute from './pages/PrivateRoute'; // Adjust the path according to your project structure
import Joined from './pages/Joined';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard-login" element={<DashLogin />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/joined" element={<Joined/>} />

        <Route path="settings" element={<Settings />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/payment/:plan" element={<PaymentMethods />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route path="/show" element={<Show />} />
      </Routes>
    </Router>
  );
};

export default App;
