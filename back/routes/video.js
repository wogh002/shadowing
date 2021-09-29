const express = require('express')
const router = express.Router();
const path = require('path');
const { getCaptions, getTracks } = require('@os-team/youtube-captions');

function insertCapIdx(captions){
    for(var i =0;i<captions.length;i++){
        captions[i]['curIndex']=i;
    }
}

module.exports = (pool) => {
    router.get('/loadscript/:uid/:videoId', (req, res, next) => {
        console.log('loadscript');
        //base data load
        const uid = path.parse(req.params.uid).base;
        const videoId = path.parse(req.params.videoId).base;

        //반환할 데이터 불러오기
        const sql = 'SELECT cap_index as selectedIndex FROM viewdata_tb WHERE uid=? AND vid=?';
        const params = [uid, videoId];
        pool.query(sql, params, async (err, results) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            //selectedIndex data load
            if (results.length === 0) {
                pool.query('INSERT INTO viewdata_tb VALUES (?,?,0)', [uid, videoId]);
                results.push({ selectedIndex: 0 });
            }
            const selectedIndex = results[0].selectedIndex;


            //caption data load
            const captionTracks = await getTracks(videoId);

            const enCaptionTrack = captionTracks.find((item) => item.langCode === 'en');
            if (!enCaptionTrack)
                return res.status(404).send();

            let captions = await getCaptions(videoId, enCaptionTrack);
            insertCapIdx(captions);
            const maxlen = captions.length;
            
            captions = captions.slice(selectedIndex, selectedIndex+10);

            // TODO: DB에서 selectedIndex 불러오기
            const data = {
                videoId,
                selectedIndex,
                endIndex: maxlen,
                captions
            };
            res.send(data);
        });
    });

    router.post('/reloadCaption', async (req, res, next) => {
        const videoId = req.body.videoId;
        const curIndex = req.body.curIndex;
        const isLower = req.body.isLower;

        const step = 10;

        let begin = curIndex + 1;
        let end = begin + step;

        //caption data load
        const captionTracks = await getTracks(videoId);
        const enCaptionTrack = captionTracks.find((item) => item.langCode === 'en');
        if (!enCaptionTrack)
            return res.status(404).send();

        let captions = await getCaptions(videoId, enCaptionTrack);
        insertCapIdx(captions);

        if (isLower) {
            if (captions.length < end) end = captions.length;
        } else {
            begin = (curIndex > step) ? curIndex - step : 0;
            end = curIndex;
        }
        captions = captions.slice(begin, end);

        const data = {
            check,
            captions
        };

        return res.send(data);
    });

    router.post('/loadCurIndex', (req, res, next) => {
        const uid = req.body.uid;
        const curIndex = req.body.curIndex;
        // TODO: DB에 curIndex 저장 후 리턴
        return res.status(200).json({ curIndex });
    });

    return router;
}
