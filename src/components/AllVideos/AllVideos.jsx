import { useState } from 'react';

import './AllVideos.scss';
import Hero from '../Hero/Hero'
import MainInfo from '../MainInfo/MainInfo';

import videos from '../../assets/Data/videos.json'

function AllVideos({avatar}) {
    const [selectedVideo, setSelectedVideo] = useState('The Future of Artificial Intelligence');

    function handleSelect(videoTitle) {
        setSelectedVideo(videoTitle);
    }

    const selectedVideoInfo = videos.find(video => video.title === selectedVideo);

    return (
        <>
            <Hero videoImage={selectedVideoInfo.image}/>
            <MainInfo avatar={avatar} selectedVideo={selectedVideo} handleSelect={handleSelect}/>
        </>
    );
}
export default AllVideos;
