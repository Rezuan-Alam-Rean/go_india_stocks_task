import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`transform top-0 left-0 w-64 bg-blue-800 text-white fixed h-full z-40 overflow-auto ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Sidebar links */}
        {/* ... */}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Content */}
      <div className="flex-1">
        {/* ... */}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 top-0 mt-5 ${isOpen ? 'left-64' : 'left-0'} transition-all duration-300`}
      >
        {/* Icon */}
      </button>
    </div>
  );
};

export default Sidebar;
