import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Navbar from './components/Navbar/Navbar';
import Ecommerce from './components/Ecommerce/Ecommerce';
import OrderList from './components/OrderList/OrderList';
import './App.css';

const App = () => {
  const [activeView, setActiveView] = useState('Default');

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'Default':
        return <OrderList />;
      case 'eCommerce':
        return <Ecommerce />;
      default:
        return <OrderList />;
    }
  };

  return (
    <div className="app">
      <Sidebar onViewChange={handleViewChange} activeView={activeView} />
      <div className="main-content">
        <Navbar />
        <div className="content">
          {renderContent()}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default App;