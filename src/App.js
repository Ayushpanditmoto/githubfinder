import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <HomeContain>
        <Navbar title='GitHub' />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HomeContain>
    </>
  );
}

export default App;

const HomeContain = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #767676;
`;
