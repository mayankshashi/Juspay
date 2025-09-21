import { createSlice } from '@reduxjs/toolkit';

const INITIAL_ORDERS = [
  {
    id: 'CM9801',
    user: { name: 'Natali Craig', avatarKey: 'Female05' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress'
  },
  {
    id: 'CM9802',
    user: { name: 'Kate Morrison', avatarKey: 'Female08' },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete'
  },
  {
    id: 'CM9803',
    user: { name: 'Drew Cano', avatarKey: 'Male06' },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending'
  },
  {
    id: 'CM9804',
    user: { name: 'Orlando Diggs', avatarKey: 'Male07' },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved'
  },
  {
    id: 'CM9805',
    user: { name: 'Andi Lane', avatarKey: 'Female09' },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected'
  },
  {
    id: 'CM9806',
    user: { name: 'Sarah Wilson', avatarKey: 'Female15' },
    project: 'Mobile App',
    address: 'Main Street Boston',
    date: 'Feb 1, 2023',
    status: 'In Progress'
  },
  {
    id: 'CM9807',
    user: { name: 'John Smith', avatarKey: 'Male08' },
    project: 'Website Redesign',
    address: 'Oak Avenue Chicago',
    date: 'Jan 30, 2023',
    status: 'Complete'
  },
  {
    id: 'CM9808',
    user: { name: 'Emily Davis', avatarKey: 'Female05 (1)' },
    project: 'E-commerce Platform',
    address: 'Pine Street Seattle',
    date: 'Jan 28, 2023',
    status: 'Pending'
  },
  {
    id: 'CM9809',
    user: { name: 'Michael Brown', avatarKey: 'Male11' },
    project: 'Analytics Dashboard',
    address: 'Cedar Lane Miami',
    date: 'Jan 25, 2023',
    status: 'Approved'
  },
  {
    id: 'CM9810',
    user: { name: 'Lisa Johnson', avatarKey: 'Female08' },
    project: 'Portfolio Site',
    address: 'Elm Street Denver',
    date: 'Jan 22, 2023',
    status: 'In Progress'
  }
];

const initialState = {
  orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : INITIAL_ORDERS,
  selectedOrders: new Set(),
  searchTerm: '',
  currentPage: 1,
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
      localStorage.setItem('orders', JSON.stringify(action.payload));
    },
    addOrder: (state, action) => {
      const newOrder = {
        ...action.payload,
        id: action.payload.id.startsWith('CM') ? action.payload.id : `CM${action.payload.id}`
      };
      state.orders = [newOrder, ...state.orders];
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    updateOrder: (state, action) => {
      state.orders = state.orders.map(order =>
        order.id === action.payload.id ? { ...action.payload } : order
      );
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setSelectedOrders: (state, action) => {
      state.selectedOrders = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setOrders,
  addOrder,
  updateOrder,
  deleteOrder,
  setSelectedOrders,
  setSearchTerm,
  setCurrentPage,
} = orderSlice.actions;

// Selectors
export const selectOrders = (state) => state.orders.orders;
export const selectSelectedOrders = (state) => state.orders.selectedOrders;
export const selectSearchTerm = (state) => state.orders.searchTerm;
export const selectCurrentPage = (state) => state.orders.currentPage;

export default orderSlice.reducer;
