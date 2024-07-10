// src/components/MoneyCard.jsx
import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const Card = ({ title, amount, percentage, icon: Icon, bgColorFrom, bgColorTo }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <div className="flex-grow">
        <p className="text-gray-500">{title}</p>
        <div className="flex items-baseline">
          <h2 className="text-2xl font-bold">{amount}</h2>
          <span className="text-green-500 ml-2">{percentage}</span>
        </div>
      </div>
      <div className={`bg-gradient-to-r ${bgColorFrom} ${bgColorTo} p-4 rounded-full text-white`}>
        <FaDollarSign size={24} />
      </div>
    </div>
  );
};

export default Card;
