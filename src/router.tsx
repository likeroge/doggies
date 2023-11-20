import React from 'react';
import { createHashRouter } from 'react-router-dom';
import DogList from './components/DogList/DogList';
import DogPage from './components/DogPage/DogPage';

// export const router = createBrowserRouter([
export const router = createHashRouter([
  {
    path: '/',
    element: <DogList />,
  },
  {
    path: 'volkodav/:dogId',
    element: <DogPage />,
  },

]);
