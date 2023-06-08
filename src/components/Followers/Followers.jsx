import { StyledCard, StyledH2, StyledH3, StyledImg, StyledP, StyledName, StyledNameStyle , StyledSocial } from "./styles";

const Followers = ({active, color, src, alt, hastag, number, text, today, img, letter})=>{
    
    return(

        <StyledCard className={color} active={active}>

             <StyledName>

                <StyledSocial src={src} alt={alt} />

                <StyledNameStyle active={active}>{hastag}</StyledNameStyle>

            </StyledName>

            <StyledH2 active={active}>{number}</StyledH2>

            <StyledH3 active={active}>{text}</StyledH3>

            <StyledP className={letter}><StyledImg src={img}/>{today}</StyledP>
            
        </StyledCard>
    )
}

export default Followers;