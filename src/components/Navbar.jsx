import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Resume', path: '/resume' }, 
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certificate', path: '/certificate' },
    { label: 'Contact', path: '/contact' },
   
  ];

  return (
    <nav
      className={`sticky top-0 z-40 h-20 px-8 flex justify-between items-center transition-colors duration-300 ${
        isScrolled ? 'bg-black' : 'bg-[#1C1C1C]'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="text-[#9B111E] text-3xl font-bold transition-transform transform hover:scale-110">
        MK
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6 flex items-center">
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path;

          return (
            <Link
              key={path}
              to={path}
              className={`text-[#F1EFEC] text-lg px-2 transition-transform transform hover:scale-110 hover:text-[#D4C9BE] ${
                isActive ? 'scale-110 text-[#D4C9BE]' : ''
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
