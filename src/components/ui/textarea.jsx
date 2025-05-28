import React from 'react';

const textarea = ({ value, onChange, placeholder, rows = 4, className = '' }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    />
  );
};

export default textarea;
