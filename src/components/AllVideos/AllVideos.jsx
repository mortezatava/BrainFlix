import { useEffect, useState } from "react";
import Video from "../Video/Video";
import axios from "axios";
import './AllVideos.scss'

function AllVideos() {
    const [nextVideos, setNextVideos] = useState(null);
    // const [nextVideos, setNextVideos] = useState([]);
    const [selectedVideoTitle, setSelectedVideoTitle] = useState("The Future of Artificial Intelligence");
    useEffect(() => {
        const fetchNextVideos = async () => {
            try {
                const response = await axios.get('http://localhost:5050/videos/');
                setNextVideos(response.data);
                console.log("allVideos data is here", response.data)
            } catch (error) {
                console.error('Error fetching next videos:', error);
            }
        };

        fetchNextVideos();
    }, []);

    function handleClick(videoTitle) {
        setSelectedVideoTitle(videoTitle);
    }

    const allVideos = nextVideos?.filter(nextVideo => selectedVideoTitle !== nextVideo.title);

    return (

        <section className="nextVideos mainInfo__items">
            <h4 className="nextVideos__title">Next Videos</h4>
            <ul>
                {allVideos?.map(video =>
                    <Video key={video.id} video={video} handleClick={handleClick} />
                )}
            </ul>
        </section>

    )
}

export default AllVideos
