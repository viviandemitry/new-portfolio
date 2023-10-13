import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import Photo from '../../assets/images/photo_home_page.png'

export const Container = styled.div`
    width: 70%;
    height: 100vh;
    overflow: hidden;
    background-image: url(${Photo});
    background-repeat: no-repeat;
    background-size: 100%;
`

export const TitleAbout = styled.h2`
    color: #DA8537;

    font-family: Playfair Display;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 72px */
`

export const AboutText = styled.p`
    color: #15655B;

    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%; /* 36px */

`

