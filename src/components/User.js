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
  background-color:  ${props=>props.theme.name ==="light"?"white":"#393053"};
  height: auto;
  width: 350px;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  gap: 2rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: ${props=>props.theme.name ==="light"?"none":"2px solid #635985"};

  .title {
    display: flex;
    flex-direction: column;
    height: 140px;
    color: ${props=>props.theme.text};
    gap: 1rem;
    a {
      text-decoration: none;
      color: #ffffff;
      background-color: ${props=>props.theme.name ==="light"?props.theme.primary:props.theme.secondary};
      width: 100px;
      font-weight: 700;
      font-size: 0.7rem;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      transition: all 0.3s ease-out;
      &:hover {
        background-color: ${props=>props.theme.name ==="light"?"#003f7f":"#635985"};
        color: #ffffff;
        border: none;
      }
    }
    .new {
      background-color: transparent;
      color: ${props=>props.theme.name ==="light"?props.theme.primary:"#635985"};
      border: 1px solid;
      border-color: ${props=>props.theme.name ==="light"?props.theme.primary:"#635985"};
      font-weight: 700;
      transition: all 0.3s ease-out;
      font-size: 0.7rem;
      &:hover {
        background-color: ${props=>props.theme.name ==="light"?"#003f7f":"#635985"};
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
