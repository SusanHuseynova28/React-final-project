import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidebar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};