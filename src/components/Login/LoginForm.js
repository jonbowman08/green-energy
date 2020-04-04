import React from "react";
import "./index.scss";

class LoginForm extends React.Component {
  state = {
    email: this.props.email,
    rememberMe: this.props.rememberMe ? this.props.rememberMe : false,
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onRememberChange = (event) => {
    this.setState({ rememberMe: event.target.checked });
  };

  onSignInClick = (email, rememberMe) => {
    this.props.onSignInClick(email, rememberMe);
  };

  render() {
    const { email, rememberMe } = this.state;
    return (
      <div className="login-window">
        <img
          src="https://green.cdn.energy/branding/logo-r.svg"
          height="40px"
          alt="Green.energy logo"
        />
        <h1 className="login-header">Example login screen</h1>
        <h2 className="login-subheader">Getting started with green</h2>
        <div className="login-field">
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            id="email"
            className="login-input"
            value={email}
            onChange={this.onEmailChange}
          />
        </div>
        <div className="login-remember">
          <input
            type="checkbox"
            className="css-checkbox"
            id="remember"
            value={rememberMe}
            onChange={this.onRememberChange}
          />
          <label className="css-label" htmlFor="remember">
            Remember me on this device
          </label>
        </div>
        <button
          className="login-signin"
          onClick={() => {
            this.onSignInClick(email, rememberMe);
          }}
        >
          Sign In
        </button>
      </div>
    );
  }
}

export default LoginForm;
