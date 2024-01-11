const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid"); 
const fs = require("fs");

const videoData = require("../data/video-details.json");

const getVideosList = () => {
    let videosList = videoData.map(video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }
    })
    return videosList;
}

router.get('/', (req, res) => {
    try {
        if(videoData) {

        }
    }
})