function SingleComment({name, comment, timePosted, avatar}) {
    return (
        <div className='commentsContainer'>
            <h3>{name}</h3>
            <span>{timePosted}</span>
            <div className="avatar" />
            <label for="comment" >{comment}</label>
        </div>
    )
}
export default SingleComment;
