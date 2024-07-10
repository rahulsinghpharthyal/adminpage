// Breadcrumb.jsx
import React from 'react';

const BreadCrumb = () => {
  return (
    <div className="flex items-center space-x-2 text-gray-500">
      <span className="material-icons">home</span>
      <span>/</span>
      <span>Dashboard</span>
    </div>
  );
};

export default BreadCrumb;
