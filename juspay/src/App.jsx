import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        {/* Main content will go here */}
      </div>
    </div>
  );
};

export default App;