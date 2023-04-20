import styled from "styled-components";

export const ProductContainer = styled.aside`
  width: 17.56rem;
  height: 23.62rem;
  overflow: hidden;

  margin-bottom: 1.5rem;
  .link-product {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    text-decoration: none;
    color: ${(props) => props.theme["gray-800"]};
  }

  img {
    width: 100%;
    height: auto;

    object-fit: cover;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    background-color: ${(props) => props.theme.white};
  }

  p,
  .divider {
    padding-inline: 0.75rem;
    max-width: 257px;
    overflow: hidden;
  }

  .product-name {
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 150%;
    white-space: nowrap;

    margin-top: 8px;

    &::after {
      content: "";
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    margin-inline: auto;
    background: ${(props) => props.theme["gray-100"]};
  }

  .product-value {
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 150%;
    color: ${(props) => props.theme.dark};

    margin-bottom: 8px;
  }

  @media screen and (max-width: 960px) {
    width: 13.5rem;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  @media screen and (max-width: 490px) {
    width: 9.45rem;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;
