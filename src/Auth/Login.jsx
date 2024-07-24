import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirect to home after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home'); // Redirect to home after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Welcome back!</h2>
          <p className="text-gray-400 text-center mb-6">Enter to get unlimited access to data & information.</p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-400" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:border-blue-500 focus:outline-none"
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400" htmlFor="password">Password</label>
              <input
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:border-blue-500 focus:outline-none"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="text-blue-500 focus:ring-blue-400 h-4 w-4"
                />
                <label htmlFor="remember-me" className="ml-2 text-gray-400">Remember me</label>
              </div>
              <a href="#" className="text-gray-400 hover:text-blue-500">Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Log In
            </button>
          </form>
          <div className="mt-6 flex items-center justify-center">
            <span className="text-gray-400 mx-2">or</span>
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Log in with Google
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Register here</a>
            </p>
          </div>
        </div>
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/cylinder-liquid-modern-background_1134168-24.jpg)' }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
