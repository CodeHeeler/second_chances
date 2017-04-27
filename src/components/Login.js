import React, {Component} from 'react';
import DjangoCSRFToken from 'django-react-csrftoken'

import MainLogo from './MainLogo';

class Login extends Component {

  constructor() {
      super();
      this.makeUser = this.makeUser.bind(this);
      this.loginUser = this.loginUser.bind(this);

  }

  makeUser(event) {
    event.preventDefault();
    console.log('in makeUser', event);
    const user = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
    }
    this.props.postUser(user);

  }

  loginUser(event) {
    event.preventDefault();
    console.log('in loginUser', event);
    const user = {
      username: this.loginusername.value,
      password: this.loginpassword.value,
    }
    this.props.setUser(user);
  }

  render() {
    const styles = {
        loginContainer: {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around'
        },
        loginBox: {
          border: '1px solid #000',
          width: '45%',
          padding: '5px',
          margin: '10px 0',
        },
        inputForm: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        },
        inputBox: {
          textAlign: 'center',
          border: '1px solid #ccc',
          padding: '5px',
          margin: '5px',
        }
      }


    return (
      <div>
      <MainLogo />
      <div style={styles.loginContainer}>

          <div style={styles.loginBox}>
              <h2>Create an Account</h2>
              <form id='new-user-form' style={styles.inputForm} ref={(input) => this.newUserForm = input} onSubmit={(e) => this.makeUser(e)} type='submit'>
                  <div>
                    <DjangoCSRFToken/>
                    <input style={styles.inputBox} ref={(input) => this.username = input} type="text" placeholder='enter your full name'/>
                    <input style={styles.inputBox} ref={(input) => this.email = input} type="email" placeholder='enter an email address'/>
                    <input style={styles.inputBox} ref={(input) => this.password = input} type="password" placeholder='create a password'/>
                  </div>
                  <button type="submit" className="btn-submit">Create my New Account</button>
              </form>
          </div>

          <div style={styles.loginBox}>
              <h2>Welcome Back</h2>

              <form id="login-form" style={styles.inputForm} ref={(input) => this.loginForm = input} onSubmit={(e) => this.loginUser(e)}>
                  <div>
                      <input style={styles.inputBox} ref={(input) => this.loginusername = input} type="text" placeholder='Username' required/>
                      <input style={styles.inputBox} ref={(input) => this.loginpassword = input} type="password" placeholder='Password' required/>
                  </div>
                  <button type="submit" className="btn-submit">Login Existing Account</button>

              </form>
          </div>
      </div>
      </div>
    );
  }
}

export default Login;
