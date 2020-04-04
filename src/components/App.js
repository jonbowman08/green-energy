import React from "react";
import LoginForm from "./Login/LoginForm";
import "./App.scss";

class App extends React.Component {
  onSignInClick(email, rememberMe) {
    console.log(`Signed in: ${email} rememberMe ${rememberMe}`);
  }

  render() {
    return (
      <div className="ui-container">
        <LoginForm email="" onSignInClick={this.onSignInClick} />
      </div>
    );
  }
}

export default App;
