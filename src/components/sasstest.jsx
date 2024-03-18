function Sasstest() {
    return
    <>
        <section className='mainInfo__items'>
            <div>
                <div className='hero'>
                    <video controls poster={videoDetails.image}>
                        <source src="" type="video/webm" />
                    </video>
                </div>
                <div className='mainInfo'>
                    <h1 className='mainInfo-title'>
                        {videoDetails.title}
                    </h1>
                    <div>
                        <h3 className='mainInfo-channel'>{videoDetails.channel}</h3>
                    </div>
                    <p className='mainInfo-description'>
                        {videoDetails.description}
                    </p>
                    <h4 className='comments-form__number'>3 Comments</h4>
            <h4 className='comments-form__title'>JOIN THE CONVERSATION</h4>
            <div className='commentsForm-container'>
                <img className="avatar" src={avatar} alt="avatar" />
                <textarea name="comment" className='comments-form__input' placeholder="Add a new comment">
                </textarea>

                <div className='forms_submit' >
                    <button type="submit" className='submit-button' >
                        <img src={add_comment} alt="add-comment" />
                        <span className="button-text">Comment</span>
                    </button>
                </div>
                <div className='comments-list'>

                </div>
                </div >
            </div>
            <div className='commentsContainer'>
            <div className="comments-lowerContainer">
                <div className="comments__avatar avatar">{props.comment.avatar}</div>
                <h3 className="comments__name">{props.comment.name}</h3>
                <span className="comments__timestamp">{props.comment.formattedTime}</span>
            </div>
            <p className="comments__comment" >{props.comment.comment}</p>
        </div>

        </section>
        <section className="nextVideos mainInfo__items">
            <h4 className="nextVideos__title">Next Videos</h4>
            <ul>
                {allVideos?.map(video =>
                    <Video key={video.id} video={video} handleClick={handleClick} />
                )}
            </ul>
        </section>
        <Link to={`/videos/${props.video.id}`} >
            <li key={props.video.id} onClick={e => props.handleClick(props.video.title)}>
                <SingleNextVideo videoImage={props.video.image} videoTitle={props.video.title} videoChannel={props.video.channel} />
            </li>
        </Link>

    </>
}

export default Sasstest
