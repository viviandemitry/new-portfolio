import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: #15655B;

    @media ${device.mobileM}{
        overflow: scroll;
        background: #DA8537;
     }
` 

export const Icons = styled.div`
    width: 100%;
    padding-top: ${px2vw(100)};
    column-gap: ${px2vw(20)};

    background: #DA8537;

    img{
        width: ${px2vw(70)};
        height: ${px2vw(70)};
        padding-left: ${px2vw(130)};

        &:hover{
        width: ${px2vw(65)};
        height: ${px2vw(65)};
     }

     @media ${device.mobileM}{
        width: ${px2vw(80)};
        height: ${px2vw(80)};
     }
    }

    @media ${device.mobileM}{
        position: static;
        height: ${px2vw(50)};
        padding-top: ${px2vw(100)};
    }
` 

export const ContainerBottom = styled.div`
        display: flex;

    @media ${device.mobileM}{
        position: static;
        margin-top: ${px2vw(200)};
        background: #15655B;
     }
`

export const ContainerProjects = styled.div`
        display: flex;
        flex-direction: row;
        
        @media ${device.mobileM}{
        flex-direction: column;
        margin-left: ${px2vw(250)};
     }
`

export const Title = styled.h2`
    height: ${px2vw(401)};
    width: ${px2vw(142)};
    transform: rotate(-90deg);
    flex-shrink: 0;
    margin-left: ${px2vw(240)};
    margin-top: ${px2vw(80)};

    color: #F2E0CF;
    font-family: Playfair Display;
    font-size: ${px2vw(50)};
    font-style: normal;
    font-weight: 700;
    line-height: 180%;

    @media ${device.mobileM}{
        margin-top: ${px2vw(600)};
        font-size: ${px2vw(150)};
     }
`
export const Link = styled.a`
    text-decoration: none;
`

export const ProjectImg = styled.div`
    width: ${px2vw(310)};
    height: ${px2vw(310)};
    flex-shrink: 0;
    margin-top: ${px2vw(80)};
    margin-left: ${px2vw(20)};

    background: #DA8537;

    img {
        width: ${px2vw(300)};
        height: ${px2vw(300)};

        @media ${device.mobileM}{
        width: ${px2vw(590)};
        height: ${px2vw(590)};
     }
    }

    @media ${device.mobileM}{
        width: ${px2vw(610)};
        height: ${px2vw(610)};
     }
`

export const ProjectTitle = styled.h4`
    margin-left: ${px2vw(20)};
    color: #F2E0CF;
    font-family: Poppins;
    font-size: ${px2vw(20)};
    font-style: normal;
    font-weight: 300;
    line-height: 120%; /* 24px */

    &:hover{
        color: #DA8537;
        font-size: ${px2vw(21)};
    }

    @media ${device.mobileM}{
        font-size: ${px2vw(60)};
     }

`