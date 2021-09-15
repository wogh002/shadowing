import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { SEND_CURRENT_INDEX_REQUEST } from '../../../reducers/video';
const Div = styled.div`
    dd {
        cursor: pointer;
    }
    ${({ color }) => color === "true" && css`
        background-color: darkgray;
        color: white;
    `}
`
const Script = ({ item, selectedIndex, curIndex }) => {
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        dispatch({
            type: SEND_CURRENT_INDEX_REQUEST,
            data: { curIndex }
        });
    }, [dispatch, curIndex]);
    return (
        <Div color={selectedIndex === curIndex ? "true" : "false"}>
            <dt>00:12</dt>
            <dd onClick={onClick} >{item.text}</dd>
        </Div>
    )
}
export default Script;