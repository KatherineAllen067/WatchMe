import { v4 as uuid } from 'uuid';

const mainVideo ={
    id: uuid(),
    title: 'BMX Rampage: 2018 Highlights',
    description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was neededfor event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    channel: 'Red Cow',
    image: "two bmx bikers",
    views: "1,001,023",
    likes:  "110,985",
    duration: '0:00 / 0:42',
    timestamp: '12/18/2018',      
    comments: [    {
            id: uuid(),
            name: "Micheal Lyons",
            time: "12/18/2018",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        },
        {
            id: uuid(),
            name: "Gary Wong",
            time: "12/12/2018",
            comment: " Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
            id: uuid(),
            name: "Theodore Duncan",
            time: "11/15/2018",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
        }
    ]
}  

 //data structure for the secondary videos that are in a collapsed state while primary video is playing
    // const thumbnailVideo = [
    //     {
    //         id: uuid(), 
    //         title: 'Become A Travel Pro In One Easy Lesson', 
    //         channel: 'Scotty Cranmer', 
    //         image: <img className="side-video" src={Video2} alt="Man with bike" /> 
    //     },
    //     {
    //         id: uuid(), 
    //         title: 'Les Houches The Hidden Gem Of The Chamonix', 
    //         channel: 'Scotty Cranmer', 
    //         image: <img className="side-video" src={Video3} alt="beach front" /> 
    //     },
    //     {
    //         id: uuid(), 
    //         title: 'Travel Health Useful Medical Information For', 
    //         channel: 'Scotty Cranmer', 
    //         image: <img className="side-video" src={Video4} alt="blue smoothie bowl" />
    //     },
    //     {
    //         id: uuid(), 
    //         title: 'Cheap Airline Tickets Great Ways To Save', 
    //         channel: 'Emily Harper', 
    //         image: <img className="side-video" src={Video5} alt="skyline of Turkey" /> 
    //     },
    //     {
    //         id: uuid(), 
    //         title: 'Take A Romantic Break In A Boutique Hotel', 
    //         channel: 'Ethan Owen', 
    //         image: <img className="side-video" src={Video6} alt="resort on the ocean" /> 
    //     },
    //     {
    //         id: uuid(), 
    //         title: 'Choose The Perfect Accommodations', 
    //         channel: 'Lydia Perez', 
    //         image: <img className="side-video" src={Video7} alt="chair and window" />
    //     },
    //     {
    //         id: uuid(), 
    //         title: 'Cruising Destination Ideas', 
    //         channel: 'Timothy Austin', 
    //         image: <img className="side-video" src={Video8} alt="cruise ship" />
    //     },
    //     {
    //         id: uuid(), 
    //         title: 'Train Travel On Track For Safety', 
    //         channel: 'Scotty Cranmer', 
    //         image: <img className="side-video"src={Video9} alt="train and mountains" /> 
    //     }
    // ];

export default mainVideo;