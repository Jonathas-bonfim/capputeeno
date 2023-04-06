import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.white};
  height: 5rem;

  .container-center {
    max-width: 76.25rem;
    height: 100%;
    margin-inline: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  aside {
    a {
      font-family: "Saira Stencil One";
      font-style: normal;
      font-weight: 400;
      font-size: 2.5rem;
      line-height: 150%;
      text-decoration: none;
      color: ${(props) => props.theme["gray-999"]};
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.688rem;
  }

  article {
    display: flex;
    align-items: center;

    input {
      background-color: ${(props) => props.theme["white-200"]};
      border: none;
      outline: none;
      border-radius: 8px;
      height: 42px;
      width: 352px;

      padding-left: 16px;

      &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: ${(props) => props.theme["gray-100"]};

        /* padding-left: 16px; */
      }
    }

    a {
      margin-left: -35px;
      height: 24px;
      width: 24px;
    }
  }

  .cart {
    position: relative;
    p {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 0;
      right: -8px;

      width: 17px;
      height: 17px;
      background: ${(props) => props.theme.orange};
      border-radius: 50%;

      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 26px;
      text-align: center;
      color: ${(props) => props.theme.white};
    }
  }
`;
