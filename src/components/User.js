import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function User({ user: { login, avatar_url, html_url } }) {
  return (
    <UserContainer>
      <img src={avatar_url} alt={login} />
      <div className="title">
        <h3>{login}</h3>

        <Link to={`/user/${login}`}>View Profile</Link>

        <a href={html_url} className="new">
          Github Link
        </a>
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
  gap: 2rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    height: 140px;
    gap: 1rem;
    a {
      text-decoration: none;
      color: #ffffff;
      background-color: #0068e7;
      width: 100px;
      font-weight: 700;
      font-size: 0.7rem;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .new {
      background-color: transparent;
      color: #0068e7;
      border: 1px solid #0068e7;
      font-weight: 700;
      font-size: 0.7rem;
      &:hover {
        background-color: #003f7f;
        color: #ffffff;
        border: none;
      }
    }
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
