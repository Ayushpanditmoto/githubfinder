import React from "react";
import styled from "styled-components";

function RepoList({ repos }) {
  return (
    <div>
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
    </div>
  );
}

export default RepoList;

const RepoItems = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  background-color: #0068e7;
  h3 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
  }
  p {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    padding: 0.5rem 0;
  }
  a {
    color: #3c3c3c;
    font-size: 1rem;
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 400;
  }
`;
