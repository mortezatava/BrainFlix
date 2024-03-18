
import './UploadPage.scss';
import upload from '../assets/Images/Upload-video-preview.jpg';
import { useState } from 'react';

function UploadPage() {
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDescription, setVideoDescription] = useState("");

    const handleVideoTitle = (event) => {
        setVideoTitle(event.target.value);
    };

    const handleDescription = (event) => {
        setVideoDescription(event.target.value);
    };

    const isVideoTitleValid = (videoTitle) => {
        if (typeof videoTitle === 'string' && videoTitle.trim().length >= 5 && videoTitle.trim().length <= 30) {
            return true;
        } else {
            alert("Please re-enter the video title. It should be between 5 and 30 characters.");
            return false;
        }
    };

    const isVideoDescriptionValid = (videoDescription) => {
        if (typeof videoDescription === 'string' && videoDescription.trim().length >= 10 && videoDescription.trim().length <= 150) {
            return true;
        } else {
            alert("Please re-enter the video description. It should be between 10 and 150 characters.");
            return false;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isVideoTitleValid(videoTitle) && isVideoDescriptionValid(videoDescription)) {
            alert("Uploaded Successfully");
        } else {
            alert("Failed to upload");
        }
    };

    const handleCancel = (event) => {
        event.preventDefault();
        setVideoTitle("");
        setVideoDescription("");
    };

    return (
        <>
            <h1>Upload Video</h1>
            <h3>VIDEO THUMBNAIL</h3>
            <img src={upload} alt='video-thumbnail' />
            <div>
                <form onSubmit={handleSubmit}>
                    <label className='video-title__label'>TITLE YOUR VIDEO</label>
                    <input value={videoTitle} onChange={handleVideoTitle} type='text' id='video-title' name='videoTitle' placeholder='Add a title to your video'></input>
                    <label className='video-description__label'>ADD A VIDEO DESCRIPTION</label>
                    <input value={videoDescription} onChange={handleDescription} type='text' id='video-description' name='videoDescription' placeholder='Add a description to your video'></input>
                    <button className='submit' type='submit'>PUBLISH</button>
                    <button className='cancel' type='button' onClick={handleCancel}>CANCEL</button>
                </form>
            </div>
        </>
    );
}
export default UploadPage;
