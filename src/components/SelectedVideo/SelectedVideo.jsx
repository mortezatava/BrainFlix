import VideoDetails from "../VideoDetails/VideoDetails"
import Comments from '../Comments/Comments'
import { useState } from "react"
import { useParams } from "react-router-dom";

function SelectedVideo() {
    const [selectedVideoComments, setSelectedVideoComments] = useState([]);
    const { videoId } = useParams();
    console.log(videoId)
    return (
        <>
            <VideoDetails videoId={videoId} setSelectedVideoComments={setSelectedVideoComments} />
            <Comments videoId={videoId} selectedVideoComments={selectedVideoComments} />
        </>

    )
}

export default SelectedVideo
