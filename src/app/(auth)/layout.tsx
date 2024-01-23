import React, { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div style={{ backgroundColor: 'gold' }}>{children}</div>;
};

export default AuthLayout;
