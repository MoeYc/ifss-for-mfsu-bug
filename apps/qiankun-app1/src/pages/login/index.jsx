import React, { Component } from 'react';

class LoginPage extends Component {
  state = {};

  componentDidMount() {
    debugger;
    window.history.pushState(null, '', '/login?a=111');
  }

  render() {
    console.log('app1 -> login render');
    return <div>app1 im login loading</div>;
  }
}
export default LoginPage;
