import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // adjust the path if needed

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
    setForm({ email: '', password: '' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Login</h1>
      <p className="text-gray-600 mb-6">Access your account to track tickets and more.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="@gmail.com"
          className="w-full px-4 py-2 border border-black rounded text-gray-900 placeholder-gray-400"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 border border-black rounded text-gray-900 placeholder-gray-400"
          required
        />
        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}
        <div className="flex justify-between items-center text-sm mb-2">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot your password?
          </Link>
          <Link to="/signup" className="text-orange-600 font-semibold hover:underline transition-all">
            Create new account
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded hover:bg-orange-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}