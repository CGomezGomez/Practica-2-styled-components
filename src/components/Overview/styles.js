import styled from "styled-components";

const StyledSocial = styled.div`

    width: 255px;
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.active 
        ? 'rgba(37, 43, 66, 1)' 
        : 'rgba(241, 243, 250, 1)')};
    border-radius: 6px;
    cursor: pointer;
  
`;

const StyledRow = styled.div`

    width: 80%;
    margin: auto;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const StyledH2 = styled.h2`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${props => (props.active 
        ? 'rgba(140, 152, 198, 1)' 
        : 'rgba(140, 152, 198, 1)')};

`;

const StyledH3 = styled.h3`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: ${props => (props.active 
        ? 'white' 
        : 'rgba(29, 31, 41, 1)')};
       
`;

const StyledP = styled.p`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: rgba(30, 181, 137, 1);
    
`;

export {StyledSocial, StyledRow, StyledH2, StyledH3, StyledP};