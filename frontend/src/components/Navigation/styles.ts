import styled from "styled-components";

export const NavigationContainer = styled.section`
  background: ${(props) => props.theme["gray-50"]};
  width: 100%;
`;

export const ContainerCenter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  max-width: 1220px;
  width: 100%;
  max-height: 92rem;
  height: 100%;
  margin: 0 auto;
`;

export const AsideContainer = styled.aside`
  display: flex;
  gap: 2.5rem;
  margin-block: 34px;

  button {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 22px;
    color: ${(props) => props.theme["gray-800"]};
    text-transform: uppercase;
    text-decoration: none;
    background-color: transparent;

    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-inline: none;

    &.active {
      border-bottom: 4px solid ${(props) => props.theme["orange-low"]};
    }

    transition: all 0.2s;
    &:hover {
      filter: contrast(1.5);
    }
  }
`;

export const ArticleContainer = styled.article`
  margin-block: auto;
  .dropdown {
    position: relative;
  }

  button {
    border: none;
    background: transparent;

    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 22px;
  }

  .dropdown-toggle {
    &::after {
      content: url("src/assets/images/orderby/arrow.svg");
      margin-left: 1rem;

      background-color: transparent;
    }
  }

  .dropdown-content {
    opacity: 0;
    max-height: 0;
    pointer-events: none;
    visibility: hidden;

    position: absolute;
    right: 0;
    top: 2rem;

    width: 11rem;
    height: 8.25rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.25rem;

    .button-orderby {
      padding-inline: 1rem;
    }

    &--active {
      opacity: 1;
      max-height: none;
      pointer-events: all;
      visibility: visible;
    }
  }
`;

export const ProductContainer = styled.section`
  .pagination {
    justify-content: flex-end;
  }
  .pagination-top {
    margin-bottom: 2rem;
  }
  .pagination-bottom {
    margin-top: 0.5rem;
  }

  .container-center {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    max-width: 1220px;
    width: 100%;
    margin: 0px auto;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
