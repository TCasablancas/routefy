import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700;900&display=swap');
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
        font: 14px 'Nunito', sans-serif;
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
