import React from 'react';
import Breadcrumb from '../componets/BreadCrumb';
import Search from '../componets/Search';
import Icons from '../componets/Icons';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow">
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
