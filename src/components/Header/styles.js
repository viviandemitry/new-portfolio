import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    background-color: none;
    margin-top: ${px2vw(28)};
    margin-left: ${px2vw(150)};
`
export const FirstContainer = styled.div`
    display: flex;
    
`
export const LastContainer = styled.div`
    
    justify-content: end;
`
export const NavButton = styled.button`
    background: none;
    border: none;

    color: #F2E0CF;
    font-family: Poppins;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    transition: color .2s ease-in-out, background-color .2s ease-in-out;

    &:hover {
        background-color: ${(props) => props.local === "/" || props.local === "/recommendations" ? "#DA8537;" : "#15655B;"};
    } 
`

export const AboutButton = styled.button`
    display: flex;
    position:relative;
    z-index: 2;
    padding: ${px2vw(10)} ${px2vw(20)};
    justify-content: center;
    align-items: center;
    background: #DA8537;
    /* border-radius: ${px2vw(5)}; */
    border: none;
    margin-left: ${px2vw(780)};

    color: #F2E0CF;
    font-family: Poppins;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    &:hover {
        padding: ${px2vw(10)} ${px2vw(22)};
        margin-left: ${px2vw(775)};
        font-weight: 400;
    }
`