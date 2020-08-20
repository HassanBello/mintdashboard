import styled from "styled-components";

export const HeaderWrapper = styled.nav`
max-height: 89px;
padding-top: 5px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
`
export const LogoWrapper = styled.img`
background: #FFFFFF;
`
export const ProfilePicWrapper = styled.img`
background: #FFFFFF;
max-width: 40px;
max-height: 53px;
border-radius: 50%;
`

export const Row = styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
`
export const HeaderContainer = styled.div`
max-width: 1280px;
margin-left: auto;
margin-right: auto;
padding-top: 15px;
`
export const StyledLink = styled.a`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #647787;
cursor: pointer;
`

export const NavRow = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
min-width: 350px;
align-items: center;
`

export const StyledInput = styled.input`

font-size: 11px;
line-height: 15px;
color: #787878;
background: inherit;
width: 336.5px;
padding: 7.5px 3.5px 7.5px 3.5px;
 ::placeholder,
 ::-webkit-input-placeholder {
   color: black;
 }
 :-ms-input-placeholder {
   color: black;
 }
`

export const profileColumn = styled.div`
display: flex;
flex-flow: column wrap;
`
export const ProfileSubTxt = styled.p`
font-size: 10px;
line-height: 13px;
text-align: right;
color: #647787;
`
export const ProfileName = styled.p`
line-height: 19px;
text-align: right;
color: #647787;
`