import styled from "styled-components";
import { Button } from "../../../components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background-color: rgba(54, 54, 54, 1);
    border-radius: 10px;
    padding: 20px;
    width: 500px;
  }
`;

export const Label = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 7px;
  font-weight: 700;
`;

export const Input = styled.input`
  height: 52px;
  width: 100%;
  border: none;
  border-radius: 5px;
  /* margin-bottom: 20px; */
  font-size: 18px;
  padding: 0 10px;
  outline: none;
`;

export const ButtonStyle = styled(Button)`
  margin-top: 90px;
`;

export const LabelImage = styled.label`
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  /* margin: 20px 0; */
  color: #fff;

  input {
    opacity: 0;
    width: 1px;
  }
`;
