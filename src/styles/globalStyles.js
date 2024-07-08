import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

const globalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    }

    button, a {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;

export default globalStyles;
