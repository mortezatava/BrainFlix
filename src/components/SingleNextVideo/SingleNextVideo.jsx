import './SingleNextVideo.scss'

function SingleNextVideo({videoImage, videoTitle, videoChannel}) {

    return (
        <div className='videoContainer'>
            <video className='videoContainer__items side-videos' controls poster={videoImage}>
                <source src="" type="" />
            </video>
            <div className='videoContainer__items nextVideo-texts-container'>
                <h4 className='next-video__title'>
                    {videoTitle}
                </h4>
                <p className='next-video-info'>{videoChannel}</p>
            </div>
        </div>
    );
}
export default SingleNextVideo
