import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

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
        <li className="nav-items">Reports</li>
        <li>
          <button type="button" onClick={handleLogout} className="logoutbtn">
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}
export default withRouter(Header)
