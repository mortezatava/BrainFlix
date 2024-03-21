
import './VideoDetails.scss'
import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";

function VideoDetails(props) {
    const [videoDetails, setVideoDetails] = useState({});
    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const currentVideoId = props.videoId || "84e96018-4022-434e-80bf-000ce4cd12b8"
                const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${currentVideoId}?api_key=9469f23b-43db-439e-8362-db643e7f53a7`);
                console.log(response.data)
                setVideoDetails(response.data);

            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };
        fetchVideoDetails();
    }, [props.videoId])

    return (

        <section className='mainInfo__items'>
            <div>
                <div className='hero'>
                    <video controls poster={videoDetails.image}>
                        <source src="" type="video/webm" />
                    </video>
                </div>
                <div className='mainInfo'>
                    <h1 className='mainInfo-title'>
                        {videoDetails.title}
                    </h1>
                    <div className='mainIfo-channel-container'>
                        <h3 className='mainInfo-channel'>{videoDetails.channel}</h3>
                    </div>
                    <p className='mainInfo-description'>
                        {videoDetails.description}
                    </p>
                    <Comments videoId={videoDetails.id} selectedVideoComments={videoDetails} />
                </div >
            </div>
        </section>
    )
}
export default VideoDetails
