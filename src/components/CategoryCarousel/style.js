import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-color: #e6e6e6;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 20px;

  .rec.rec-arrow {
    color: rgba(151, 88, 166, 1);
  }

  .rec.rec-arrow:hover {
    border: none;
  }
`;

export const ContainerItems = styled.div`
  width: 100%;

  h2 {
    font-size: 22px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    text-align: left;
    padding: 0 20px;
    width: 80%;
    position: relative;
    bottom: 90px;
  }

  p {
    text-align: left;
    width: 188px;
    font-size: 14px;
    color: #fff;
    position: relative;
    bottom: 90px;
    left: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 232px;
  border-radius: 10px;
`;
