const express = require('express')
const router = express.Router();
const path = require('path');
const { getCaptions, getTracks } = require('@os-team/youtube-captions');

module.exports = (pool) => {
    router.get('/loadscript/:uid/:videoID', async (req, res, next) => {
        const uid = path.parse(req.params.uid).base;
        const vid = path.parse(req.params.videoID).base;

        const captionTracks = await getTracks(vid);

        const enCaptionTrack = captionTracks.find((item) => item.langCode === 'en');
        if (!enCaptionTrack)
            return res.status(404).send();

        let captions = await getCaptions(vid, enCaptionTrack);
        captions = captions.slice(0, 10);

        // TODO: DB에서 selectedIndex 불러오기
        const data = {
            videoId: vid,
            selectedIndex: 0,
            captions
        };
        res.send(data);
    });

    router.post('/loadCurIndex', (req, res, next) => {
        let uid = req.body.uid;
        let curIndex = req.body.curIndex;
        // TODO: DB에 curIndex 저장 후 리턴
        return res.status(200).json({ curIndex });
    });

    return router;
}
