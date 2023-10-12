import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const Container = styled.div`
    display: flex;
    position: fixed;
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
export const HomeButton = styled.button`
    background: none;
    border: none;

    color: ${(props) => props.local === "/contacts" ? "#15655B" : "#F2E0CF"};
    font-family: Poppins;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    transition: color .2s ease-in-out, box-shadow .2s ease-in-out;

    &:hover {
        box-shadow: ${(props) => props.local === "/contacts" ? "inset 100px 0 0 0 color #15655B" : "inset 100px 0 0 0 color #DA8537"};
    }
    &:active {
        color: #15655B;
    }
`

export const ProjectsButton = styled.button`
    background: none;
    border: none;

    color: ${(props) => props.local === "/contacts" ? "#15655B" : "#F2E0CF" };
    font-family: Poppins;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    transition: color .2s ease-in-out, box-shadow .2s ease-in-out;

    &:hover {
        box-shadow: inset 100px 0 0 0 #DA8537;
    }
    &:active {
        color: #15655B;
    }
`

export const RecommendationsButton = styled.button`
    Background: none;
    border: none;

    color: ${(props) => props.local === "/contacts" ? "#15655B" : "#F2E0CF" };
    font-family: Poppins;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    transition: color .2s ease-in-out, box-shadow .2s ease-in-out;

    &:hover {
        box-shadow: inset 160px 0 0 0 #DA8537;
    }
    &:active {
        color: #15655B;
    }
`

export const ContactsButton = styled.button`
    background: none;
    border: none;

    color: ${(props) => props.local === "/contacts" ? "#15655B" : "#F2E0CF" };
    font-family: Poppins;
    font-size: ${px2vw(16)};
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    transition: color .2s ease-in-out, box-shadow .2s ease-in-out;

    &:hover {
        box-shadow: inset 100px 0 0 0 #DA8537;
    }
    &:active {
        color: #15655B;
    }
`

export const AboutButton = styled.button`
    display: flex;
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