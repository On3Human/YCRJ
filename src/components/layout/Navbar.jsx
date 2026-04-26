import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Program', path: '/program' },
    { name: 'Journal', path: '/journal' },
    { name: 'Guidelines', path: '/guidelines' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col justify-center">
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-3xl font-bold text-[#0A1628] leading-none">YCRJ</span>
              <span className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mt-1">Youth Computing Research Journal</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#C9A84C] ${
                  location.pathname === link.path ? 'text-[#C9A84C]' : 'text-[#0A1628]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/apply">
              <Button variant="accent" size="sm" className="font-bold uppercase tracking-wider">
                Apply
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
