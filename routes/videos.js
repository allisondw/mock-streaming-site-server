const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");


const readVideosData = () => {
    try {
        const videosData = fs.readFileSync("./data/video-details.json", "utf8");
        const videos = JSON.parse(videosData);
        return videos;
    } catch (error) {
        console.error(error);
    }
};

const writeVideosData = (data) => {
  const stringifiedVideo = JSON.stringify(data);
  fs.writeFileSync('./data/video-details.json', stringifiedVideo);
};

router.route("/").get((req, res) => {
  const videos = readVideosData();
  const bareVideo = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image
    };
  });
  res.status(200).json(bareVideo);
}).post((req, res) => {
    const videos = readVideosData();
    const newVideo = {
        id: uuidv4(),
        title: req.body.title,
        channel: "Private Channel",
        image: "/upload-preview.jpg",
        description: req.body.description,
        views: 0,
        likes: 0,
        duration: "10:22",
        video: '',
        timestamp: Date.now(),
        comments: []
    }
    videos.push(newVideo);
    writeVideosData(videos);
    res.status(200).send("Video successfully uploaded!");
});

router.get('/:videoId', (req, res) => {
    const videos = readVideosData();
    const videoId = req.params.videoId;
    const selectedVideo = videos.find(video => video.id === videoId);
    if(selectedVideo) {
        res.json(selectedVideo);
    } else {
        res.status(404).send("Video not found");
    }
})

module.exports = router;