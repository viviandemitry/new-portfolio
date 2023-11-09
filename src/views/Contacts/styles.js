import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    background: #DA8537;

    @media ${device.mobileM}{
        display:table-row;
        width: 100vw;
        height: 100vh;
    }
` 

export const ContainerLeft = styled.div`
    width: 60%;

    @media ${device.mobileM}{
        display:table-row;
        width: 100vw;
        height: 35vh;
    }
`

export const ContainerRight = styled.div`
    display: flex;
    width: 40%;
    padding-top: ${px2vw(250)};
    padding-left: ${px2vw(100)};
    background-color:#15655B;

    @media ${device.mobileM}{
        width: 100vw;
        height:65vh;
    }
`

export const Title = styled.h2`
    padding-top: ${px2vw(100)};
    padding-left: ${px2vw(150)};

    color: #15655B;
    font-family: Poppins;
    font-size: ${px2vw(80)};
    font-style: normal;
    font-weight: 700;
    line-height: 120%; 

    @media ${device.mobileM}{
        margin-top: ${px2vw(300)};
        font-size: ${px2vw(100)};
    }
`

export const Icons = styled.div`
    padding-top: ${px2vw(30)};
    padding-left: ${px2vw(80)};

    img{
        width: ${px2vw(70)};
        height: ${px2vw(70)};
        padding-left:${px2vw(70)};

        &:hover{
        width: ${px2vw(73)};
        height: ${px2vw(73)};
     }
    }

    @media ${device.mobileM}{
        margin-left: ${px2vw(-50)};
        padding-right: ${px2vw(20)};

        img{
        width: ${px2vw(150)};
        height: ${px2vw(150)};
        padding-left:${px2vw(150)};
      }
    }
`

export const Link = styled.a`
    text-decoration: none;
`
export const RightText = styled.p`
    margin-left: ${px2vw(150)};
    margin-top: ${px2vw(-110)};
    color: #DA8537;
    font-family: Poppins;
    font-size: ${px2vw(50)};
    font-style: normal;
    font-weight: 700;
    line-height: 120%; 

    @media ${device.mobileM}{
        margin-top: ${px2vw(-300)};
        margin-left: ${px2vw(450)};
        font-size: ${px2vw(90)};
    }
`