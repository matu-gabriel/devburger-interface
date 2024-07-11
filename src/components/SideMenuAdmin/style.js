import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: rgba(54, 54, 54, 1);
  width: 300px;

  img {
    margin: 43px;
  }
`;

export const ContainerLinks = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? "rgba(151, 88, 166, 1)" : "none"};
  padding-left: 20px;
  margin-bottom: 30px;

  .icon {
    color: #fff;
  }
`;

export const LinkSide = styled(Link)`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;
