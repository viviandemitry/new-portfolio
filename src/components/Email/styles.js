import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const EmailButton = styled.button`
    background: none;
    border: none;

    cursor:pointer;

    &:hover{
        width: 73px;
        height: 73px;
    }
`