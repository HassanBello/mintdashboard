import styled from "styled-components";

export const OrderGrid = styled.div`
display: grid;
grid-template-columns: 65% 35%;
column-gap: 2px;
`
export const OrderColumns = styled.div`
display: flex;
flex-flow: column wrap;
`

export const GraphWrapper = styled.div`
background: #FFFFFF;
border: 1px solid #EEF8FD;
box-sizing: border-box;
border-radius: 2px;
padding: 10px;
display: flex;
flex-flow: column wrap;
`
export const GraphContainer = styled.div`
height: 250px;
`

export const StyledTime = styled.div`
font-family: Segoe UI;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 24px;
color: #4F4F4F;
padding: 20px 10px 40px 10px;
`

export const SideCardHeader = styled.span`
font-family: Segoe UI;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
color: #262626;
margin-bottom: 10px;
`

export const SideCard = styled.div`
background: #FFFFFF;
border: 1px solid #EEF8FD;
box-sizing: border-box;
border-radius: 2px;
padding: 20px;
margin-bottom: 5px;
`
export const GreenLine = styled.div`
content: '';
width: ${props => props.width}%;
border-bottom: 5px solid #27AE60;
`
export const YellowLine = styled.div`
content: '';
width: ${props => props.width}%;
border-bottom: 5px solid #FDC203;
`