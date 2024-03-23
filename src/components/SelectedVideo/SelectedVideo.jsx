import VideoDetails from "../VideoDetails/VideoDetails"
import { useParams } from "react-router-dom";

function SelectedVideo() {
    const { videoId } = useParams();
    return (
        <>
            <VideoDetails videoId={videoId} />
        </>
    )
}
export default SelectedVideo
