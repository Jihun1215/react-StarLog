import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Maple';
        src: url(public/Maplestory-Light.woff2)  format('woff2');
        font-weight: normal;
    font-style: normal;
 }
`;

export default GlobalStyle;