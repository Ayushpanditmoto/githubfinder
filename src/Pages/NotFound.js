import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
  return (
    <NotFoundContain>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to='/'>
        <FaHome />
        Go Back to Home
      </Link>
    </NotFoundContain>
  );
}

export default NotFound;

const NotFoundContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 8% - 8%);
  padding: 1rem 1rem;
  width: 100vw;
  background-color: #19d096;
  color: white;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.2rem;
  }
  a {
    background-color: #00b9e7;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    color: white;
    font-size: 1.2rem;
  }
`;
