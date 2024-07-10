import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  width: 90%;
  padding: 50px;
  background-color: rgba(240, 240, 240, 1);
`;

export const ProductImage = styled.img`
  width: 80px;
  border: none;
`;

export const MenuStatus = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
`;

export const SelectStatus = styled(Select)`
  width: 250px;

  .css-13cymwt-control,
  .css-t3ipsp-control {
    cursor: pointer;
  }
`;

export const LinkStatus = styled.a`
  font-size: 20px;
  padding: 10px;
  font-weight: ${(props) => props.isActive && "700"};
  border: ${(props) => props.isActive && "1px solid rgba(255, 140, 5, 1)"};
  border-radius: ${(props) => props.isActive && "30px"};
`;
