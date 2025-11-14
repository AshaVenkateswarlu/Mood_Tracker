import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showErrorMsg: false,
    errorMsg: '',
    showpassword: false,
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  enterUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  enterPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  clickCheckbox = () => {
    this.setState(prev => ({showpassword: !prev.showpassword}))
  }

  formSubmit = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (res.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderUsername = () => {
    const {usernameInput} = this.state
    return (
      <div>
        <label htmlFor="username">USERNAME</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          onChange={this.enterUsername}
          id="username"
          value={usernameInput}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {passwordInput, showpassword} = this.state

    return (
      <div>
        <label htmlFor="password">PASSWORD</label>
        <br />
        <input
          type={showpassword ? 'text' : 'password'}
          placeholder="Password"
          onChange={this.enterPassword}
          id="password"
          value={passwordInput}
        />
      </div>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <div>
          <form onSubmit={this.formSubmit}>
            {this.renderUsername()}
            {this.renderPassword()}
            <div>
              <input type="checkbox" id="cb" onChange={this.clickCheckbox} />
              <label htmlFor="cb">Show Password</label>
            </div>
            <button type="submit">Login</button>
            {showErrorMsg && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
