import React, {Component} from 'react';
import MainLogo from './MainLogo';

class Login extends Component {

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
              <form id='new-user-form' style={styles.inputForm}type='submit'>
                  <div>
                    <input style={styles.inputBox}type="text" placeholder='enter your full name'/>
                    <input style={styles.inputBox}type="email" placeholder='enter an email address'/>
                    <input style={styles.inputBox}type="password" placeholder='create a password'/>
                  </div>
                  <button type="submit" className="btn-submit">New Account with Email</button>
                  <button type="submit" className="btn-submit">New Account with Facebook</button>
                  <button type="submit" className="btn-submit">New Account with Google</button>

              </form>
          </div>

          <div style={styles.loginBox}>
              <h2>Welcome Back</h2>

              <form id="login-form" style={styles.inputForm}>
                  <div>
                      <input style={styles.inputBox}type="email" placeholder='email address' required/>
                      <input style={styles.inputBox}type="password" placeholder='Password' required/>
                  </div>
                  <button type="submit" className="btn-submit">Login Email Account</button>
                  <button type="submit" className="btn-submit">Login Facebook Account</button>
                  <button type="submit" className="btn-submit">Login Google Account</button>

              </form>
          </div>
      </div>
      </div>
    );
  }
}

export default Login;
