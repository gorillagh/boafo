// src/components/onboarding/OnboardingStep1Account.jsx
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const OnboardingStep1Account = ({ onContinue, updateData, data }) => {
  const [email, setEmail] = useState(data.email || '');
  const [password, setPassword] = useState(data.password || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (email && password) {
      updateData('email', email);
      updateData('password', password);
      onContinue();
    } else {
      alert('Please enter your email and password.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark mb-4">
        Create Your Account
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        </div>
        <button type="submit" className="primary-button w-full py-3 mb-4">
          Continue
        </button>
      </form>
      <p className="text-textColor-light dark:text-textColor-dark mb-4">
        Already have an account?{' '}
        <a href="/login" className="text-primaryGreen-light dark:text-primaryGreen-dark hover:underline">
          Log in
        </a>
      </p>
      <div className="relative w-full max-w-sm flex items-center justify-center mb-6">
        <span className="absolute bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400 z-10">or</span>
        <div className="absolute w-full h-px bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <button className="secondary-button w-full py-3 mb-3 flex items-center justify-center border-gray-300 dark:border-gray-600">
        <FaGoogle className="mr-2 text-lg" /> Continue with Google
      </button>
      {/* Assuming Apple/Facebook are not primary, can add later if needed */}
      {/* <button className="secondary-button w-full py-3 mb-3 flex items-center justify-center">
        <FaApple className="mr-2 text-lg" /> Continue with Apple
      </button>
      <button className="secondary-button w-full py-3 flex items-center justify-center">
        <FaFacebook className="mr-2 text-lg" /> Continue with Facebook
      </button> */}
    </div>
  );
};

export default OnboardingStep1Account;