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
        return `#EBC315;;`;
      case "Reconciled":
        return `#27AE60;`;
      default:
        return "#27AE60";
    }
  }};
`
export const TableInitialWarapper = styled.div`

`