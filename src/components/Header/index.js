import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'

import './index.css'

const Header = props => {
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="nav-con">
      <h1 className="title">Daily Mood Tracker</h1>
      <ul className="nav-menu">
        <Link to="/" className="nav-item">
          <li className="nav-items">Home</li>
        </Link>
        <Link to="/reports" className="nav-item">
          <li className="nav-items">Reports</li>
        </Link>
        <li>
          <button type="button" onClick={handleLogout} className="logoutbtn">
            Logout
          </button>
        </li>
      </ul>

      <div className="nav-con-sm">
        <Popup
          modal
          trigger={
            <button aria-label="Open menu" className="hamburger" type="button">
              <GiHamburgerMenu size={24} />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div>
              <div className="pop-head">
                <h2 className="title">Daily Mood Tracker</h2>
                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="close-btn"
                  type="button"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
              <div>
                <ul className="nav-sm-menu">
                  <Link to="/" className="nav-item">
                    <li className="nav-items-sm">Home</li>
                  </Link>
                  <Link to="/reports" className="nav-item">
                    <li className="nav-items-sm">Reports</li>
                  </Link>
                </ul>
                <button
                  className="logoutbtn-sm"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}
export default withRouter(Header)
