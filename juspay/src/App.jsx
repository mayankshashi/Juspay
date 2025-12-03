import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Navbar from './components/Navbar/Navbar';
import Ecommerce from './components/Ecommerce/Ecommerce';
import OrderList from './components/OrderList/OrderList';
import './App.css';
import './styles/theme.css';

const App = () => {
  const [activeView, setActiveView] = useState('Default');
  const [showSidebar, setShowSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  // Auto-hide both sidebars on screens narrower than 1120px, show them again on larger screens
  useEffect(() => {
    const handleResize = () => {
      const isNarrow = window.innerWidth < 1120;
      setShowSidebar(!isNarrow);
      setShowRightSidebar(!isNarrow);
    };

    handleResize(); // set initial state based on current width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
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
      {showSidebar && (
        <Sidebar onViewChange={handleViewChange} activeView={activeView} />
      )}
      <div className="main-content">
        <Navbar
          onToggleLeftSidebar={toggleSidebar}
          onToggleRightSidebar={toggleRightSidebar}
          activeView={activeView}
        />
        <div className="content">
          {renderContent()}
        </div>
      </div>
      {showRightSidebar && <RightSidebar />}
    </div>
  );
};

export default App;