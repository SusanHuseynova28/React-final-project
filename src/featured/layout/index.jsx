import React from 'react';
import Header from '../header';
import Footer from '../footer';
import SideBar from '../../components/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SideBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
