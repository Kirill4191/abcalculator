import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Grid Debug Overlay */}
      <div className="fixed inset-0 mx-auto px-20 pointer-events-none">
        <div className="h-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-6 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="col-span-1 h-full bg-red-100/40 border-x border-gray-200/20" />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-12 gap-6 bg-green-100/40">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;