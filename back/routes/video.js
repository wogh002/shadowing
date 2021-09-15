const express = require('express')
const router = express.Router();
const path = require('path');
const { getCaptions, getTracks } = require('@os-team/youtube-captions');

router.get('/loadscript/:videoID', async (req, res, next) => {
    const vid = path.parse(req.params.videoID).base;
    const captionTracks = await getTracks(vid);

    const enCaptionTrack = captionTracks.find((item) => item.langCode === 'en');
    if (!enCaptionTrack)
        return res.status(404).send();

    const captions = await getCaptions(videoId, enCaptionTrack);

    const data = {
        videoId: vid,
        selectedIndex: 0,
        captions
    };

    res.send(data);
    
});

module.exports = router;