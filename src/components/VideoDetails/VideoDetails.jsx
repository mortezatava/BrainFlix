
import './VideoDetails.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";

function VideoDetails(props) {
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const currentVideoId = props.videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";
                const response = await axios.get(`http://localhost:5050/videos/${currentVideoId}`);
                setVideoDetails(response.data[0]);
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };

        fetchVideoDetails();
    }, [props.videoId]);

    return (
        <section className='mainInfo__items'>
            <div>
                {videoDetails && (
                    <>
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
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default VideoDetails;
