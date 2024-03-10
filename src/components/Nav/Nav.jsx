import './Nav.scss'
import uploadIcon from '../../assets/Icons/upload.svg'

function Nav({ avatar, logo, searchIcon }) {
  return (
    <div className='nav-container'>
      <img class-name="logo nav-container__items" src={logo} alt="logo" />
      <div className='searchContainer nav-container__items'>
        <img src= {searchIcon} alt="Search Icon" />
        <input className="search" type="text" placeholder=' Search' />
      </div>

      <button className='button nav-container__items'  >
      <img src={uploadIcon} alt="uploadIcon" />
        UPLOAD</button>

      <img className="avatar" src={avatar} alt="avatar" />
    </div>

  )

}

export default Nav
