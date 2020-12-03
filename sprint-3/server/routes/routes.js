const express = require("express");
const router = express.Router();
let videos = require("../data/PrimaryData.json");
const { v4: uuidv4 } = require("uuid");

//send all videos to the client
router.get('/videos', (req, res)=>{
    res.status(200).json(
        videos.map(v=>({
            "id": v.id,
            "title": v.title,
            "channel": v.channel,
            "image": v.image
            }))
        )
    }
)

//get one video with id
router.get('/:id', (req, res)=>{
    console.log('Request for primary videos')
    res.status(200).json(
        videos.find(primaryV=>primaryV.id===req.params.id)
    )
})
//format the date 
function formatDate(t){
    let time = t
    var myDate = new Date(time);
    var year = myDate.getFullYear()
    var month = myDate.getMonth()+1;
    var date = myDate.getDate();
    var dateFormat = date +"/" + month + "/" + year;
    return dateFormat
}

//post video to data set
router.post('/videos', (req, res)=>{
        const newVideo = {
                ... req.body,
                id: uuidv4(),
                channel: "Katherine's Channel",
                // image: "../../../client/src/assets/images/Upload-video-preview.jpg",
                views: "3",
                likes: "7",
                duration: "3:20",
                timestamp: formatDate(Date.now()),
            }
            //created object
            videos.push(newVideo)
            //send back all the vidoes with the new vidoe added
                return res.status(201).json(videos)
})

module.exports = router;
