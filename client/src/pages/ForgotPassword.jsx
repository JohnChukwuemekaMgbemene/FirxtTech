import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSent(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">Reset Password</h1>
      <p className="text-gray-600 mb-6">
        Enter your email and we'll send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {sent && (
          <div className="text-green-600 text-sm">
            Password reset email sent! Check your inbox.
          </div>
        )}
        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded hover:bg-orange-700 transition"
        >
          Send Reset Link
        </button>
      </form>
      <div className="text-sm mt-4">
        <Link to="/login" className="text-blue-600 hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
}