import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;

    background: #15655B;
` 

export const Icons = styled.div`
    width: 100%;
    height: auto;
    flex-shrink: 0;
    padding-top: 80px;
    /* padding-left: 150px; */
    column-gap: 20px;

    background: #DA8537;

    img{
        width: 70px;
        height: 70px;
        padding-left: 130px;

        &:hover{
        width: 65px;
        height: 65px;
     }
        
    }
` 

export const ContainerBottom = styled.div`
    display:flex;
    margin-top: 30px;
`

export const Title = styled.h2`
    width: 401px;
    height: 142px;
    transform: rotate(-90deg);
    flex-shrink: 0;
    margin-left: -90px;
    margin-top: 72px;

    color: #F2E0CF;
    font-family: Playfair Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 180%;
`
export const Link = styled.a`
    text-decoration: none;
`


export const Projects = styled.div`

`

export const ProjectImg = styled.div`
    width: 298px;
    height: 265.163px;
    flex-shrink: 0;
    margin-top: 80px;
    margin-left: 20px;

    background: #DA8537;

    img {
        width: 288px;
        height: 255.163px;
    }

    &:hover{
        width: 305px;
        height: 270px;
    }
`

export const ProjectTitle = styled.h4`
    margin-left:20px;
    color: #F2E0CF;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; /* 24px */

    &:hover{
        color: #DA8537;
        font-size: 22px;
    }

`