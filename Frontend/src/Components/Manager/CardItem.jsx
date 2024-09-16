/* eslint-disable react/prop-types */
// import React from 'react';

const CardItem = ({ title, value, percentage, Icon }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h3>
      <Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
    </div>
    <div className="flex-1">
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{percentage}</p>
    </div>
  </div>
);

export default CardItem;
