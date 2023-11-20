import React from 'react';
import 'App.scss';
import { RouterProvider } from 'react-router-dom';
import { Header } from './components/Header/Header';
// import DogList from './components/DogList/DogList';
import Footer from './components/Footer/Footer';
import { router } from './router';
import DogPageModal from './components/Modal/DogPageModal';
// import DogList from './components/DogList/DogList';

export default function App() {
  return (
    <div>
      <DogPageModal />
      <Header />
      <div className="main-container">

        <RouterProvider router={router} />

        {/* <DogList /> */}
      </div>
      <Footer />
    </div>
  );
}
