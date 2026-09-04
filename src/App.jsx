import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import Navbar from './Components/Navbar.jsx';

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
