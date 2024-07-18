import { ContainerButton } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}
