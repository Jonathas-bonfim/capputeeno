import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  gap: 2px;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 32px;
    width: 32px;
    background-color: #e9e9f0;
    border-radius: 8px;
    border: 1px solid transparent;

    transition: all 0.2s;
    &.active {
      border: 1px solid ${(props) => props.theme["orange-low"]};

      a {
        color: ${(props) => props.theme["orange-low"]};
      }
    }
  }

  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    color: ${(props) => props.theme["gray-400"]};
  }
`;
