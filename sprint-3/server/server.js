const express = require("express");
const app = express();
const cors = require('cors');
const videoIdRoutes = require('./routes/routes');
const bodyparser = require('body-parser');
//middleware for cors
app.use(cors());

//being able to post to the data sets
app.use(express.json());
app.use(bodyparser.json())

//defining the endpoints for the primary video
app.use('/', videoIdRoutes);
app.use('/videos', videoIdRoutes);

//defining the port to listen on in this case http://localhost:8080
app.listen((8080), () => {
    console.log(`BrainFlix listening on 8080`);
  });