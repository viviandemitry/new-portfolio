import styled, { keyframes } from 'styled-components'
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import Photo from '../../assets/images/polaroid-home.png';


const transition = keyframes`
    0% {  width: 50%; height: 100%; background-size: 100%; background-position: left 100% top 0; }
    100% {  width: 52%; height: 100%; background-size: 135%; background-position: left 100% top 0; }
`

const transitionAbout = keyframes`
    0% {   transform: rotate(5deg);}
    100% {  transform: rotate(0deg);}
`

export const Container = styled.div`
    width: 55%;
    height: 100%;
    overflow: hidden;
    
    background-repeat: no-repeat;
    background-color: #F2E0CF; 
    animation-name: ${transition};
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @media ${device.mobileM}{
            width: 100%;
            height: 100%;
            animation: none;
            overflow: scroll;

            img{
            width: 0;
            height: 0;
            animation-name: none;
            }
        }
`

export const TextABout = styled.div`
    display: table-row;
    width: 55%;
    height:100%;
    margin-left: ${px2vw(800)};
    

    @media ${device.mobileM}{
        width: 80%;
        overflow: scroll;
    }
`

export const TitleAbout = styled.h2`
    color: #DA8537;
    margin-top: ${px2vw(30)}; 
    margin-left: ${px2vw(50)}; 
    font-family: Playfair Display;
    font-size: ${px2vw(60)};
    font-style: normal;
    font-weight: 700;
    line-height: 120%; 

    @media ${device.mobileM}{
        margin-top: ${px2vw(90)};
        margin-left: ${px2vw(650)};
        font-size: ${px2vw(100)};
    }
`

export const AboutText = styled.div`
    display: flex;
    width: ${px2vw(650)};
    flex-direction: column;
    margin-top: ${px2vw(50)};
    color:  rgba(21, 101, 91, 0.95);
    font-family: Poppins;
    font-size: ${px2vw(14)};
    font-style: normal;
    font-weight: 300;
    
    img{
        width: ${px2vw(150)};
        height: ${px2vw(180)};
    }

    @media ${device.mobileM}{
        width: 80vw;
        margin-top: ${px2vw(130)};
        margin-left: ${px2vw(100)};
        line-height: ${px2vw(50)};
    }
    
`
export const ContentTextsLeft = styled.div`
    display: flex;
    margin-left: ${px2vw(50)};
    margin-top:  ${px2vw(-15)};

    animation-name: ${transitionAbout};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    img{
        width: ${px2vw(150)};
        height: ${px2vw(180)};
        transform: rotate(-10deg);  
        margin-top:  ${px2vw(15)};
    }

    @media ${device.mobileM}{
        width: 100%;
        margin-left: ${px2vw(50)};
        margin-top:  ${px2vw(60)};
        font-size:${px2vw(40)};

        img{
            width: ${px2vw(480)};
            height: ${px2vw(520)};
            transform: rotate(-10deg);  
            padding-left: ${px2vw(60)};
        }   
    }
    
`

export const ContentTexts = styled.div`
    display: flex;

    animation-name: ${transitionAbout};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    
    img {
        width: ${px2vw(150)};
        height: ${px2vw(180)};
        transform: rotate(10deg);
        margin-left: ${px2vw(30)};
    }

    @media ${device.mobileM}{
        width: 100%;
        margin-left: ${px2vw(180)};
        margin-top:  ${px2vw(60)};
        font-size:${px2vw(40)};

        img {
            width: ${px2vw(480)};
            height: ${px2vw(520)};
            transform: rotate(10deg);  
            margin-left: ${px2vw(-30)};
            padding-left: ${px2vw(60)};
        }
  
    }
`
export const FirstTextLine = styled.p`
    margin-left: ${px2vw(30)};
    margin-bottom: ${px2vw(30)};

    @media ${device.mobileM}{
        width: ${px2vw(700)};
        color: rgba(21, 101, 91, 0.95);
        margin-left: ${px2vw(50)};
    }
`
export const SecondTextLine = styled.p`
    margin-left: ${px2vw(30)};
    margin-top: ${px2vw(30)};

    @media ${device.mobileM}{
        width: ${px2vw(700)};
        color: rgba(21, 101, 91, 0.95);
        margin-left: ${px2vw(-160)};
    }

`
export const ThirdTextLine = styled.p`
    margin-left: ${px2vw(30)};
    margin-top: ${px2vw(30)};

    @media ${device.mobileM}{
        width: ${px2vw(700)};
        color: rgba(21, 101, 91, 0.95);
        margin-left: ${px2vw(50)};
    }

`
