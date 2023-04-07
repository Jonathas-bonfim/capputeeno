import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["gray-50"]};
    color: ${(props) => props.theme["gray-800"]};
  }

  button,
  link,
  input {
  cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Saira', sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }
`;
