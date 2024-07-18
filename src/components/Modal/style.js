import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border: 1px solid #000;
  border-radius: 10px; */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background-color: rgba(54, 54, 54, 1);
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

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
  }
`;
