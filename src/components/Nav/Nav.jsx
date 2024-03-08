import './Nav.scss'

function Nav({avatar, logo, uploadIcon, searchIcon}) {
    return (
        <div className='nav-container'>
        <img class-name="logo nav-container__items" src={logo} alt="logo" />
        <div>
        <img src={searchIcon} alt="Search Icon" />
        <input className="search nav-container__items" type="text" placeholder=' Search' />
        </div>

        <button className='button nav-container__items' src = {uploadIcon} >UPLOAD</button>
        <img className="avatar nav-container__items" src= {avatar} alt="avatar" />
      </div>
    )

}

export default Nav
