import styled from 'styled-components';
export const HeaderTag = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
    & > ul {
        /* pc 드롭다운은 모바일에서 보이지 않게 설정*/
        display:none;
    }
    & button + a {
        /* 이미지 */
        display:none;
    }
    /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        border-bottom: 1px solid #e9ecef;
        justify-content: space-around;
        padding: 0;
        & > button {
            display:none;
        }
        & button + a {
            display: block;
        }
        & > ul {
            /* 드롭다운 menuItmes.jsx*/
            display:flex;
        }
    }
`
export const UserInfoWrapper = styled.div`
    & button {
        font-size : 18px;
    }
`