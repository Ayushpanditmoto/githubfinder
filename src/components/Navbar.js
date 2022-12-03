import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { useContext } from 'react';
import GithubContext from '../context/githubContext';

function Navbar({ title }) {
  const { clearUsers } = useContext(GithubContext);
  return (
    <NavContain>
      <NavTitle onClick={clearUsers}>
        <Link to='/'>
          <FaGithub />
          {title}
        </Link>
      </NavTitle>
      <NavLinks>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </NavLinks>
    </NavContain>
  );
}

Navbar.defaultProps = {
  title: 'GithubFinder',
  icon: <FaGithub />,
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Navbar;

const NavContain = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #00e773;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
`;

const NavTitle = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  color: white;
  a {
    gap: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    svg {
      display: flex;
      align-items: center;
      font-size: 2rem;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    font-size: 1rem;
    &:hover {
      text-decoration: none;
      background-color: #14ca6c;
    }
  }
`;
