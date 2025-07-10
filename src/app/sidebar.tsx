'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiBarChart2, FiSettings, FiHelpCircle, FiTable } from 'react-icons/fi';

const links = [
  { href: '/', label: 'Home', icon: FiHome },
  { href: '/dashboard', label: 'Dashboard', icon: FiBarChart2 },
  { href: '/data-table', label: 'Data Table', icon: FiTable },
  { href: '/settings', label: 'Settings', icon: FiSettings },
  { href: '/help-support', label: 'Help & Support', icon: FiHelpCircle },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-white text-gray-800 shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-2xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Menu</h1>
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-200 text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className={`flex items-center p-4 text-gray-800 hover:bg-gray-100 ${pathname === link.href ? 'bg-gray-200' : ''}`}>
                  {link.icon && <link.icon className="mr-4 text-xl" />}
                  <span className={`${isOpen ? 'block' : 'hidden'}`}>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
