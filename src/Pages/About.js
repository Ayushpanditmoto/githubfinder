import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <AboutContain>
      <h1>Github Finder</h1>
      <p>
        This is a simple React app that uses the GitHub API to search for users
        and display their information.
      </p>
      <p>Version: 1.0.0</p>
    </AboutContain>
  );
}

export default About;

const AboutContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 8% - 8%);
  padding: 1rem 1rem;
  width: 100vw;
  background-color: #19d096;
  color: white;
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  p {
    font-size: 1.2rem;
    margin: 0;
  }
`;
