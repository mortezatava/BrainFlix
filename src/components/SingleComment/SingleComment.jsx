import './SingleComment.scss';

function SingleComment({ name, comment, avatar, formattedDate }) {
    const postedDate = new Date(Number(formattedDate));
    const formattedTime = postedDate.toLocaleString('en-us', {year:"numeric", month:"short", day:"numeric"});
    return (
        <div className='commentsContainer'>
            <div className="comments-lowerContainer">
                <div className="comments__avatar avatar">{avatar}</div>
                <h3 className="comments__name">{name}</h3>
                <span className="comments__timestamp">{formattedTime}</span>

            </div>
            <p className="comments__comment" >{comment}</p>
        </div>
    )
}
export default SingleComment;
