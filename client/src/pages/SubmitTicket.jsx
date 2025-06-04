import React, { useState } from 'react';

export default function SubmitTicket() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (e.g., send to backend)
    alert('Ticket submitted! We will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Submit a Ticket</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
          required
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your issue..."
          className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded hover:bg-orange-700 transition"
        >
          Submit Ticket
        </button>
      </form>
    </section>
  );
}