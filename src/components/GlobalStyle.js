import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
}

body{
    background: #1b1b1b;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1 rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #91B960;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        background-color: #91B960;
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
    font-size: 2rem;
}

span{
    font-weight: bold;
    color: #91B960;
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
