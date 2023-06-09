
import { StyledSocial, StyledRow, StyledH2, StyledH3, StyledP } from "./styles";

const Overview = ({active, src, arrow, alt, texto, number, percentage, color})=>{
    return(
        <StyledSocial active={active}>
            <StyledRow>
                <StyledH2>{texto}</StyledH2>
                <img src={src} alt={alt} />
            </StyledRow>
            <StyledRow>
                <StyledH3 active={active}>{number}</StyledH3>
                <StyledP className={color}> <img src={arrow} alt={alt} />{percentage}</StyledP>
            </StyledRow>
        </StyledSocial>
    )
    
}
export default Overview;