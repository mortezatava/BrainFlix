import Nav from './components/Nav/Nav';
import searchIcon from './assets/Icons/search.svg'
import uploadIcon from './assets/Icons/upload.svg'
import avatar from './assets/Images/Mohan-muruge.jpg'
import logo from './assets/Logo/BrainFlix-logo.svg'
import './App.scss';
import HomePage from './components/HomePage/HomePage';
import UploadPage from './UploadPage/UploadPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav avatar={avatar} logo={logo} searchIcon={searchIcon} uploadIcon={uploadIcon} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/uploadPage" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
