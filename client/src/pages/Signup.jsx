import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path as needed

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCredential.user, { displayName: form.name });
      navigate('/dashboard'); // or wherever
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">Sign Up</h1>
      <p className="text-gray-600 mb-6">Create your account to get started.</p>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword}
          onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" required />

        <div className="text-sm text-right mb-4">
          <Link to="/login" className="text-blue-600 hover:underline">Login instead</Link>
        </div>

        <button type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded hover:bg-orange-700 transition">
          Create Account
        </button>
      </form>
    </div>
  );
}
