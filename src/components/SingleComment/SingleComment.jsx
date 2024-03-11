import './SingleComment.scss';

function SingleComment({ name, comment, timePosted, avatar }) {
    return (
        <div className='commentsContainer'>
            <div className="comments-lowerContainer">
                <h3 className="comments__name">{name}</h3>
                <span className="comments__timestamp">{timePosted}</span>
                <div className="comments__avatar avatar" />
            </div>
            <p className="comments__comment" >{comment}</p>
        </div>
    )
}
export default SingleComment;
