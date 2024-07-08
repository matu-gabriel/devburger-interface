import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  background-color: rgba(31, 31, 31, 1);
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    color: #fff;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 50px;

  div {
    height: 23px;
    border: 1px solid rgba(98, 94, 94, 1);
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) =>
    props.isActive ? "rgba(151, 88, 166, 1)" : "rgba(255, 255, 255, 1)"};
  font-size: 18px;
  font-weight: ${(props) => props.isActive && "700"};
  text-decoration: none;
`;

export const ContainerRight = styled.div`
  display: flex;
  gap: 50px;

  .user {
    display: flex;
    gap: 15px;
    align-items: center;

    a {
      text-decoration: none;
    }
  }

  .order {
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;
