// import videoDetails from '../../assets/Data/video-details.json'
// import nextVideos from '../../assets/Data/videos.json'


// import './MainInfo.scss'
// import Comments from '../Comments/Comments'
// import NextVideos from '../NextVideos/NextVideos'


// function MainInfo({ avatar, handleSelect, selectedVideo }) {


//     const selectedVideoDetails = videoDetails.find(videoDetail => videoDetail.title === selectedVideo);

//     return (
//         <div className='mainInfo'>
//             <section className='mainInfo__items'>
//                 <div>
//                     <h1 className='mainInfo-title'>
//                         {selectedVideo}
//                     </h1>
//                     <div>
//                         <h3 className='mainInfo-channel'>{selectedVideoDetails.channel}</h3>
//                     </div>
//                     <p className='mainInfo-description'>
//                         {selectedVideoDetails.description}
//                     </p>
//                 </div>
//                 <Comments avatar={avatar} comments={selectedVideoDetails.comments} />

//             </section >
//             <NextVideos nextVideos={nextVideos} selectedVideoTitle={selectedVideo} onSelect={handleSelect} />
//         </div>

//     )
// }

// export default MainInfo



// the mainInfo {when nextVideos uses API} starts here. ///////

// import videoDetails from '../../assets/Data/video-details.json'
// import './MainInfo.scss'
// import Comments from '../Comments/Comments'
// import NextVideos from '../NextVideos/NextVideos'

// function MainInfo({ nextVideos, avatar, handleSelect, selectedVideo }) {

//     const selectedVideoDetails = videoDetails.find(videoDetail => videoDetail.title === selectedVideo);

//     return (
//         <div className='mainInfo'>
//             <section className='mainInfo__items'>
//                 <div>
//                     <h1 className='mainInfo-title'>
//                         {selectedVideo}
//                     </h1>
//                     <div>
//                         <h3 className='mainInfo-channel'>{selectedVideoDetails.channel}</h3>
//                     </div>
//                     <p className='mainInfo-description'>
//                         {selectedVideoDetails.description}
//                     </p>
//                 </div>
//                 <Comments avatar={avatar} comments={selectedVideoDetails.comments} />

//             </section >
//             <NextVideos nextVideos={nextVideos} selectedVideoTitle={selectedVideo} onSelect={handleSelect} />
//         </div>

//     )
// }
// export default MainInfo








// The Not working one appears here: ...
// import videoDetails from '../../assets/Data/video-details.json'

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// import './MainInfo.scss'
// import Comments from '../Comments/Comments'
// import NextVideos from '../NextVideos/NextVideos'

// function MainInfo({ nextVideos, avatar, handleSelect, selectedVideo }) {


    // useEffect(() => {
    //     const fetchVideoDetails = async () => {
    //         const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/c05b9a93-8682-4ab6-aff2-92ebb4bbfc14?api_key=9469f23b-43db-439e-8362-db643e7f53a7')
    //         console.log(response.data)
    //         setVideoDetails(response.data);

    //     }

    //     fetchVideoDetails();
    // }, []);   //added paranthesis and semicolon
//     const [videoDetails, setVideoDetails] = useState([]);
//     const selectedVideoDetails = videoDetails.find(videoDetail => videoDetail.title === selectedVideo);
//     console.log(videoDetails)
//     return (
//         <div className='mainInfo'>
//             <section className='mainInfo__items'>
//                 <div>
//                     <h1 className='mainInfo-title'>
//                         {selectedVideo}
//                     </h1>
//                     <div>
//                         <h3 className='mainInfo-channel'>{selectedVideoDetails.channel}</h3>
//                     </div>
//                     <p className='mainInfo-description'>
//                         {selectedVideoDetails.description}
//                     </p>
//                 </div>
//                 <Comments avatar={avatar} comments={selectedVideoDetails.comments} />

//             </section >
//             <NextVideos nextVideos={nextVideos} selectedVideoTitle={selectedVideo} onSelect={handleSelect} />
//         </div>

//     )
// }

// export default MainInfo


/// the one with updated code from AllVideos Compoenent
// import React from 'react';
// import videoDetails from '../../assets/Data/video-details.json';
// import './MainInfo.scss';
// import Comments from '../Comments/Comments';
// import NextVideos from '../NextVideos/NextVideos';

// function MainInfo({ nextVideos, avatar, handleSelect, selectedVideo }) {
//     const selectedVideoDetails = videoDetails.find(videoDetail => videoDetail.title === selectedVideo.title);

//     return (
//         <div className='mainInfo'>
//             <section className='mainInfo__items'>
//                 <div>
//                     <h1 className='mainInfo-title'>
//                         {selectedVideo.title}
//                     </h1>
//                     <div>
//                         <h3 className='mainInfo-channel'>{selectedVideoDetails.channel}</h3>
//                     </div>
//                     <p className='mainInfo-description'>
//                         {selectedVideoDetails.description}
//                     </p>
//                 </div>
//                 <Comments avatar={avatar} comments={selectedVideoDetails.comments} />
//             </section>
//             <NextVideos nextVideos={nextVideos} selectedVideoTitle={selectedVideo.title} onSelect={handleSelect} />
//         </div>
//     );
// }

// export default MainInfo;


//trying over with two apis

// import videoDetails from '../../assets/Data/video-details.json'
// import nextVideos from '../../assets/Data/videos.json'


// import './MainInfo.scss'
// import Comments from '../Comments/Comments'
// import NextVideos from '../NextVideos/NextVideos'
// import {  useEffect, useState } from 'react';
// import axios from 'axios'

// function MainInfo({ avatar, handleSelect, selectedVideo }) {
//     const [nextVideos, setNextVideos] = useState (null)
//     const [videoDetails, setVideoDetails] = useState (null)
//     useEffect(() => {
//         const fetchNextVideos =async () => {

//             const response =await axios.get ('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=9469f23b-43db-439e-8362-db643e7f53a7')

//             setNextVideos(response.data);

//         }
//         fetchNextVideos() }) ;

//   if (selectedVideo.id === fetchNextVideos.id) { return
//     useEffect(() => {
//         const fetchVideoDetails = async () => {
//             const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/{id}?api_key=9469f23b-43db-439e-8362-db643e7f53a7')
//             setVideoDetails(response.data);}
//         } else {alert (Nothing)}

//         }

//         fetchVideoDetails();
//     }, []);
//     const selectedVideoDetails = videoDetails.find(videoDetail => videoDetail.title === selectedVideo);

//     return (
//         <div className='mainInfo'>
//             <section className='mainInfo__items'>
//                 <div>
//                     <h1 className='mainInfo-title'>
//                         {selectedVideo}
//                     </h1>
//                     <div>
//                         <h3 className='mainInfo-channel'>{selectedVideoDetails.channel}</h3>
//                     </div>
//                     <p className='mainInfo-description'>
//                         {selectedVideoDetails.description}
//                     </p>
//                 </div>
//                 <Comments avatar={avatar} comments={selectedVideoDetails.comments} />

//             </section >
//             <NextVideos nextVideos={nextVideos} selectedVideoTitle={selectedVideo} onSelect={handleSelect} />
//         </div>

//     )
// }

// export default MainInfo


//trying with adding logic to only make a second get request when the ids match


import './MainInfo.scss';
import Comments from '../Comments old/Comments';
import NextVideos from '../NextVideos/NextVideos';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MainInfo({ avatar, handleSelect, selectedVideo, nextVideos }) {
    // const [nextVideos, setNextVideos] = useState(null);
    const [videoDetails, setVideoDetails] = useState(null);

    // useEffect(() => {
    //     const fetchNextVideos = async () => {
    //         try {
    //             const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=9469f23b-43db-439e-8362-db643e7f53a7');
    //             setNextVideos(response.data);
    //         } catch (error) {
    //             console.error('Error fetching next videos:', error);
    //         }
    //     };

    //     fetchNextVideos();
    // }, []);

    useEffect(() => {
        if (nextVideos && selectedVideo) {
            const matchingVideo = nextVideos.find(nextVideo => nextVideo.id === selectedVideo.id);
            if (matchingVideo) {
                const fetchVideoDetails = async () => {
                    try {
                        const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${matchingVideo.id}?api_key=9469f23b-43db-439e-8362-db643e7f53a7`);

                        setVideoDetails(response.data);
                    } catch (error) {
                        console.error('Error fetching video details:', error);
                    }
                };

                fetchVideoDetails();
            } else {
                console.log('No matching video found');

            }
        }
    }, [nextVideos, selectedVideo]);

    if (!videoDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className='mainInfo'>
            <section className='mainInfo__items'>
                <div>
                    <h1 className='mainInfo-title'>
                        {selectedVideo.title}
                    </h1>
                    <div>
                        <h3 className='mainInfo-channel'>{videoDetails.channel}</h3>
                    </div>
                    <p className='mainInfo-description'>
                        {videoDetails.description}
                    </p>
                </div>
                <Comments avatar={avatar} comments={videoDetails.comments} />
            </section>
            <NextVideos nextVideos={nextVideos} selectedVideoTitle={selectedVideo} onSelect={handleSelect} />
        </div>
    );
}

export default MainInfo;
