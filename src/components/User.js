import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function User({ user: { login, avatar_url, html_url } }) {
  return (
    <UserContainer>
      <img src={avatar_url} alt={login} />
      <div className='title'>
        <h3>{login}</h3>
        <Link to={`/user/${login}`}>View Profile</Link>
      </div>
    </UserContainer>
  );
}

export default User;

const UserContainer = styled.div`
  background-color: #ffffff;
  height: auto;
  width: 350px;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
