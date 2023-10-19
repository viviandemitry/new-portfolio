import styled, { keyframes } from 'styled-components'
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import Photo from '../../assets/images/photo_home_page.png'


const transitionImg = keyframes`
    0% {  width: 50%; background-size: 100%; background-position: left 100% top 0; }
    100% {  width: 68%; background-size: 135%; background-position: left 100% top 0; opacity: 30%;}
`

const transitionMobile = keyframes`
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

    @media ${device.mobileM}{
        margin-top: ${px2vw(280)};
        margin-left: ${px2vw(480)};
        width: 100%;

        animation-name: ${transitionMobile};
        animation-duration: 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
`
