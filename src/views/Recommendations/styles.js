import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    background: #15655B;
`
export const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;

    .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet {
        color: #DA8537;    
    }

    .swiper-pagination-bullet {
        background-color: #DA8537;
    } 
` 
export const Title = styled.h2`
    width: 608px;
    height: 142px;
    flex-shrink: 0;
    margin-top: 100px;
    margin-left: 150px;

    color: #DA8537;
    font-family: Playfair Display;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 180%;
` 

export const ContentContainer = styled.div`
    display: flex;
    
` 

export const ImgContainer = styled.div`
 display: table-row;
    width: 310px;
    height: 310px;
    flex-shrink: 0;
    margin-left: 150px;
    margin-bottom: 100px;

    background-color: #DA8537;

    img {
        margin-left: 10px;
        /* margin: auto; */
        width: 300px;
        height: 300px;
    }
` 
export const ImgText = styled.p`
    color: #F2E0CF;
    font-weight: 300;
    font-size: 15px;
`
export const TextContainer = styled.p`
    margin-left: 100px;
    margin-top: 1px;
    width: 500px;

    color: #F2E0CF;
    font-weight: 300;
    font-size: 25px;

    img {
        margin-bottom: 30px;
    }
`  