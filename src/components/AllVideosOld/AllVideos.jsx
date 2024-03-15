
/// sprint1 working one starts here:

// import { useState } from 'react';

// import './AllVideos.scss';
// import Hero from '../Hero/Hero'
// import MainInfo from '../MainInfo/MainInfo';

// import videos from '../../assets/Data/videos.json'

// function AllVideos({avatar}) {
//     const [selectedVideo, setSelectedVideo] = useState('The Future of Artificial Intelligence');

//     function handleSelect(videoTitle) {
//         setSelectedVideo(videoTitle);
//     }

//     const selectedVideoInfo = videos.find(video => video.title === selectedVideo);

//     return (
//         <>
//             <Hero videoImage={selectedVideoInfo.image}/>
//             <MainInfo avatar={avatar} selectedVideo={selectedVideo} handleSelect={handleSelect}/>
//         </>
//     );
// }
// export default AllVideos;


///the one for triying useState and Api starts here:
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// import './AllVideos.scss';
// import Hero from '../Hero/Hero'
// import MainInfo from '../MainInfo/MainInfo';

// // import videos from '../../assets/Data/videos.json'

// function AllVideos({ avatar }) {


//     const [selectedVideo, setSelectedVideo] = useState('The Future of Artificial Intelligence');
//     useEffect(() => {
//         const fetchNextVideos = async () => {
//             const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=9469f23b-43db-439e-8362-db643e7f53a7')

//             // const response = await axios.get ('https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=4425da4a-083a-4cfc-a916-5ed13876803e')
//             console.log(response.data)
//             setSelectedVideo(response.data);
//         }

//         fetchNextVideos();
//     }, []

//     )
//     function handleSelect(videoTitle) {
//         setSelectedVideo(videoTitle);
//     }

//     const selectedVideoInfo = setSelectedVideo.find(setSelectedVideo => setSelectedVideo.title === selectedVideo);

//     return (
//         <>
//             <Hero videoImage={selectedVideoInfo.image} />
//             <MainInfo avatar={avatar} selectedVideo={selectedVideo} handleSelect={handleSelect} />
//         </>
//     );
// }
// export default AllVideos;


/// the generated one starts here:

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import './AllVideos.scss';
// import Hero from '../Hero/Hero';
// import MainInfo from '../MainInfo/MainInfo';

// function AllVideos({ avatar }) {
//     const [selectedVideo, setSelectedVideo] = useState(null);
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         const fetchVideos = async () => {
//             try {
//                 const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=9469f23b-43db-439e-8362-db643e7f53a7');
//                 setVideos(response.data);
//                 setSelectedVideo(response.data[0].title);
//             } catch (error) {
//                 console.error('Error fetching videos:', error);
//             }
//         };

//         fetchVideos();
//     }, []);

//     function handleSelect(videoTitle) {
//         setSelectedVideo(videoTitle);
//     }

//     const selectedVideoInfo = videos.find(video => video.title === selectedVideo);

//     return (
//         <>
//             {selectedVideoInfo && <Hero videoImage={selectedVideoInfo.image} />}
//             <MainInfo avatar={avatar} selectedVideo={selectedVideo} handleSelect={handleSelect} videos={videos} />
//         </>
//     );
// }

// export default AllVideos;


///trying to make both get requests but only one of them applies in this Component

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Hero/Hero';
import MainInfo from '../MainInfo/MainInfo';

function AllVideos({ avatar }) {
    const [selectedVideo, setSelectedVideo] = useState('The Future of Artificial Intelligence');
    const [nextVideos, setNextVideos] = useState([]);

    useEffect(() => {
        const fetchNextVideos = async () => {
            try {
                const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=9469f23b-43db-439e-8362-db643e7f53a7');
                
                setNextVideos(response.data);
            } catch (error) {
                console.error('Error fetching next videos:', error);
            }
        };

        fetchNextVideos();
    }, []);


    const selectedVideoInfo = nextVideos.find(video => video.title === selectedVideo);

    function handleSelect(videoTitle) {
        setSelectedVideo(videoTitle);
    }

    return (
        <>
            <Hero videoImage={selectedVideoInfo ? selectedVideoInfo.image : null} />
            <MainInfo avatar={avatar} nextVideos={nextVideos} selectedVideo={selectedVideo} handleSelect={handleSelect} />
        </>
    );
}

export default AllVideos;
