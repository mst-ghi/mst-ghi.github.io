'use client';

import { Navbar } from '.';
import { Background } from '../common';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='page'>
      <Background />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
