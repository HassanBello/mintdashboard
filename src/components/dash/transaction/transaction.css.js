import styled from "styled-components";

export const TransactionCard = styled.div`
background: white;
display: flex;
flex-flow: row wrap;
padding: 10px;
border: 1px solid #EEF8FD;
box-sizing: border-box;
border-radius: 2px;
justify-content: space-around;
max-width: 250px;
`
export const TransactionGrid = styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;
column-gap: 5px;
`

export const CardColumn = styled.div`
display: flex;
flex-flow: column wrap;

`

export const GraphColumn = styled.div`
display: flex;
flex-flow: column wrap;
width: 35%;
height: 50px;
`

export const CardHeader = styled.div`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: flex-end;
color: #787C90;
`
export const TransactionSub = styled.span`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 24px;
color: #262626;
`