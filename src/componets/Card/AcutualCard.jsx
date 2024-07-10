// src/App.js
import React from 'react';
import { FaDollarSign, FaShoppingCart, FaUser, FaChartLine } from 'react-icons/fa';
import Card from './Card';

const  ActualCard = () => {
  const cardData = [
    {
      title: "the monsy",
      amount: "000",
      percentage: "5%",
      icon: FaDollarSign,
      bgColorFrom: "from-blue-400",
      bgColorTo: "to-blue-600",
    },
    {
      title: "toal",
      amount: "23,000",
      percentage: "+12%",
      icon: FaShoppingCart,
      bgColorFrom: "from-green-400",
      bgColorTo: "to-green-600",
    },
    {
      title: "New Users",
      amount: "1,5",
      percentage: "+25%",
      icon: FaUser,
      bgColorFrom: "from-purple-400",
      bgColorTo: "to-purple-600",
    },
    {
      title: "Total Clicks",
      amount: "100,000",
      percentage: "+5%",
      icon: FaChartLine,
      bgColorFrom: "from-red-400",
      bgColorTo: "to-red-600",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-row items-center p-10 justify-center space-x-72 ml-14">
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          amount={data.amount}
          percentage={data.percentage}
          icon={data.icon}
          bgColorFrom={data.bgColorFrom}
          bgColorTo={data.bgColorTo}
        />
      ))}
    </div>
  );
};

export default ActualCard;
