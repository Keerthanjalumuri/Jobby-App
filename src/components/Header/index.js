import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ul className="nav-header">
        <li>
          <Link to="/" className="link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="nav-logo"
            />
          </Link>
        </li>
        <li>
          <ul className="links-container">
            <Link to="/" className="link-item">
              <li className="nav-heading">Home</li>
            </Link>
            <Link to="/jobs" className="link-item">
              <li className="nav-heading">Jobs</li>
            </Link>
          </ul>
        </li>
        <li>
          <button
            type="button"
            className="logout-btn"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    )
  }
}

export default withRouter(Header)
