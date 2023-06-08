import styled from "styled-components";

const StyledCard = styled.div`

    width: 255px;
    border-top: 4px solid;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${props => (props.active 
        ? 'rgba(37, 43, 66, 1)' 
        : 'rgba(241, 243, 250, 1)')};
`;

const StyledName = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;

`;

const StyledSocial = styled.img`

     margin-right: 5px;

`
const StyledNameStyle = styled.p`

    color: rgba(140, 152, 198, 1);

`;

const StyledH2 = styled.h2`

    color: ${props => (props.active 
        ? 'white' 
        : 'rgba(29, 31, 41, 1)')};
    font-size: 56px;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding-top: 15px;
    
`;

const StyledH3 = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 5px;
    color: ${props => (props.active 
        ? 'rgba(140, 152, 198, 1)' 
        : 'rgba(99, 104, 125, 1)')};

`;
const StyledP = styled.p`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    margin-bottom: 30px;
    text-align: center;
    padding-top: 20px;
    
    color: rgba(30, 181, 137, 1);
    
`;

const StyledImg = styled.img`
    padding-bottom: 2px;
    margin-right: 4px;
`;

export {StyledCard, StyledName, StyledNameStyle, StyledH2, StyledH3, StyledP, StyledImg , StyledSocial};
