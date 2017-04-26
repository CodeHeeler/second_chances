import React, {Component} from 'react';
import Nav from './Nav'
import logo from '../images/logo.svg'

class Header extends Component {

    render() {

      const styles = {
        headerBar: {
          height: '15vh',
          backgroundColor: '#ccc',
          display: 'flex',
          alignItems: 'center'
        },
        mainTitle: {
          textTransform: 'uppercase',
          fontSize: '1.5rem'
        },
        smallLogo: {
          width: '50px',
          margin: '10px'
        }
      }

        return (
            <div style={styles.headerBar}>
                <img style={styles.smallLogo} src={logo} alt='second chances'/>
                <h1 style={styles.mainTitle}>second chances</h1>
                <Nav />
            </div>
        );
    }
}

export default Header;
