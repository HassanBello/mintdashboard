import styled from "styled-components";
import media from './media';

export const Column6LG = styled.div`
display: flex;
flex-flow: column wrap;
width: 50%;
${media.tablet`width: 100%;`};
`
export const Column6SM = styled.div`
display: flex;
flex-flow: column wrap;
width: 50%;
padding-right: 15px;
padding-left: 15px;
`
export const Column4 = styled.div`
display: flex;
flex-flow: column wrap;
width: 33.333%;
padding-right: 15px;
padding-left: 15px;
`
export const Column3 = styled.div`
display: flex;
flex-flow: column wrap;
width: 25%;
padding-right: 15px;
padding-left: 15px;
`
export const Column2 = styled.div`
display: flex;
flex-flow: column wrap;
width: 16.6667%;
padding-right: 15px;
padding-left: 15px;
`
export const Column7 = styled.div`
display: flex;
flex-flow: column wrap;
width: 58.3333%;
padding-right: 15px;
padding-left: 15px;
`
export const Column8 = styled.div`
display: flex;
flex-flow: column wrap;
width: 66.6666%;
padding-right: 15px;
padding-left: 15px;
`
export const Column9 = styled.div`
display: flex;
flex-flow: column wrap;
width: 75%;
padding-right: 15px;
padding-left: 15px;
`
export const Column10 = styled.div`
display: flex;
flex-flow: column wrap;
width: 83.3333%;
padding-right: 15px;
padding-left: 15px;
`
export const Column12 = styled.div`
display: flex;
flex-flow: column wrap;
width: 100%;
`