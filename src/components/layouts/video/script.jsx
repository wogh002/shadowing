import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { CURRENT_INDEX_REQUEST } from '../../../reducers/video';
const HOUR_SECONDS = 3600;
const MINUTE_SECONDS = 60;
const TEN_SECONDS = 10;
const CHARACTER_0 = '0';
const Div = styled.div`
    display: flex;
    align-items : center;
    margin-bottom : 15px;
    min-width : 255px;
    dt {
        margin-right : 20px;
    }
    dd {
        cursor: pointer;
    }
    ${({ color }) => color === "true" && css`
        background-color: darkgray;
        padding: 7px;
        color: white;
        border-radius: 5px;
        opacity: 0.9;
    `}
`
const getTime = (SEC) => {
    //1 % 3  1을 3으로 나누면 몫은 0 나머지는 1
    const MIN =
        parseInt((SEC % HOUR_SECONDS) / MINUTE_SECONDS) < TEN_SECONDS ?
            CHARACTER_0 + parseInt((SEC % HOUR_SECONDS) / MINUTE_SECONDS)
            :
            parseInt((SEC % HOUR_SECONDS) / MINUTE_SECONDS);
    const SECOND =
        SEC % MINUTE_SECONDS < TEN_SECONDS ?
            CHARACTER_0 + SEC % MINUTE_SECONDS
            :
            SEC % MINUTE_SECONDS;
    return MIN + ":" + SECOND;
}
const Script = ({ item, selectedIndex, curIndex }) => {
    const dispatch = useDispatch();
    const START_SEC = Math.floor(item.start);
    const onClick = () => {
        dispatch({
            type: CURRENT_INDEX_REQUEST,
            data: { curIndex }
        });
    };
    return (
        <Div color={selectedIndex === curIndex ? "true" : "false"}>
            <dt>{getTime(START_SEC)}</dt>
            <dd onClick={onClick}>{item.text}</dd>
        </Div>
    )
}
export default Script;