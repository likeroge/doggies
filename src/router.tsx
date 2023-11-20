import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DogList from './components/DogList/DogList';
import DogPage from './components/DogPage/DogPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DogList />,
  },
  {
    path: 'volkodav/:dogId',
    element: <DogPage />,
  },

]);
