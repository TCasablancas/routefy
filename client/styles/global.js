import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font: 14px 'Fira Sans', sans-serif;
        background: #f5f5f5;
        color: #807380;
        -webkit-font-smoothing: antialiased !important;
    }
    ul {
        list-style: none;
    }
    #map {

    }
`;
