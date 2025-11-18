import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-con">
      <div className="notfound-content">
        <img
          src="https://res.cloudinary.com/di4cgeiaz/image/upload/Group_7520_bcx93a.png"
          alt="notfound"
        />
        <h1>Page Not Found</h1>
        <p>We are Sorry, the page you requested could not be found.</p>
      </div>
    </div>
  </>
)
export default NotFound
