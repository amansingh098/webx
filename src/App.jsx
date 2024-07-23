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
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile';
import Plans from './pages/Plans';
import Payment from './pages/Payment';
import AdminPanel from './admin/AdminPanel';
import AdminLogin from './admin/AdminLogin';
import PaymentMethods from './pages/PaymentMethods';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile />} /> 
        <Route path="settings" element={<Settings />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="/plans" element={<Plans />} /> 
        <Route path="/payment/:plan" element={<PaymentMethods />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
