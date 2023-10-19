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
    width: ${px2vw(608)};
    height: ${px2vw(142)};
    margin-top: ${px2vw(100)};
    margin-left: 150px;

    color: #DA8537;
    font-family: Playfair Display;
    font-size: ${px2vw(40)};
    font-style: normal;
    font-weight: 700;
    line-height: 180%;
` 

export const ContentContainer = styled.div`
    display: flex;   
` 

export const ImgContainer = styled.div`
    display: table-row;
    width: ${px2vw(310)};
    height: ${px2vw(310)};
    flex-shrink: 0;
    margin-left: ${px2vw(150)};
    margin-bottom: ${px2vw(100)};

    background-color: #DA8537;

    img {
        margin-left: ${px2vw(10)};
        width: ${px2vw(300)};
        height: ${px2vw(300)};
    }
` 
export const ImgText = styled.p`
    color: #F2E0CF;
    font-weight: 300;
    font-size: ${px2vw(15)};
`
export const TextContainer = styled.p`
    margin-left: ${px2vw(100)};
    margin-top: ${px2vw(1)};
    width: ${px2vw(600)};

    color: #F2E0CF;
    font-weight: 300;
    font-size: ${px2vw(25)};

    img {
        margin-bottom: ${px2vw(30)};
    }
`  