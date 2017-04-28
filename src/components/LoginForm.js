import React, {Component} from 'react';
import BtnSubmit from './BtnSubmit';


class LoginForm extends Component {

  constructor() {
      super();
      this.loginUser = this.loginUser.bind(this);
  }

  loginUser(event, type) {
    event.preventDefault();
    console.log('in loginUser');
    const user = {
      username: this.loginusername.value,
      password: this.loginpassword.value,
    }
    let url = '';
    if (type==='login') {
      url='http://arcane-hollows-70832.herokuapp.com/api/user/login/';
  } else if (type==='create') {
      url='http://arcane-hollows-70832.herokuapp.com/api/user/';
  } else {
    event.preventDefault();
    return;
  };
    this.props.setUser(user, url);
  }

  hideError() {
    document.getElementById('errorMsg').innerText='';

  }

  render() {

    const styles = {
      inputForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      inputBox: {
        textAlign: 'center',
        border: '1px solid #ccc',
        padding: '10px',
        margin: '5px',
        width: '200px',
        fontSize: '1rem'
      },
      buttons: {
        marginTop: '10px'
      },
      invalid: {
        fontSize: '1.2rem',
        color: '#F00'
      }
    };

  return (
    <div>
      <h2>Login or Create an Account</h2>

      <form id="login-form" style={styles.inputForm} >
        <input style={styles.inputBox} onFocus={this.hideError} ref={(input) => this.loginusername = input} type="text" placeholder='username' required/>
        <input style={styles.inputBox} ref={(input) => this.loginpassword = input} type="password" placeholder='password' required/>
        <div style={styles.buttons}>
          <div style={styles.invalid} id='errorMsg'></div>
          <BtnSubmit type="submit" ref={(input) => this.loginForm = input} onClick={(e) => this.loginUser(e, 'login')}>Login Account</BtnSubmit>
          <BtnSubmit type="submit" ref={(input) => this.loginForm = input} onClick={(e) => this.loginUser(e, 'create')}>Create Account</BtnSubmit>
        </div>
      </form>
    </div>
  );
}

}

export default LoginForm;
