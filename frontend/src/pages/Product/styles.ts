import styled from "styled-components";

export const ProductContainer = styled.section`
  display: flex;

  @media screen and (max-width: 1300px) {
    padding-inline: 20px;
    width: 100%;
    overflow-y: hidden;
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;

  aside {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    width: 70px;
    margin-top: 1.5625rem;
    margin-bottom: 1.375rem;

    button {
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
    }
  }

  main {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .imageProduct {
      width: 700px;
      height: 580px;
      object-fit: fill;
    }

    @media screen and (max-width: 1024px) {
      align-items: center;
      flex-direction: column;

      .imageProduct {
        max-width: 400px;
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
`;

export const ProductText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  max-width: 440px;

  article {
    .category {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;
      color: ${(props) => props.theme["gray-800"]};
      margin-bottom: 0.75rem;
    }
    .title {
      font-style: normal;
      font-weight: 300;
      font-size: 2rem;
      line-height: 150%;
      color: ${(props) => props.theme["gray-800"]};
      margin-bottom: 0.55rem;
    }
    .price {
      font-style: normal;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 150%;
      color: ${(props) => props.theme.dark};
      margin-bottom: 1.5rem;
    }
    .note {
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 150%;
      color: ${(props) => props.theme["gray-800"]};
      margin-bottom: 3.625rem;
    }
    .title-description {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
      color: ${(props) => props.theme["gray-400"]};
      margin-bottom: 0.5rem;
    }
    .description {
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 150%;
      color: ${(props) => props.theme["gray-800"]};
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 4px;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 150%;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.blue};

    &::before {
      content: url("/src/assets/images/product/shopping-bag.svg");
      display: flex;
      height: 24px;
      width: 24px;
    }

    transition: all 0.2s;
    &:hover {
      filter: contrast(1.3);
    }
  }

  @media screen and (max-width: 490px) {
    article,
    button {
      margin-bottom: 2rem;
    }
  }
`;
