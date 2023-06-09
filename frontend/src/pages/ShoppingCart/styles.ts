import styled from "styled-components";

export const ShoppingCartContainer = styled.section`
  background-color: ${(props) => props.theme["white-200"]};
  max-height: calc(100vh - 5rem);
  width: 100%;

  .container-center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    margin-inline: auto;
    max-width: 1220px;
    width: 100%;
  }

  .header-navigation {
    display: block;
    margin-top: 1.75rem;
    width: 100%;
    max-height: 100%;
  }

  @media screen and (max-width: 1300px) {
    padding-inline: 20px;
  }
  @media screen and (max-width: 1300px) {
    max-height: 100%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  height: 100%;
  max-height: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ProductLeft = styled.main`
  display: flex;
  width: 100%;
  max-height: 100%;

  .cart-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;

    margin-top: 3rem;

    h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 2.75rem;
      width: 100%;
      border: none;
      border-radius: 4px;
      background-color: ${(props) => props.theme.blue};
      color: rgb(255, 255, 255);
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
      text-transform: uppercase;
      text-decoration: none;

      transition: all 0.2s;
      &:hover {
        filter: contrast(1.3);
      }
    }

    P {
      display: flex;
      flex-wrap: wrap;
      max-width: 30rem;
      text-align: center;
    }
  }

  .text {
    max-height: 100%;

    header {
      margin-block: 1.5625rem 1.4375rem;

      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 150%;
        text-transform: uppercase;
        color: ${(props) => props.theme["gray-800"]};

        margin-bottom: 0.375rem;
      }

      span {
        font-style: normal;
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 150%;
        color: ${(props) => props.theme["gray-800"]};
      }
    }
  }

  .container-item {
    max-height: 100%;
    width: 100%;

    ul {
      list-style-type: none;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 1rem;

      width: 100%;
      height: calc(100vh - 17rem);
      overflow-y: auto;
    }

    li {
      display: flex;
      height: 100%;
      max-width: 46rem;
      max-height: 13.1875rem;
      width: 100%;
      height: 100%;

      div {
        img {
          width: 256px;
          height: 211px;
          object-fit: fill;
          aspect-ratio: 32/19;
          border-radius: 8px 0 0 8px;
        }
      }

      section {
        padding: 1rem 1rem 1.5rem 2rem;
        border-radius: 0 8px 8px 0;
        background: ${(props) => props.theme.white};
        height: 100%;

        header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 0.75rem;

          h4 {
            font-style: normal;
            font-weight: 300;
            font-size: 1.25rem;
            line-height: 150%;
          }

          button {
            font-size: 0;
            background: transparent;
            border: none;

            img {
              display: flex;
              width: 24px;
              height: 24px;
            }

            transition: all 0.2s;
            &:hover {
              filter: brightness(1.5);
            }
          }
        }

        .description {
          font-style: normal;
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 150%;
          margin-bottom: 1.56rem;

          max-height: 3rem;
          overflow: auto;

          &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }
        }

        aside {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .dropdownQuantity {
            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;
            .dropdownQuantity-toggle {
              display: flex;
              align-items: center;
              justify-content: space-evenly;

              width: 4.06rem;
              height: 2.5rem;

              border-radius: 8px;
              border: 1px solid ${(props) => props.theme["gray-400"]};
              background: ${(props) => props.theme["white-200"]};
              color: ${(props) => props.theme["gray-400"]};

              font-style: normal;
              font-weight: 400;
              font-size: 1rem;
              line-height: 150%;

              img {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 10px;
                height: 10px;
              }

              transition: all 0.2s;
              &--active {
                ::after {
                  rotate: 180deg;
                }
              }
            }

            .dropdownQuantity-content {
              opacity: 0;
              max-height: 0px;
              pointer-events: none;
              visibility: hidden;

              position: absolute;
              top: 2.7rem;

              display: flex;
              align-items: center;
              justify-content: space-evenly;
              flex-direction: column;

              width: 4.06rem;
              height: 9.06rem;
              background: ${(props) => props.theme["white"]};
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              border: none;

              &--active {
                opacity: 1;
                max-height: none;
                pointer-events: all;
                visibility: visible;
              }
            }

            .button-quantity {
              font-style: normal;
              font-weight: 400;
              font-size: 1rem;
              line-height: 150%;
              color: ${(props) => props.theme["gray-400"]};

              border: none;
              background: transparent;
              width: 100%;
            }
          }

          b {
            font-style: normal;
            font-weight: 600;
            font-size: 1rem;
            line-height: 150%;
            color: ${(props) => props.theme.dark};
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .container-item {
      ul {
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      }
      li {
        max-width: 100%;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 670px) {
    .container-item li {
      div {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        .description {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .container-item ul {
      li {
        display: flex;
        flex-direction: column;
        max-height: none;
        section {
          padding: 1rem;
        }
      }
    }
  }
`;

export const ProductRight = styled.aside`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  padding: 1rem 1.5rem 1.5rem 1.5rem;
  height: calc(100vh - 8.2rem);
  max-width: 22rem;
  width: 100%;
  background-color: ${(props) => props.theme.white};

  header {
    width: 100%;
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 150%;
      color: ${(props) => props.theme["gray-800"]};

      margin-bottom: 1.89rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      h5 {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
      }
    }
    .subtotal {
      margin-bottom: 0.75rem;
    }
    .delivery {
      margin-bottom: 1.5rem;
    }
    .divider {
      height: 1px;
      width: 100%;
      margin-bottom: 0.5rem;
      background-color: ${(props) => props.theme["gray-800"]};
    }

    .total {
      margin-bottom: 1.5rem;

      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 150%;
      }

      b {
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 150%;
      }
    }

    button {
      height: 2.75rem;
      width: 100%;

      border: none;
      border-radius: 4px;
      background-color: ${(props) => props.theme.green};
      color: ${(props) => props.theme.white};

      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
      text-transform: uppercase;

      transition: all 0.2s;
      &:hover {
        filter: brightness(1.1);
      }

      &:disabled {
        opacity: 0.5;
        cursor: no-drop;
      }
    }
  }

  footer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    a {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 150%;
      text-transform: uppercase;
      color: ${(props) => props.theme["gray-400"]};
    }
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
    max-width: 100%;

    header {
      margin-bottom: 5rem;
    }
  }
`;

export const CheckoutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  position: absolute;
  z-index: 5;
  inset: 0;
  background: white;

  h1 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 150%;
    text-align: center;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 150%;
    text-align: center;
  }

  .dots-3 {
    width: 60px;
    aspect-ratio: 2;
    --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
    background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
    background-size: calc(100% / 3) 50%;
    animation: d3 1s infinite linear;
  }
  @keyframes d3 {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  }
`;
