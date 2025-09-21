import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/slices/ecommerceSlice';

const ThemeProvider = ({ children }) => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
