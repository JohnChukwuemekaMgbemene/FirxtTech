import React from 'react';

const categories = [
  { icon: '🛠', title: 'Troubleshooting', desc: 'Fix common issues quickly.' },
  { icon: '💻', title: 'Installation Help', desc: 'Guides for setup and installation.' },
  { icon: '📦', title: 'Product Support', desc: 'Get help with our products.' },
  { icon: '💳', title: 'Billing & Payments', desc: 'Questions about your account.' },
];

export default function HelpCategories() {
  return (
    <section className="py-10 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {categories.map((cat) => (
        <div key={cat.title} className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">{cat.icon}</span>
          <h3 className="font-semibold mb-1">{cat.title}</h3>
          <p className="text-gray-500 text-sm text-center">{cat.desc}</p>
        </div>
      ))}
    </section>
  );
}