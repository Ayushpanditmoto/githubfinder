import styled from 'styled-components';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import SingleUser from './components/singleUser';
import Footer from './components/Footer';
import { GithubProvider } from './context/githubContext';
import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
          <HomeContain>
            <Navbar title='GitHub' />
            <Alert />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<SingleUser />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </HomeContain>
        </AlertProvider>
      </GithubProvider>
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
