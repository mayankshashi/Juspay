import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Navbar from './components/Navbar/Navbar';
import Ecommerce from './components/Ecommerce/Ecommerce';
import OrderList from './components/OrderList/OrderList';
import './App.css';
import './styles/theme.css';

const App = () => {
  const [activeView, setActiveView] = useState('Default');
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  const handleViewChange = (view) => {
    setActiveView(view);
    if (view === 'Orders') {
      setShowRightSidebar(false);
    } else {
      setShowRightSidebar(true);
    }
  };

  const toggleRightSidebar = () => {
    setShowRightSidebar(!showRightSidebar);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'Default':
        return <Ecommerce />;
      case 'Orders':
        return <OrderList />;
      default:
        return <Ecommerce />;
    }
  };

  return (
    <div className="app">
      <Sidebar onViewChange={handleViewChange} activeView={activeView} />
      <div className="main-content">
        <Navbar onToggleRightSidebar={toggleRightSidebar} activeView={activeView} />
        <div className="content">
          {renderContent()}
        </div>
      </div>
      {showRightSidebar && <RightSidebar />}
    </div>
  );
};

export default App;