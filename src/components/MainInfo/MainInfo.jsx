import './MainInfo.scss'
import Comments from '../Comments/Comments'
import NextVideos from '../NextVideos/NextVideos'

function MainInfo() {
    return (
        <div className='mainInfo'>
                <section className='mainInfo__items'>
                    <div>
                        <h1>
                            The Future of Artificial Intelligence
                        </h1>
                        <div>
                            <h3> Aiden Thompson </h3>
                        </div>
                        <p>
                            Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.
                        </p>
                    </div>
                    <Comments/>

                </section >
                <NextVideos />
            </div>

)
}

export default MainInfo
