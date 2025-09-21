## Juspay Dashboard (React + Vite)

A React dashboard built with Vite featuring theming, charts, and a Redux state layer. This README explains how to run the app, the libraries used, and key features.

### Prerequisites
- Node.js 18+ and npm 9+

### Getting Started
1) Install dependencies
```bash
npm install
```
2) Start the development server (HMR enabled)
```bash
npm run dev
```
3) Build for production
```bash
npm run build
```
4) Preview the production build locally
```bash
npm run preview
```

### Project Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Libraries and Why They’re Used
- React, React DOM: UI rendering
- Vite: Fast dev server and build tooling
- @reduxjs/toolkit, react-redux: Centralized state management (slices, selectors, dispatch)
- recharts: Data visualization for revenue/projection charts
- @radix-ui/react-* and @shadcn/ui: Primitive UI building blocks
- lucide-react: Icon set used across UI
- class-variance-authority, clsx, tailwind-merge, tailwindcss-animate: Utility helpers for composing class names and simple animations
- ESLint and related plugins: Linting and code quality

## Features
- Theming
  - CSS variables defined in `src/styles/theme.css`
  - `ThemeProvider` sets `data-theme` on the root from Redux state
  - Dark/light mode toggle via the sun icon in the navbar
  - Card backgrounds respect theme (`--card-bg`), with specific cards pinned to fixed text/icon colors as needed

- Dashboard Navigation
  - Sidebar composed of `Favorites`, `Dashboard`, and `Pages`
  - Items and subitems are driven by Redux in `sidebarSlice` (`dashboardItems`, `pagesItems`)
  - Breadcrumb in `Navbar` reflects the current active view (e.g., Orders)

- Data Panels
  - eCommerce overview: stats cards and charts
  - Orders view
  - Location, Sales, Total Sales sections
  - Activities and Notifications sourced from Redux (`sidebarSlice`)
  - Contacts sourced from Redux (`sidebarSlice`)

- State Management
  - Store configured in `src/store/store.js`
  - Slices:
    - `ecommerceSlice`: theme, stats, revenue, projection, location, sales
    - `sidebarSlice`: contacts, activities, notifications, dashboardItems, pagesItems
    - `orderSlice`: order-related state
  - Selectors exported from each slice (e.g., `selectTheme`, `selectContacts`, `selectActivities`, `selectNotifications`, `selectDashboardItems`, `selectPagesItems`)

## Code Map (Key Files)
- `src/main.jsx`: App bootstrap with Redux Provider and ThemeProvider
- `src/App.jsx`: Layout, active view switching, right sidebar toggle
- `src/styles/theme.css`: Theme variables and global theme styles
- `src/components/*`: Feature components (Navbar, Sidebar, Charts, Cards, Pages, etc.)
- `src/store/`: Redux store and slices

## Notes
- Theme preference persists via `localStorage` (managed in `ecommerceSlice`)
- Images and SVGs live in `src/assets/`

## Troubleshooting
- If the dev server doesn’t start, ensure Node 18+ is installed
- Clear and reinstall dependencies if needed:
```bash
rm -rf node_modules package-lock.json
npm install
```
