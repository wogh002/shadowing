import {keyframes} from 'styled-components';
export const circle = keyframes`
    0% {
        opacity : 1;
        border-color : #69c893;
        transform: rotate(0deg);
    }
    50% {
        opacity : 0.7;
        border-color : #69c893;
        transform: rotate(180deg);
    }
    100% {
        opacity : 0.3;
        border-color : #ccffcc;
        transform: rotate(360deg);
    }
`