import { createGlobalStyle } from 'styled-components'

export const lightMode = {
  name:"light",
  background: "white",
  primary: "#0068e7",
  secondary: "#008fcc",
  text: "black",
};

export const darkMode = {
  name:"dark",
  background: "#18122B",
  primary: "#393053",
  secondary: "#443C68",
  text: "white",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.background)};
  }
`;