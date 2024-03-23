import './Comment.scss'

function Comment(props) {
    return (
        <div className='commentsContainer'>
            <div className="comments-lowerContainer">
                <div className="comments__avatar avatar"></div>
                <h3 className="comments__name">{props.comment.name}</h3>
                <span className="comments__timestamp">{props.comment.formattedTime}</span>
            </div>
            <p className="comments__comment" >{props.comment.comment}</p>
        </div>
    )
}
export default Comment



