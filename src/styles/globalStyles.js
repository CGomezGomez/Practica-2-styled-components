import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    
	font-family: sans-serif;
	background-color: ${props => (props.active 
        ? 'rgba(29, 31, 41, 1)' 
        : 'white')};
}

.section {
    
    width: 1110px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

}

.blue {
    color: rgba(29, 161, 242, 1);
}

.rose {
    color: rgba(223, 72, 150, 1);
}

.red {
    color: rgba(196, 3, 43, 1);
}

.texto {

    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: ${props =>(props.active 
        ? 'white' 
        : 'rgba(99, 104, 125, 1)')};
    margin-top: 3rem;

}
`
;


export {GlobalStyles};