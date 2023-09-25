import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="menu"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
    >
      {close => (
        <div>
          <button
            type="button"
            className="close"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="close-btn" />
          </button>
          <ul className="sm-container">
            <Link to="/">
              <li className="list-item">
                <AiFillHome className="home" />
                <p className="name">Home</p>
              </li>
            </Link>
            <Link to="/about">
              <li className="list-item">
                <BsInfoCircleFill className="about" />
                <p className="name">About</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)
export default Header
