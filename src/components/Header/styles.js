import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    background-color: none;
    /* margin-top: ${px2vw(28)}; */
    /* margin-left: ${px2vw(140)}; */

    @media ${device.mobileM}{
      display: table-row;
      width: 100%;
    }
`
export const FirstContainer = styled.div`
    display: flex;
    margin-left: ${px2vw(140)};
    margin-top: ${px2vw(28)};
`
export const LastContainer = styled.div`
    justify-content: end;
    margin-top: ${px2vw(28)};

    @media ${device.mobileM}{
        margin-top: ${px2vw(1050)};
        margin-left: ${px2vw(-650)};
    }
`
export const NavButton = styled.button`
    background: none;
    border: none;
    padding: ${px2vw(10)};
    cursor:pointer;
    
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

    @media ${device.mobileM}{
      font-size: ${px2vw(40)};
      padding: ${px2vw(30)};
      margin-top: ${px2vw(100)};
    }
`

export const AboutButton = styled.button`
    display: flex;
    position:relative;
    z-index: 2;
    padding: ${px2vw(10)};
    justify-content: center;
    align-items: center;
    cursor:pointer;
    background: #DA8537;
    border: none;
    margin-left: ${px2vw(780)};

    color: #F2E0CF;
    font-family: Poppins;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    &:hover {
        color: #15655B;
        font-weight: 400;
    }

    @media ${device.mobileM}{
      display: table-row;
      padding: ${px2vw(30)} ${px2vw(100)};
      font-size: ${px2vw(40)};
      
    }
`