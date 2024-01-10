import express from 'express';

const app = express();
const port = 8080;

app.get('/videos', (req, res) => {
    res.send("This will be the route for fetching all videos");
});

app.get('/videos/:videoId', (req, res) => {
    res.send("This will be the route for fetcing selected video");
});

app.post('/videos', (req, res) => {
    res.send("This will be the route for posting a new video")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});