
import './NextVideos.scss'

import SingleNextVideo from "../SingleNextVideo/SingleNextVideo"


function NextVideos({nextVideos, selectedVideoTitle, onSelect}) {

    function handleClick(videoTitle) {
        onSelect(videoTitle)
    }

    const shownNextVideos = nextVideos.filter(nextVideo => selectedVideoTitle !== nextVideo.title);

    return (
        <section className="nextVideos mainInfo__items">
            <h3>Next Videos</h3>
            <ul>
                {shownNextVideos.map(nextVideo => 
                    <li key={nextVideo.id} onClick={e => handleClick(nextVideo.title)}>
                        <SingleNextVideo videoImage={nextVideo.image} videoTitle={nextVideo.title} videoChannel={nextVideo.channel} />
                    </li>
                )}
            </ul>
        </section>
    )
}
export default NextVideos
