import React from 'react';

const DefaultCompanyLogo: React.FC<{ name: string }> = ({ name }) => (
  <div className="w-full h-full bg-slate-700 flex items-center justify-center text-white font-bold text-xs rounded-md">
    {name.substring(0, 2).toUpperCase()}
  </div>
);

export default DefaultCompanyLogo;
