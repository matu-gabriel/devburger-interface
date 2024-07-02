import styled from "styled-components";

export const Container = styled.div``;

export const HomeImg = styled.img`
  width: 100%;
  background: #0f0f0f;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;
`;

export const CategoryButton = styled.button`
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActive && "2px solid #5f5f"};
  color: ${(props) => (props.isActive ? "#5f5f" : "#313131")};
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 5px;
`;
