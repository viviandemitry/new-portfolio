import styled, { keyframes } from 'styled-components'
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import Photo from '../../assets/images/photo_home_page.png'


const transitionImg = keyframes`
    0% {  width: 50%; background-size: 100%; background-position: left 100% top 0; }
    100% {  width: 68%; background-size: 135%; background-position: left 100% top 0; opacity: 30%;}
`

export const Container = styled.div`
    width: 50%;
    height: 100vh;
    overflow: hidden;

    background-image: url(${Photo});
    background-repeat: no-repeat;
    background-size: 100%;
    animation-name: ${transitionImg};
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    
    transition: all .7s ease-in-out;
`

// export const TitleAbout = styled.h2`
//     color: #DA8537;
//     margin-left: 130px;
//     margin-top: 10px; 
//     font-family: Playfair Display;
//     font-size: 60px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: 120%; /* 72px */
// `

// export const AboutText = styled.p`
//     margin-top: 200px;
 
//     color: #15655B;
//     font-family: Poppins;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 180%; /* 36px */
    
// `
// export const FirstTextLine = styled.div`
//     margin-left: 280px;
//     width: 55%;

//     img{
//         width: 10px;
//         height: 10px;
//     }
// `
// export const SecondTextLine = styled.div`
//     margin-left: 310px;
//     width: 55%;

//     img{
//         width: 10px;
//         height: 10px;
//     }
// `
// export const ThirdTextLine = styled.div`
//     margin-left: 350px;
//     width: 50%;

//     img{
//         width: 10px;
//         height: 10px;
//     }
// `