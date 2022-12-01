import React from 'react';
import styled from 'styled-components';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterContain>
      <p>© {year} GitHubFinder</p>
    </FooterContain>
  );
}

export default Footer;

const FooterContain = styled.footer`
  display: flex;
  width: 100%;
  height: 8%;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  background-color: #00e773;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;

  p {
    margin: 0;
  }
`;
