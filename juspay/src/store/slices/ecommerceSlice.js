import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  stats: [
    {
      title: 'Customers',
      value: '3,781',
      trend: true,
      trendValue: '11.01',
      background: 'var(--Primary-Blue, #E3F5FF)'
    },
    {
      title: 'Orders',
      value: '1,219',
      trend: true,
      trendValue: '-0.03',
      background: 'var(--card-bg)'
    },
    {
      title: 'Revenue',
      value: '$695',
      trend: true,
      trendValue: '15.03',
      background: 'var(--card-bg)'
    },
    {
      title: 'Growth',
      value: '30.1%',
      trend: true,
      trendValue: '6.08',
      background: 'var(--Primary-Purple, #E5ECF6)'
    }
  ],
  revenue: {
    monthlyData: [
    { month: 'Jan', current: 14, previous: 10 },
    { month: 'Feb', current: 10, previous: 19 },
    { month: 'Mar', current: 11, previous: 16 },
    { month: 'Apr', current: 16, previous: 12 },
    { month: 'May', current: 20, previous: 14 },
    { month: 'Jun', current: 21, previous: 22 }
    ],
    totalRevenue: '$12,900'
  },
  projection: {
    data: [
      { month: 'Jan', projected: 22, actual: 18 },
      { month: 'Feb', projected: 27, actual: 23 },
      { month: 'Mar', projected: 18, actual: 14 },
      { month: 'Apr', projected: 25, actual: 21 },
      { month: 'May', projected: 15, actual: 11 },
      { month: 'Jun', projected: 20, actual: 16 },
    ],
    accuracy: '92%'
  },
  location: {
    topLocations: [
      { city: 'New York', orders: 120, percentage: 25 },
      { city: 'Los Angeles', orders: 80, percentage: 20 },
      { city: 'Chicago', orders: 60, percentage: 15 },
      { city: 'Houston', orders: 40, percentage: 10 },
    ]
  },
  sales: {
    recentSales: [
      {
        name: 'ASOS Ridley High Waist',
        price: '$79.49',
        quantity: 82,
        amount: '$6,518.18'
      },
      {
        name: 'Marco Lightweight Shirt',
        price: '$128.50',
        quantity: 37,
        amount: '$4,754.50'
      },
      {
        name: 'Half Sleeve Shirt',
        price: '$39.99',
        quantity: 64,
        amount: '$2,559.36'
      },
      {
        name: 'Lightweight Jacket',
        price: '$20.00',
        quantity: 184,
        amount: '$3,680.00'
      },
      {
        name: 'Marco Shoes',
        price: '$79.49',
        quantity: 64,
        amount: '$1,965.81'
      }
    ],
    totalSales: {
      daily: '$1,200',
      weekly: '$8,400',
      monthly: '$35,000'
    }
  }
};

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    updateStats: (state, action) => {
      state.stats = action.payload;
    },
    updateRevenue: (state, action) => {
      state.revenue = action.payload;
    },
    updateProjection: (state, action) => {
      state.projection = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updateSales: (state, action) => {
      state.sales = action.payload;
    },
    toggleTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      localStorage.setItem('theme', newTheme);
    }
  }
});

export const {
  updateStats,
  updateRevenue,
  updateProjection,
  updateLocation,
  updateSales,
  toggleTheme
} = ecommerceSlice.actions;

// Selectors
export const selectStats = (state) => state.ecommerce.stats;
export const selectRevenue = (state) => state.ecommerce.revenue;
export const selectProjection = (state) => state.ecommerce.projection;
export const selectLocation = (state) => state.ecommerce.location;
export const selectSales = (state) => state.ecommerce.sales;
export const selectTheme = (state) => state.ecommerce.theme;

export default ecommerceSlice.reducer;
