import './Comments.scss'

import SingleComment from '../SingleComment/SingleComment'


function Comments({comments}) {
    return (
        <>
            <textarea name="comment">
                Add a new comment
            </textarea>

            <div >
                <button type="submit" >Comment</button>
            </div>
            {comments.map(commentDetail =>
                    <SingleComment key={commentDetail.id} name={commentDetail.name} comment={commentDetail.comment} avatar="" timePosted={commentDetail.timePosted}/>
                )
            }
        </>
    )
}
export default Comments
