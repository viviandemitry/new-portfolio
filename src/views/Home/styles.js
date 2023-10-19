import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import Photo from '../../assets/images/photo_home_page.png'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    background: rgba(21, 101, 91, 0.95);

    @media ${device.mobileM}{
        display: table-row;     
    }
`

export const TextContainer = styled.div`
    width:50%;
` 

export const Title = styled.h2`
    position: absolute;
    width: ${px2vw(700)};
    height: ${px2vw(100)};
    flex-shrink: 0;
    margin-top: ${px2vw(179)};
    margin-left: ${px2vw(150)};
    margin-bottom: ${px2vw(10)};

    color: #F2E0CF;
    font-family: Playfair Display;
    font-size: ${px2vw(70)};
    font-style: normal;
    font-weight: 700;
    line-height: 120%;

    @media ${device.mobileM}{
        margin-top: ${px2vw(-270)};
        font-size: ${px2vw(90)};
        width: ${px2vw(800)};
    }
` 

export const Text = styled.p`
    margin-top: ${px2vw(380)};
    margin-left: ${px2vw(150)};
    width: ${px2vw(450)};

    color: #F2E0CF;
    font-family: Poppins;
    font-size: ${px2vw(20)};
    font-style: normal;
    font-weight: 300;
    line-height: 180%; /* 36px */

    @media ${device.mobileM}{
        margin-top: ${px2vw(780)};
        font-size: ${px2vw(40)};
        width: ${px2vw(1100)};
    }
`

export const TextColor = styled.span`
    color: #DA8537; 
    padding: ${px2vw(15)};
    font-size: ${px2vw(85)};
` 

export const ImgContainer = styled.div`
    width: 50%;
    height: 100vh;
    overflow: hidden;

    img {
        width:100%;
        height: auto;

        @media ${device.mobileM}{
            border-radius: 0 50% 0 50%;
        }
    }

    @media ${device.mobileM}{
        margin-top: ${px2vw(280)};
        margin-left: ${px2vw(480)};
    }
`

export const TextHiden = styled.span`
    color: #DA8537; 
`

export const TextABout = styled.div`
    position: absolute;
    display: table-row;
    width: 55%;
    height:90%;
    margin-left: ${px2vw(800)};
`

export const TitleAbout = styled.h2`
    position: relative;
    color: #DA8537;
    margin-top: ${px2vw(10)}; 
    font-family: Playfair Display;
    font-size: ${px2vw(60)};
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 72px */

    &:hover{
        font-size: ${px2vw(60.5)};
    }
`

export const AboutText = styled.p`
    margin-top: ${px2vw(80)};
    color: #F2E0CF;
    font-family: Poppins;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 200;
    line-height: 180%; /* 36px */ 
    
`
export const FirstTextLine = styled.div`
    margin-bottom: ${px2vw(20)};
    margin-left: ${px2vw(-70)};
    width: 75%;

    img{
        width: ${px2vw(10)};
        height: ${px2vw(10)};
    }

    &:hover{
        font-size: ${px2vw(16.3)};
    }
`
export const SecondTextLine = styled.div`
    margin-bottom: ${px2vw(20)};
    margin-left: ${px2vw(-5)};
    width: 65%;

    img{
        width: ${px2vw(10)};
        height: ${px2vw(10)};
    }

    &:hover{
        font-size: ${px2vw(16.3)};
    }
`
export const ThirdTextLine = styled.div`
    margin-left: ${px2vw(60)};
    width: 55%;

    img{
        width: ${px2vw(10)};
        height: ${px2vw(10)};
    }

    &:hover{
        font-size: ${px2vw(16.3)};
    }
`