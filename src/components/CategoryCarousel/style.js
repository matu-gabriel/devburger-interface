import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
`;

export const ContainerItems = styled.div``;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;
