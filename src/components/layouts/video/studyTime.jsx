import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { STUDY_TIME_REQUEST } from '../../../reducers/user';
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
const getTime = (STUDY_SEC) => {
    const CUR_HOUR = parseInt(STUDY_SEC / HOUR_SECONDS) < TEN_SECONDS ?
        CHARACTER_0 + parseInt(STUDY_SEC / HOUR_SECONDS)
        :
        parseInt(STUDY_SEC / HOUR_SECONDS);
    const CUR_MIN = parseInt((STUDY_SEC % HOUR_SECONDS) / MINUTE_SECONDS) < TEN_SECONDS ?
        CHARACTER_0 + parseInt((STUDY_SEC % HOUR_SECONDS) / MINUTE_SECONDS)
        :
        parseInt((STUDY_SEC % HOUR_SECONDS) / MINUTE_SECONDS);
    const CUR_SEC = STUDY_SEC % MINUTE_SECONDS < TEN_SECONDS ?
        CHARACTER_0 + STUDY_SEC % MINUTE_SECONDS
        :
        STUDY_SEC % MINUTE_SECONDS;
    return {
        CUR_HOUR,
        CUR_MIN,
        CUR_SEC
    }
}
const StudyTime = () => {
    const { me } = useSelector(({ user }) => user); 
    // TODO: change 3385 to me.studySec after request back-end
    const { CUR_HOUR, CUR_MIN, CUR_SEC } = useMemo(() => getTime(0), []);
    const interval = useRef(null);
    const [hour, setHour] = useState(Number(CUR_HOUR));
    const [min, setMin] = useState(Number(CUR_MIN));
    const [sec, setSec] = useState(Number(CUR_SEC));
    const dispatch = useDispatch();
    useEffect(() => {
        interval.current = setInterval(() => {
            if (sec < 59) {
                setSec(sec + 1);
            }
            else {
                setSec(0);
                if (min < 59) {
                    setMin(min + 1);
                }
                else {
                    setHour(hour + 1);
                    setMin(0);
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval.current);
        }
    }, [hour, min, sec]);
    // TODO: change to me.studySec + 20 after request back-end
    useEffect(() => {
        const studyTime = setInterval(() => {
            dispatch({
                type: STUDY_TIME_REQUEST,
                data: 3385 + 20,
            });
        }, 3000);
        return () => {
            clearInterval(studyTime);
        }
    }, [dispatch]);
    return (
        <Timer>
            {me.userId} 🥇 {hour}:{min}:{sec}
        </Timer>
    )
}
export default StudyTime;