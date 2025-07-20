'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Script from 'next/script';

const navItems = [
  { label: 'Home', href: '/', icon: 'dxoycpzg' },
  { label: 'Services', href: '#services', icon: 'nnbhwnej' },
  { label: 'Projects', href: '#projects', icon: 'slkvcfos' },
  { label: 'About', href: '#about', icon: 'zpxybbhl' },
  { label: 'Contact', href: '#contact', icon: 'kthelypq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '/';
      setActive(hash);
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (href) => {
    if (href === '/') return active === '/';
    return active === href;
  };

  return (
    <>
      {/* Lordicon Script */}
      <Script src="https://cdn.lordicon.com/lordicon.js" strategy="beforeInteractive" />

      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand + Hamburger (Glassmorphism applied only here) */}
          {/* Wrapper for Brand + Hamburger */}
<div className="w-full flex items-center justify-between bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full shadow-md border border-white/10 border-solid md:w-auto md:gap-4">

  {/* Brand */}
  <div className="text-2xl font-bold">
    <span className="text-black">Dev</span>{' '}
    <span className="text-orange-600">NET</span>
  </div>

  {/* Hamburger - Mobile Only */}
  <div
    className="md:hidden text-white cursor-pointer"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </div>

</div>

          {/* Centered Nav - Desktop */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 border-solid shadow-xl space-x-6 flex items-center">
              {navItems.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  className={`relative group font-medium transition duration-300 flex items-center gap-1 ${
                    isActive(href) ? 'text-orange-600' : 'text-white'
                  }`}
                >
                  <lord-icon
                    src={`https://cdn.lordicon.com/${icon}.json`}
                    trigger="hover"
                    colors={`primary:${isActive(href) ? '#ea580c' : '#ffffff'},secondary:#ffffff`}
                    style={{ width: '24px', height: '24px' }}
                  ></lord-icon>
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-orange-600 transition-all duration-300 ${
                      isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden bg-white/10 backdrop-blur-xl px-6 transition-all duration-500 ${
            menuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-medium border-b border-white/10 border-solid pb-2 flex items-center gap-2 transition duration-300 ${
                  isActive(href) ? 'text-orange-600' : 'text-white hover:text-orange-600'
                }`}
              >
                <lord-icon
                  src={`https://cdn.lordicon.com/${icon}.json`}
                  trigger="hover"
                  colors={`primary:${isActive(href) ? '#ea580c' : '#ffffff'},secondary:#ffffff`}
                  style={{ width: '24px', height: '24px' }}
                ></lord-icon>
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
