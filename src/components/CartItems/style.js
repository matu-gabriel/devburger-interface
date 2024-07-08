import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  background-color: #fff;
  border-radius: 21px;
  width: max-content;
`;
export const HeaderItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 14px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #000;
  text-align: center;
  align-items: center;

  p {
    font-size: 18px;
    color: rgba(255, 255, 225, 1);
  }
`;
export const BodyItems = styled.div`
  text-align: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 14px;
  grid-gap: 8px 25px;

  .quantity-container {
    justify-content: center;
    display: flex;
    gap: 15px;

    button {
      margin-top: 15px;
      width: 32px;
      height: 32px;
      background-color: rgba(151, 88, 166, 1);
      border: none;
      border-radius: 5px;
      color: #fff;
    }
  }

  p {
    margin-top: 15px;
    font-size: 18px;
    color: rgba(72, 72, 72, 1);
  }

  img {
    background-color: #f1f1f1;
    border-radius: 10px;
    width: 120px;
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 20px;
`;
