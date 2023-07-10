import React from "react";
import styled from "styled-components";

function RepoList({ repos }) {
  return (
    <>
      {repos.map((repo, index) => {
        const { id, name, html_url, description } = repo;
        return (
          <RepoItems key={id}>
            <h3>{index + 1 + ". " + name}</h3>
            <p>{description}</p>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              Visit {name}
            </a>
          </RepoItems>
        );
      })}
    </>
  );
}

export default RepoList;

const RepoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  background-color:  ${props=>props.theme.primary};
  h3 {
    color: #fff;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom:20px;
    padding: 0.5rem 0;
  }
  a {
    color:  ${props=>props.theme.text};
    font-size: 1rem;
    background-color:  ${props=>props.theme.name === "light"?"white":"#635985"};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    max-width:700px;
    cursor: pointer;
    font-weight: 400;
  }
`;
