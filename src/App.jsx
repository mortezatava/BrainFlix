import React from 'react';
import Nav from './components/Nav/Nav';

import AllVideos from './components/AllVideos/AllVideos';

import searchIcon from './assets/Icons/search.svg'
import uploadIcon from './assets/Icons/upload.svg'
import avatar from './assets/Images/Mohan-muruge.jpg'
import logo from './assets/Logo/BrainFlix-logo.svg'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav avatar={avatar} logo={logo} searchIcon={searchIcon} uploadIcon={uploadIcon} />
      <AllVideos avatar={avatar} />
    </div>
  );
}
export default App;
