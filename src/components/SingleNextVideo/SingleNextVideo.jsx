function SingleNextVideo({videoImage, videoTitle, videoChannel}) {

    return (
        <div className='videoContainer'>
            <video className='videoContainer__items' controls poster={videoImage}>
                <source src="" type="" />
            </video>
            <div className='videoContainer__items'>
                <h4>
                    {videoTitle}
                </h4>
                <p>{videoChannel}</p>
            </div>
        </div>
    );
}
export default SingleNextVideo
