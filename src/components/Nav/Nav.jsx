import './Nav.scss'
import uploadIcon from '../../assets/Icons/upload.svg'
import React from 'react'
import { Link } from 'react-router-dom'



function Nav({ avatar, logo, searchIcon }) {
  return (
    <div className='nav-container'>

      <img className="logo nav-container__items" src={logo} alt="logo" />

      <div className="searchAvatar-container">
        <div className='searchContainer nav-container__items'>
          <img src={searchIcon} alt="Search Icon" />
          <input className="search" type="text" placeholder='Search' />
        </div>
        <img className="avatar searchAvatar" src={avatar} alt="avatar" />
      </div>

      {/* <button className='button nav-container__items'  >
        <img src={uploadIcon} alt="uploadIcon" />
        <span className="button-text">UPLOAD</span>
      </button> */}
      <Link to="/uploadPage" className='button nav-container__items'>
        <img src={uploadIcon} alt="uploadIcon" />
        <span className="button-text">UPLOAD</span>
      </Link>

      <img className="avatar lowerAvatar" src={avatar} alt="avatar" />
    </div>

  )

}

export default Nav
