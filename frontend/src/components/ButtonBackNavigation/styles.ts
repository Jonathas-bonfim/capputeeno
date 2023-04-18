import styled from "styled-components";

export const ButtonNavigation = styled.button`
  display: flex;

  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 150%;
  text-decoration: none;
  border: none;
  background: transparent;
  color: ${(props) => props.theme["gray-200"]};

  &::before {
    content: url("/src/assets/images/product/back.svg");
    width: 18px;
    height: 18px;
    margin-right: 11px;
  }
  transition: all 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
`;
