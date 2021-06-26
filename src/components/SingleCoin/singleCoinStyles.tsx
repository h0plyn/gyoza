import styled from 'styled-components';

export const SingleCoinStyles = styled.div`
  display: flex;
  max-width: 50vw;
  width: 100%;

  h1 {
    color: var(--headline);
    margin: 0;
  }

  .single-coin-logo {
    width: 7rem;
    height: 7rem;
    margin: 0;
  }
`;

export const SingleCoinGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr) 3fr;
  grid-template-rows: 3fr;
  grid-template-areas:
    'logo logo price'
    'graph graph graph'
    'mktcap mktcap desc'
    'priceChange ath desc';
  grid-gap: 1.5rem;

  & .title {
    margin: 0;
  }

  & .datapoint {
    color: var(--headline);
    font-size: 2rem;
    margin: 0;
  }
`;

export const Logo = styled.div`
  background: var(--card-bg);
  grid-area: logo;
  height: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 0 40px rgb(192 219 255 / 18%), 0 0 22px var(--highlight);
  & .title {
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
  }
`;

export const Price = styled.div`
  grid-area: price;
  background: var(--card-bg);
  height: 15rem;
  transition: ease-in-out 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  &:hover {
    transform: scaleY(1.04);
    box-shadow: 0 0 40px rgb(192 219 255 / 18%), 0 0 22px var(--highlight);
  }
`;

export const DataBox = styled.div`
  background: var(--card-bg);
  height: 15rem;
  transition: ease-in-out 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scaleY(1.04);
    box-shadow: 0 0 40px rgb(192 219 255 / 18%), 0 0 22px var(--highlight);
  }
  &.logo {
    flex-direction: row;
    width: 100%;
    grid-area: logo;
    border-radius: 4px;
    box-shadow: 0 0 40px rgb(192 219 255 / 18%), 0 0 22px var(--highlight);
    & .title {
      display: flex;
      flex-direction: column;
      margin-left: 3rem;
    }
  }
  &.mktcap {
    grid-area: mktcap;
  }
  &.price {
    grid-area: price;
  }
  &.graph {
    grid-area: graph;
  }
  &.priceChange {
    grid-area: priceChange;
  }
  &.ath {
    grid-area: ath;
  }
  &.desc {
    grid-area: desc;
    padding: 2rem;
    color: var(--card-para);
    height: 100%;
  }
`;
