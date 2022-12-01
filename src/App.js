import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HomeContain>
        <Navbar title='GitHub' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </HomeContain>
    </>
  );
}

export default App;

const HomeContain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: #767676; */
`;
