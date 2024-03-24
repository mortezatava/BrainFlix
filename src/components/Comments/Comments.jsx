import './Comments.scss'
import Comment from "../Comment/Comment"
import avatar from '../../assets/Images/Mohan-muruge.jpg'
import add_comment from '../../assets/Icons/add_comment.svg'
function Comments(props) {
    return (
        <>
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
            </div>
            <div className='comments-list'>
            </div>
            {props.selectedVideoComments?.comments?.map((commentDetail, index) =>
                <Comment key={index} comment={commentDetail} />)}
        </>
    )
}
export default Comments
