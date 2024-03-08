import './Comments.scss'

function Comments({avatar}) {
    return (
        <>
        <div className='commentsContainer'>

                <h3>3 Comments</h3>
                <img className="avatar" src={avatar} alt="avatar" />
                <label for="comment" >Join the conversation</label>

                <textarea name="comment">
                    Add a new comment
                </textarea>

                <div >
                    <button type="submit" >Comment</button>
                </div>

            </div>
            <div id="commentsContainer">
                <div>
                    <h3 className='name'>Noah Duncan</h3>
                    <h4 className='timestamp'> 1691731062000 </h4>
                    <p className='comment'>Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!</p>

                </div>
                <div>
                    <h3 className='name'>Terry Wong</h3>
                    <h4 className='timestamp'>1691644662000</h4>
                    <p className='comment'>This video is a fantastic overview of the AI landscape. Your ability to distill complex concepts into digestible content is impressive. Can't wait for more tech insights!</p>

                </div>
                <div>
                    <h3 className='name'>Janice Rodriguez</h3>
                    <h4 className='timestamp'>1691558262000</h4>
                    <p className='comment'>Your channel is my go-to source for staying updated on tech trends. The exploration of AI's future implications is both informative and exciting. Kudos on another excellent video!</p>

                </div>
            </div>

        </>
    )
}
export default Comments
