import styled, { keyframes } from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import Photo from '../../assets/images/photo_home_page.png'

const transitionImg = keyframes`
    0% {   transform: rotate(5deg);}
    100% {  transform: rotate(0deg);}
`

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;

    background: rgba(21, 101, 91, 0.95);

    @media ${device.mobileM}{
        display: table-row;     
        width: 100vw;
    }
`

export const TextContainer = styled.div`
    width:50%;

    @media ${device.mobileM}{     
        width: 100vw;
    }
` 

export const Title = styled.h2`
    position: absolute;
    width: ${px2vw(700)};
    height: ${px2vw(100)};
    flex-shrink: 0;
    margin-top: ${px2vw(179)};
    margin-left: ${px2vw(150)};

    color: #F2E0CF;
    font-family: Playfair Display;
    font-size: ${px2vw(70)};
    font-style: normal;
    font-weight: 700;
    line-height: 120%;

    @media ${device.mobileM}{
        margin-top: ${px2vw(-350)};
        font-size: ${px2vw(90)};
        width: 80vw;
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
    line-height: 180%; 

    @media ${device.mobileM}{
        margin-top: ${px2vw(700)};
        margin-bottom: ${px2vw(100)};
        font-size: ${px2vw(40)};
        width: 80vw;
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
        width:55%;
        height: auto;
        transform: rotate(10deg);
        padding: 140px;

        &:hover {
            transform: rotate(9deg);  
        }

        @media ${device.mobileM}{
            width: ${px2vw(800)};
            height: ${px2vw(900)};
            padding: 0;
        }
    }

    @media ${device.mobileM}{
        width: 60%;
        margin-top: ${px2vw(300)};
        margin-left: ${px2vw(380)};
        padding: 20px;
        height: 56vh;
    }
`

export const TextHiden = styled.span`
    color: #DA8537; 
`
