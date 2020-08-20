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