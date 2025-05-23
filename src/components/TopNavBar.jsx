import React from 'react';

export default function TopNavBar() {
  return (
    <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold">KOR.AI <span className="text-gray-400 ml-2">Surveillance</span></div>
      <input
        type="text"
        placeholder="Search alerts..."
        className="px-3 py-1 rounded border border-gray-300 text-black"
      />
    </div>
  );
}
