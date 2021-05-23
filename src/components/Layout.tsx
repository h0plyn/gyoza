import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100vw',
        maxHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
