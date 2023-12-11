// src/components/Layout.js
import React, { useContext } from 'react';
import { LayoutContext } from '../context/LayoutContext';

const Layout = ({ children }) => {
  const { isDefaultLayout } = useContext(LayoutContext);

  const style = {
    backgroundColor: isDefaultLayout ? '#3498db' : '#ffffff',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div className="min-h-screen flex flex-col" style={style}>
      {children}
    </div>
  );
};

export default Layout;
