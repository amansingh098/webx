// src/components/Signup.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirect to home after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/home'); // Redirect to home after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Create an account</h2>
          <p className="text-gray-400 text-center mb-6">Enter your details to sign up.</p>
          <form onSubmit={handleSignup}>
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
            <div className="mb-4">
              <label className="block text-gray-400" htmlFor="confirm-password">Confirm Password</label>
              <input
                className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-200 border border-gray-700 rounded focus:border-blue-500 focus:outline-none"
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 flex items-center justify-center">
            <span className="text-gray-400 mx-2">or</span>
            <button
              onClick={handleGoogleSignup}
              className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Sign up with Google
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in here</a>
            </p>
          </div>
        </div>
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/3d-brushstroke-multicolor-gradient-texture-brush-ribbon-isolated-white-abstract-colorful-wave-flow-design-elements-vector-illustration_165488-7381.jpg)' }}
        ></div>
      </div>
    </div>
  );
};

export default Signup;
