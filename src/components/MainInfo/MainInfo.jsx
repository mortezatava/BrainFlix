import videoDetails from '../../assets/Data/video-details.json'
import nextVideos from '../../assets/Data/videos.json'


import './MainInfo.scss'
import Comments from '../Comments/Comments'
import NextVideos from '../NextVideos/NextVideos'

function MainInfo({avatar, handleSelect, selectedVideo}) {

    const selectedVideoDetails = videoDetails.find(videoDetail => videoDetail.title === selectedVideo);

    return (
        <div className='mainInfo'>
                <section className='mainInfo__items'>
                    <div>
                        <h1 className='mainInfo-title'>
                            {selectedVideo}
                        </h1>
                        <div>
                            <h3 className='mainInfo-channel'>{selectedVideoDetails.channel}</h3>
                        </div>
                        <p className='mainInfo-description'>
                            {selectedVideoDetails.description}
                        </p>
                    </div>
                    <Comments comments={selectedVideoDetails.comments}/>

                </section >
                <NextVideos nextVideos={nextVideos} selectedVideoTitle={selectedVideo} onSelect={handleSelect}/>
            </div>

)
}

export default MainInfo
