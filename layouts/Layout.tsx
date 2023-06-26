'use client';

import Navbar from './HomeLayout/Navbar';
import Footer from './HomeLayout/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar/>
        {children}
      <Footer/>
    </>
  );
};

export default Layout;
