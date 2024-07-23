import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Transition from './pages/Transition';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Plans from './pages/Plans';
import Payment from './pages/Payment';
import AdminPanel from './admin/AdminPanel';
import AdminLogin from './admin/AdminLogin';
import AddAdmin from './admin/AddAdmin';
import Navbar from './components/Navbar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/plans" element={<Plans />} /> 
        <Route path="/payment/:plan" element={ <Payment /> } />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/add-admin" element={<AddAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;
