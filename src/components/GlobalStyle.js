import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body{
    background: #1b1b1b;
}

button{
    font-weight: bold;
    font-size: 1.1 rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #0A7AA4;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #0A7AA4;
        color: white;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
}

span{
    font-weight: bold;
    color: #0A7AA4;
}

a{
    font-size: 1.1rem;
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.5rem;
    line-height: 150%;
}
`;
export default GlobalStyle;