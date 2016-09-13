import React from 'react';
import ReactROM from 'react-dom';
import TextInput from '../components/TextInput';
import className from 'classnames';

const loginButton = className({
  'btn': true,
  'btn-primary': true
});

const USERNAME_ID = 'username';
const PASSWORD_ID = 'password';

class Login extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    let account = Object.assign({},
      {username: e.target[USERNAME_ID].value},
      {password: e.target[PASSWORD_ID].value});

    console.log(account);
  }

  render() {
    return(
      <div>
        <form name="LoginForm" onSubmit={(e) => this.handleSubmit(e)}>
          <h4>Login Form</h4>
          <TextInput placeholder="Username" id={USERNAME_ID} />
          <TextInput placeholder="Password" id={PASSWORD_ID} />
          <button className={loginButton} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
