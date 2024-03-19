
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
            window.location.href = "/";
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
            <h1 className='upload-heading'>Upload Video</h1>
            <div className='upload-image__container' id='image-container'>
                <h3 className='thumbnail-heading'>VIDEO THUMBNAIL</h3>
                <img className='upload-image' src={upload} alt='video-thumbnail' />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-upper-container' id='form-upper__container'>
                        <label className='video-title__label form-items'>TITLE YOUR VIDEO</label>
                        <input className='form-items' value={videoTitle} onChange={handleVideoTitle} type='text' id='video-title' name='videoTitle' placeholder='Add a title to your video'></input>
                        <label className='video-description__label form-items'>ADD A VIDEO DESCRIPTION</label>
                        <input className='form-items' value={videoDescription} onChange={handleDescription} type='text' id='video-description' name='videoDescription' placeholder='Add a description to your video'></input>
                    </div>
                    <div className='buttons'>
                        <button className='submit form-items' type='submit'>PUBLISH</button>
                        <button className='cancel form-items' type='button' onClick={handleCancel}>CANCEL</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default UploadPage;
