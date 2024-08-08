/* eslint-disable react/prop-types */
// import React from 'react';

const CardItem = ({ title, value, percentage, Icon }) => (
  <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <Icon className="h-6 w-6 text-gray-500" />
    </div>
    <div className="flex-1">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <p className="text-xs text-gray-500">{percentage}</p>
    </div>
  </div>
);

export default CardItem;
