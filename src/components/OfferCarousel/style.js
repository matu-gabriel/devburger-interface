import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 20px;

  h1 {
    color: rgba(97, 161, 32, 1);
    font-weight: 800;
  }

  .rec.rec-arrow {
    color: rgba(151, 88, 166, 1);
  }

  .rec.rec-arrow:hover {
    border: none;
  }
`;

export const ContainerItems = styled.div`
  margin: 50px 0;
  width: max-content;
  max-width: 274px;
  min-height: 320px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* min-height: 287px; */
  h2 {
    font-size: 18px;
    color: #ff8c05;
    font-weight: 800;
    padding: 0 20px;
    width: 80%;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  color: #656565;
  text-align: center;
`;

export const Image = styled.img`
  padding: 10px 0;
  width: 148px;
  transform: rotate(18deg);
  transition: 0.4s ease-in;

  &:hover {
    transform: scale(1.4);
  }
`;

export const Teste = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 20px;
`;

export const PriceOffer = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #363636;
`;

export const Button = styled.button`
  background-color: #9758a6;
  border-radius: 20px;
  border: none;
  padding: 10px;
  transition: 1s ease;

  &:hover {
    background-color: #583362;
  }
`;
