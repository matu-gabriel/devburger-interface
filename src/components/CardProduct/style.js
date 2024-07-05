import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  min-height: 150px;
  border-radius: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  max-width: 130px;
  width: 100%;
  height: 90px;
  position: relative;
  bottom: 60px;
`;

export const ProductName = styled.p`
  min-height: 3em;
  font-size: 23px;
  color: rgba(255, 140, 5, 1);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4px;
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  color: rgba(101, 101, 101, 1);
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  color: rgba(54, 54, 54, 1);
  margin: 10px 0;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 700;
  border: none;
  width: 100%;
  border-radius: 30px;
  padding: 14px 20px;
  background-color: rgba(151, 88, 166, 0.7);
  transition: 0.3s ease;
  /* margin: 5px 0; */

  &:hover {
    background-color: rgba(151, 88, 166, 1);
  }
`;
