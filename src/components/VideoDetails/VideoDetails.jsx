import './VideoDetails.scss'
import axios from "axios";
import { useEffect, useState } from "react";

function VideoDetails(props) {

    const [videoDetails, setVideoDetails] = useState({});
    useEffect(() => {
        console.log(props.videoId)
        if (props.videoId) {
            const fetchVideoDetails = async () => {
                try {
                    const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${props.videoId}?api_key=9469f23b-43db-439e-8362-db643e7f53a7`);
                    console.log(response.data)
                    setVideoDetails(response.data);
                } catch (error) {
                    console.error('Error fetching video details:', error);
                }
            };

            fetchVideoDetails();
        }
    }, [props.videoId]);
    return (
        <div className='mainInfo'>
            <section className='mainInfo__items'>
                <div>
                    <div className='hero'>
                        <video controls poster={videoDetails.image}>
                            <source src="" type="video/webm" />
                        </video>
                    </div>
                    <h1 className='mainInfo-title'>
                        {videoDetails.title}
                    </h1>
                    <div>
                        <h3 className='mainInfo-channel'>{videoDetails.channel}</h3>
                    </div>
                    <p className='mainInfo-description'>
                        {videoDetails.description}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default VideoDetails
