import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 1, name: 'Natali Craig', avatarKey: 'Female08' },
    { id: 2, name: 'Drew Cano', avatarKey: 'Male08' },
    { id: 3, name: 'Orlando Diggs', avatarKey: 'Male06' },
    { id: 4, name: 'Andi Lane', avatarKey: 'Female09' },
    { id: 5, name: 'Kate Morrison', avatarKey: 'Female15' },
    { id: 6, name: 'Koray Okumus', avatarKey: 'Male04' }
  ],
  activities: [
    { id: 1, avatarKey: 'Male_1', message: 'You have a bug that needs...', time: 'Just now' },
    { id: 2, avatarKey: 'Female05', message: 'Released a new version', time: '59 minutes ago' },
    { id: 3, avatarKey: 'Female01', message: 'Submitted a bug', time: '12 hours ago' },
    { id: 4, avatarKey: 'Male07', message: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
    { id: 5, avatarKey: 'Male11', message: 'Deleted a page in Project X', time: 'Feb 2, 2023' }
  ],
  notifications: [
    { id: 1, type: 'bug', message: 'You have a bug that needs...', time: 'Just now' },
    { id: 2, type: 'user', message: 'New user registered', time: '39 minutes ago' },
    { id: 3, type: 'bug', message: 'You have a bug that needs...', time: '12 hours ago' },
    { id: 4, type: 'user', message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' }
  ],
  dashboardItems: [
    { iconKey: 'defaultIcon', label: 'Default' },
    { iconKey: 'ecommerceIcon', label: 'Orders' },
    { iconKey: 'projectsIcon', label: 'Projects' },
    { iconKey: 'coursesIcon', label: 'Online Courses' }
  ],
  pagesItems: [
    { iconKey: 'userProfileIcon', label: 'User Profile', subitems: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers'] },
    { iconKey: 'accountIcon', label: 'Account', subitems: ['Settings', 'Billing', 'Notifications'] },
    { iconKey: 'corporateIcon', label: 'Corporate', subitems: ['About', 'Team', 'Partners'] },
    { iconKey: 'blogIcon', label: 'Blog', subitems: ['Posts', 'Categories', 'Tags'] },
    { iconKey: 'socialIcon', label: 'Social', subitems: ['Feed', 'Activity', 'Connections'] }
  ]
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    updateContacts: (state, action) => {
      state.contacts = action.payload;
    },
    updateActivities: (state, action) => {
      state.activities = action.payload;
    },
    updateNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    updateDashboardItems: (state, action) => {
      state.dashboardItems = action.payload;
    },
    updatePagesItems: (state, action) => {
      state.pagesItems = action.payload;
    }
  }
});

export const { updateContacts, updateActivities, updateNotifications, updateDashboardItems, updatePagesItems } = sidebarSlice.actions;

export const selectContacts = (state) => state.sidebar.contacts;
export const selectActivities = (state) => state.sidebar.activities;
export const selectNotifications = (state) => state.sidebar.notifications;
export const selectDashboardItems = (state) => state.sidebar.dashboardItems;
export const selectPagesItems = (state) => state.sidebar.pagesItems;

export default sidebarSlice.reducer;


