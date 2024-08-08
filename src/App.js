import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './featured/header';
import Footer from './featured/footer';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            {/* Define your routes here if needed */}
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
