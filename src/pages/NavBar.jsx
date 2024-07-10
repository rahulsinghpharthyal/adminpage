import React, { useEffect } from 'react';
import Breadcrumb from '../componets/BreadCrumb';
import Search from '../componets/Search';
import Icons from '../componets/Icons';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('bg-white', 'shadow');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-white', 'shadow');
        navbar.classList.add('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center p-4 transition-colors duration-300 bg-transparent">
      <div className="w-full sm:w-auto mb-2 sm:mb-0">
        <Breadcrumb />
      </div>
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <div className="w-full sm:w-auto">
          <Search />
        </div>
        <Icons />
      </div>
    </nav>
  );
};

export default Navbar;
