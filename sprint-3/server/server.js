const express = require("express");
const app = express();
const cors = require('cors');
const videoIdRoutes = require('./data/PrimaryData');
const videoRoutes = require('./data/SecondaryData');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
//middleware for cors
app.use(cors());
//being able to post 
app.use(express.json());
//defining the endpoints for the primary video http://localhost:8080/videos/:id and thumbnail video http://localhost:8080/videos
app.use('/', videoRoutes);
app.use('/videos', videoIdRoutes);

//defining the port to listen on in this case http://localhost:8080
app.listen(8080, () => {
    console.log(`BrainFlix listening on ${PORT}`);
  });