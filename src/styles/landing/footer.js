import styled from 'styled-components';
export const AppInfoWrapper = styled.footer`
    padding:25px 25px 0;
      /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        display: flex;
        justify-content: space-around;
        div {
            min-width: auto;
            margin-bottom: 0;
        }
        div:nth-child(1){
            min-width:148px;
        }
        div:nth-child(3){
            min-width: 222px;
        }
        div h2{
            font-size :18px;
            margin-bottom : 32px;
        }
        div ul li{
            font-size:17px;
            margin-bottom: 17px;
        }
    }
`
export const AppInfo = styled.div`
    text-align:left;
    margin-bottom: 20px;
    min-width: 220px;
    h2{
        font-weight: 700;
        font-size :17px;
        margin-bottom : 16px;
        letter-spacing: -0.02em;
    }
    ul li{
        cursor: pointer;
        margin-bottom: 15px;
        opacity: 0.7;
        font-size:15px;
        letter-spacing: -0.02em;
        transition: opacity 250ms ease-in-out;
        :hover{
            opacity: 1;
        }
    }
    img {
        cursor: pointer;
        :last-child{
            margin-left: 7px;
        }
    }
    :last-child{
        margin-bottom: 0;
        img{
            cursor: auto;
        }
    }
`