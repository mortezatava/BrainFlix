import VideoDetails from "../VideoDetails/VideoDetails"
import { useState } from "react"
import { useParams } from "react-router-dom";

function SelectedVideo() {
    const [setSelectedVideoComments] = useState([]);
    const { videoId } = useParams();
    // console.log(videoId)

    return (
        <>
            <VideoDetails videoId={videoId} setSelectedVideoComments={setSelectedVideoComments} />

        </>

    )
}

export default SelectedVideo
