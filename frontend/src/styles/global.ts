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
  link {
  cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Saira', sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #777777;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #e5e5e5;
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #777777;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #e5e5e5;
    border-radius: 5px;
  }

  @media screen and (max-width: $breackpoint768) {
  html {
    font-size: 14px;
  }
}
`;
