import styled from 'styled-components';
export const Section = styled.section`
    border:  1px solid #e0e1e6;
    padding: 25px;
    & > h1 {
        font-size : 13px;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-align : center;
        margin-bottom: 19px;
    }
    dl {
        font-size : 12px;
        overflow-y : scroll;
        height: 250px;
    }
      /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        dl {
            font-size : 15px;
        }
        & > h1 {
            font-size : 19px;
        }
    }
`