const express = require('express');
const videosRoutes = require("./routes/videos.js");
const cors = require('cors');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use('/videos', videosRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
