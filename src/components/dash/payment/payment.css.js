import styled from "styled-components";

export const TableWrapper = styled.div`
overflow-x:auto;
`
export const TableHead = styled.thead`
background: #EAEEF0;
border: none;
`

export const StyledTable = styled.table`
border: none;
width: 100%;
`

export const TableRow = styled.tr`
border-bottom: 1px solid #CCCFD4;
`

export const TableData = styled.td`
padding: 20px 5px 20px 5px;
background: #FFFFFF;
color: ${props => {
        switch (props.color) {
            case "light":
                return `#7F8FA4;`;
            case "dark":
                return `#414042;`;
            default:
                return "#414042";
        }
    }};
`

export const TableHeader = styled.th`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
color: #7F8FA4;
padding: 10px 10px 10px 10px;
text-align: left;
`
export const StatusWrapper = styled.div`
padding: 7.5px 3.5px 7.5px 3.5px;
text-align: center;
display: flex;
flewx-flow: row wrap;
border: 1px solid #CCCFD4;
box-sizing: border-box;
border-radius: 30px;
justify-content: center;
max-width: 130px;
color: ${props => {
        switch (props.color) {
            case "Pending":
                return `#EBC315`;
            case "Reconciled":
                return `#27AE60`;
            default:
                return "#27AE60";
        }
    }};
`
export const TableInitialWarapper = styled.div`
background: #7F8FA4;
width: 36px;
padding: 7.5px 3.5px 7.5px 3.5px;
color: #FFF;
border-radius: 50%;
font-size: 12px;
text-align: center;
margin-right: 15px;
`
export const PaymentHeader = styled.h1`
font-family: Segoe UI;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 48px;
color: #262626;
`
export const PaymentSub = styled.p`
font-size: 13px;
line-height: 17px;
display: flex;
align-items: center;
color: #262626;
`
export const PageSize = styled.span`
color: #1875F0;
margin-right: 5px;
margin-left: 5px;
display: flex;
cursor: pointer;
`
export const StyledInput = styled.input`
border-bottom: 0.5px solid #787878;
font-size: 11px;
line-height: 15px;
color: #787878;
background: inherit;
width: 336.5px;
padding: 7.5px 3.5px 7.5px 3.5px;
&:before {
    content: "kjkj";
    position: absolute;
    margin-right: 10px;
    left: 0;
    color: #2b2e4a;
    font-size: 19px;
 }
 ::placeholder,
 ::-webkit-input-placeholder {
   color: black;
 }
 :-ms-input-placeholder {
   color: black;
 }
`
export const PaginationItem = styled.div`
padding: 10px 5px 10px 5px;
border-right: 1px solid #CED0DA;
box-sizing: border-box;
text-align: center;
border-radius: 2px;
height: 100%;
font-size: 13px;
line-height: 17px;
margin-top: auto;
margin-bottom: auto;
cursor: pointer;
min-width: 31px;
color:  ${props => {
    switch (props.status) {
        case "Active":
            return `#FFF`;
        default:
            return "#000";
    }
}};
background: ${props => {
    switch (props.status) {
        case "Active":
            return `#1875F0`;
        default:
            return "inherit";
    }
}};
&:nth-child(4) {
    border-right: none;
  }
`
export const PaginationWarpper = styled.div`
padding: 0px 3.5px 0px 3.5px;
border: 1px solid #CED0DA;
box-sizing: border-box;
border-radius: 2px;
display: flex;
flex-flow: row wrap;
min-height: 30px;
`