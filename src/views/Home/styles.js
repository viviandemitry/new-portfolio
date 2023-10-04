import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import Photo from '../../assets/images/photo_home_page.png'

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;

    background: rgba(21, 101, 91, 0.95);
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
    /* margin-bottom: none; */

    color: #F2E0CF;
    font-family: Playfair Display;
    font-size: ${px2vw(70)};
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 108px */
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
    }
`
export const TextHiden = styled.span`
    color: #DA8537; 
`