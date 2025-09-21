import { createSlice } from '@reduxjs/toolkit';

const INITIAL_ORDERS = [
  {
    id: 'CM9801',
    user: { name: 'Natali Craig', avatar: '/src/assets/Female05.png' },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress'
  },
  // ... other initial orders from OrderList.jsx
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
