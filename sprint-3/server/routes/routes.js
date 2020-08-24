const express = require("express");
const router = express.Router();
let videos = require("../data/PrimaryData.json");
const {uuid} = require('uuid')

//put the data inside a http get request to server it
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

router.get('/:id', (req, res)=>{
    console.log('Request for primary videos')
    res.status(200).json(
        videos.find(primaryV=>primaryV.id===req.params.id)
    )
})

function formatDate(t){
    let time = t
    var myDate = new Date(time);
    var year = myDate.getFullYear()
    var month = myDate.getMonth()+1;
    var date = myDate.getDate();
    var dateFormat = date +"/" + month + "/" + year;
    return dateFormat
}

//I have no idea why I can't post but I tried really hard sorry
router.post('/videos', (req, res)=>{
        const newVideo = {
                ... req.body,
                id: uuid(),
                image: "../../../client/src/assets/images/Upload-video-preview.jpg",
                views: "3",
                likes: "7",
                duration: "3:20",
                timestamp: formatDate(Date.now()),
            }
            videos.push(newVideo)
                //created object
                return res.status(201).json(newVideo)
})

module.exports = router;
