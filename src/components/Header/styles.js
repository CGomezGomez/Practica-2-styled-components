import styled from "styled-components";

const StyledContainer = styled.div`

    width: 1110px;
    padding-bottom: 4rem;
    margin: auto;
   
`;

const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
   
`;

const StyledLeft = styled.div`
   
    align-items: center;

`;

const StyledRight = styled.div`

    display: flex;
    align-items: center;

`;

const StyledButton = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    border: 0;
    padding: 1rem 1.8rem;
    background-color: ${props => props.active 
        ? 'rgba(56, 143, 231, 1)' 
        : 'rgba(174, 179, 203, 1)'};
        
`;

const StyledLittle = styled.button`
    width: 25px;
    aspect-ratio: 1;
    background-color: ${props => (props.active 
        ? 'rgba(37, 43, 66, 1)' 
        : 'rgba(241, 243, 250, 1)')};
    border-radius: 100%;
    border: 0;
    transition: .5s linear;
    position: absolute;
    left: ${props =>(props.active 
        ? '3px' 
        : '30px')};
    cursor: pointer;
`;

const StyledH1 = styled.h1`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: ${props =>(props.active 
        ? 'white' 
        : 'rgba(99, 104, 125, 1)')};
    margin-bottom: .2rem;
  
`;

const StyledH3 = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: rgba(140, 152, 198, 1);
    margin-right: 0.6rem;

`;


export {StyledContainer, StyledH1, StyledH3, StyledHeader, StyledButton, StyledRight ,StyledLittle , StyledLeft};