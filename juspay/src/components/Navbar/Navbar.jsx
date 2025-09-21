import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectTheme } from '../../store/slices/ecommerceSlice';
import './Navbar.css';
import SearchIcon from '../../assets/Search.svg';
import SunIcon from '../../assets/Sun.svg';
import ClockIcon from '../../assets/ClockCounterClockwise.svg';
import BellIcon from '../../assets/Bell.svg';
import StarIcon from '../../assets/Star.svg';
import SidebarIcon from '../../assets/Sidebar.svg';

const Navbar = ({ onToggleRightSidebar, activeView }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="nav-item">
          <img src={SidebarIcon} alt="Toggle Sidebar" className="nav-icon" />
        </div>
        <div className="nav-item">
          <img src={StarIcon} alt="Favorites" className="nav-icon" />
        </div>
        <div className="nav-breadcrumb">
          <span className="dashboards">Dashboards</span>
          <span className="separator">/</span>
          <span className="default">{activeView || 'Default'}</span>
        </div>
      </div>

      <div className="navbar-right">
      <div className="navbar-search-container">
          <img src={SearchIcon} alt="Search" className="navbar-search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="navbar-search-input"
          />
          <span className="navbar-shortcut">
        ⌘ /
      </span>
        </div>
        <div className="nav-item" onClick={() => {
          console.log('Current theme:', theme);
          dispatch(toggleTheme());
        }}>
          <img 
            src={SunIcon} 
            alt="Theme Toggle" 
            className={`nav-icon ${theme === 'dark' ? 'rotate-icon' : ''}`} 
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          />
        </div>
        <div className="nav-item">
          <img src={ClockIcon} alt="History" className="nav-icon" />
        </div>
        <div className="nav-item">
          <img src={BellIcon} alt="Notifications" className="nav-icon" />
        </div>
        <div className="nav-item" onClick={onToggleRightSidebar}>
          <img src={SidebarIcon} alt="Toggle Right Sidebar" className="nav-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;