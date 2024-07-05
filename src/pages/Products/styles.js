import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-color: #0f0f0f;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

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
  color: ${(props) => (props.isActive ? "#5f5f" : "#fff")};
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 5px;
`;

export const CategoryProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
`;
