import { StyledContainerButton, StyledButton, StyledH1, StyledH3, StyledHeader, StyledRight, StyledLeft, } from "./styles"


const Header = ({active, setActive})=>{

    return(
        
            <StyledHeader>
                <StyledLeft>
                    <StyledH1 active={active}>Social Media Dashboard</StyledH1>
                    <StyledH3 active={active}>Total Followers: 23,004</StyledH3>
                </StyledLeft>
                <StyledRight>
                    <StyledH3>Dark Mode</StyledH3>
                    <StyledContainerButton active={active}>
                        <StyledButton 
                        onClick={()=>dark(active,setActive)}
                        active={active}
                        ></StyledButton>
                    </StyledContainerButton>
                </StyledRight>
            </StyledHeader>
       
    )
}

const dark = (active, setActive) =>{
    setActive(!active)
}

export default Header;