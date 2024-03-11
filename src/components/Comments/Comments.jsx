import './Comments.scss'
import add_comment from '../../assets/Icons/add_comment.svg'
import SingleComment from '../SingleComment/SingleComment'


function Comments({ comments, avatar }) {

    return (
        <>
            <h4 className='comments-form__number'>3 Comments</h4>
            <h4 className='comments-form__title'>JOINT THE CONVERSATION</h4>
            <div className='commentsForm-container'>
                <img className="avatar" src={avatar} alt="avatar" />
                <textarea name="comment" className='comments-form__input'>
                    Add a new comment
                </textarea>

                <div className='forms_submit' >
                    <button type="submit" className='submit-button' >
                        <img src={add_comment} alt="add-comment" />
                        <span className="button-text">Comment</span>
                    </button>
                </div>
            </div>
            {comments.map(commentDetail =>
                <SingleComment key={commentDetail.id} name={commentDetail.name} comment={commentDetail.comment} avatar="" formattedDate={commentDetail.formattedDate} />
            )
            }
        </>
    )
}
export default Comments
