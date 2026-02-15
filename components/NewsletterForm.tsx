'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been added to our waiting list.`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center max-w-lg mx-auto">
      <label htmlFor="email-address" className="sr-only">Email address</label>
      <input 
        id="email-address" 
        name="email" 
        type="email" 
        autoComplete="email" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white border-white rounded-md sm:max-w-xs text-gray-900" 
        placeholder="Enter your email" 
      />
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button 
          type="submit" 
          className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white transition-colors font-bold"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
