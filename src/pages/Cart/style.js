import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-color: #0f0f0f;
  background-size: cover;
  min-height: 100vh;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  color: rgba(97, 161, 32, 1);
  font-size: 32px;
  font-weight: 800;
  padding: 25px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-evenly;
  gap: 50px;
  width: 100%;
`;
