
import './AllVideos.scss';
import Hero from '../Hero/Hero'
import MainInfo from '../MainInfo/MainInfo';

function AllVideos({avatar}) {
    return (
        <>
            <Hero/>
            <MainInfo avatar={avatar}/>
        </>
    );
}
export default AllVideos;
