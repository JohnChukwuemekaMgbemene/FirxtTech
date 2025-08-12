import React from 'react';
import { Wrench, Laptop, Package, CreditCard } from 'lucide-react';

const categories = [
  { Icon: Wrench, title: 'Troubleshooting', desc: 'Fix common issues quickly.' },
  { Icon: Laptop, title: 'Installation Help', desc: 'Guides for setup and installation.' },
  { Icon: Package, title: 'Product Support', desc: 'Get help with our products.' },
  { Icon: CreditCard, title: 'Billing & Payments', desc: 'Questions about your account.' },
];

export default function HelpCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {categories.map(({ Icon, title, desc }) => (
        <div key={title} className="bg-white rounded shadow p-6 flex flex-col items-center">
          <Icon className="h-7 w-7 text-blue-600 mb-2" aria-hidden="true" />
          <h3 className="font-semibold mb-1 text-blue-700">{title}</h3>
          <p className="text-gray-500 text-sm text-center">{desc}</p>
        </div>
      ))}
    </div>
  );
}