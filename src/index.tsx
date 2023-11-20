import React from 'react';
import ReactDOM from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { router } from 'router.tsx';
import { store } from './store/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
