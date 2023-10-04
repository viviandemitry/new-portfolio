import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;

    background: #DA8537;
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
    }
`