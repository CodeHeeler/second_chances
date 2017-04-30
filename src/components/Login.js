import React, {Component} from 'react';
import logo from '../images/reEntrylogo.png';
import LoginForm from './LoginForm';

class Login extends Component {

  render() {
    const styles = {
        headerContainer: {
          backgroundColor: '#D9EAF5'
        },
        loginContainer: {
            textAlign: 'center',
            backgroundColor: '#ccc',
            margin: '20px auto',
            padding: '20px'
        },
        logoImg: {
          maxWidth: '300px',
          padding: '30px',
        },
        tagline: {
          backgroundColor: '#083c5d',
          color: '#d9b310',
          fontSize: '2rem',
          paddingTop: '20px',
          fontStyle: 'italic'
        }
      }

    return (
      <div>
        <header style={styles.headerContainer}>
          <img style={styles.logoImg} src={logo} alt='reEntry' />
          <h1 style={styles.tagline}>Resources for formerly incarcerated people</h1>
        </header>
        <div style={styles.loginContainer}>
          <LoginForm setUser={this.props.setUser} />
        </div>

      </div>
    );
  }
}

export default Login;
