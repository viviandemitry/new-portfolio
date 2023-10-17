import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    display:flex;
    width: 100%;
    height: 100vh;
    background: #DA8537;
` 

export const ContainerLeft = styled.div`
    width: 60%;
`

export const ContainerRight = styled.div`
    display: flex;
    width: 40%;
    padding-top: 250px;
    padding-left: 100px;
    /* border-left: solid #15655B; */
    background-color:#15655B;
`

export const Title = styled.h2`
    padding-top: 100px;
    padding-left: 150px;

    color: #15655B;
    font-family: Poppins;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; 
`

export const Icons = styled.div`
    padding-top: 30px;
    padding-left: 80px;

    img{
        width: 70px;
        height: 70px;
        padding-left:70px;

        &:hover{
        width: 73px;
        height: 73px;
    }
  }
`

export const Link = styled.a`
    text-decoration: none;
`
export const RightText = styled.p`
    margin-left: 150px;
    margin-top: -110px;
    color: #DA8537;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; 
`