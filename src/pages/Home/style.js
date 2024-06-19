import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
`;

export const HomeImg = styled.img`
  width: 100%;
`;

// export const Tittle = styled.h1`
//   color: #fff;
//   position: absolute;
//   bottom: 200px;
//   z-index: 10;
// `;

export const ContainerHome = styled.div`
  background: url("${Background}");
  background-size: cover;
`;
