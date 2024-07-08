import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 21px;
  margin-bottom: 20px;

  h1 {
    padding: 14px;
    font-size: 18px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #000;
    color: #fff;
  }
`;

export const ResumeTop = styled.div`
  color: rgba(130, 130, 130, 1);
  font-size: 18px;
  padding: 20px 30px;
  display: grid;
  grid-gap: 20px 60px;
  grid-template-areas:
    "items price"
    "tax price-tax";

  .items {
    grid-area: items;
  }

  .price {
    grid-area: price;
    text-align: end;
  }

  .tax {
    grid-area: tax;
  }

  .price-tax {
    grid-area: price-tax;
    text-align: end;
  }
`;
export const ResumeBottom = styled.div`
  margin-top: 60px;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
