import { Link } from "react-router-dom"
import SingleNextVideo from "../SingleNextVideo/SingleNextVideo"

function Video(props) {
    return (
        <Link to={`/videos/${props.video.id}`} >
            <li key={props.video.id} onClick={e => props.handleClick(props.video.title)}>
                <SingleNextVideo videoImage={props.video.image} videoTitle={props.video.title} videoChannel={props.video.channel} />
            </li>
        </Link>
    )
}

export default Video
