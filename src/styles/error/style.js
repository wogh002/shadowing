import styled, { css } from 'styled-components';
export const ErrorMessage = styled.span`
    color:red;
    position: absolute;
    font-size:11px;
    opacity: 0.8;
    min-width: 189px;
    ${({ color }) => color === "green" && css`
        color:green;
    `}
`