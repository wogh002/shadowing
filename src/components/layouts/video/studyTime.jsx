import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
const HOUR_SECONDS = 3600;
const MINUTE_SECONDS = 60;
const TEN_SECONDS = 10;
const CHARACTER_0 = '0';
const Timer = styled.span`
    width: 100%;
    font-size : 13px;
    display: block;
    text-align: center;
    margin-bottom: 13px;
    min-width: 118px;
      /* --- desktop --- */
    @media ${({ theme: { desktop } }) => desktop} {
        font-size : 17px;
    }
`
const StudyTime = () => {
    const { me } = useSelector(({ user }) => user);
    const dispatch = useDispatch();
    const getTime = (curStudyTime) => {
        const HOUR = parseInt(curStudyTime / HOUR_SECONDS) < TEN_SECONDS ?
            CHARACTER_0 + parseInt(curStudyTime / HOUR_SECONDS)
            :
            parseInt(curStudyTime / HOUR_SECONDS);
        const MIN = parseInt((curStudyTime % HOUR_SECONDS) / MINUTE_SECONDS) < TEN_SECONDS ?
            CHARACTER_0 + parseInt((curStudyTime % HOUR_SECONDS) / MINUTE_SECONDS)
            :
            parseInt((curStudyTime % HOUR_SECONDS) / MINUTE_SECONDS);
        const SEC = curStudyTime % MINUTE_SECONDS < TEN_SECONDS ?
            CHARACTER_0 + curStudyTime % MINUTE_SECONDS
            :
            curStudyTime % MINUTE_SECONDS;
        return HOUR + ":" + MIN + ":" + SEC;
        // TODO LIST : ↓
        // 1초마다 curStudyTime 증가 후 반환 해야함.
        //20초마다 현재 경과 시간을 서버에게 요청
    }
    return (
        <Timer>
            {/* // TODO: change to getTime(me.studyTime) after request back-end  */}
            {me.userId} 🥇 {getTime(10000)}
        </Timer>
    )
}

export default StudyTime;