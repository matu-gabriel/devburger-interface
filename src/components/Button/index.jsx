import { ContainerButton } from "./styles";

import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}

Button.prototype = {
  children: PropTypes.string,
};
