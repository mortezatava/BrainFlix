import './Hero.scss'


function Hero({videoImage}) {
    return (
        <div className='hero'>
            <video controls poster={videoImage}>
                <source src="" type="video/webm" />
            </video>
        </div>
    )
}

export default Hero
