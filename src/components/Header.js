import React, {Component} from 'react';
import Nav from './Nav'
import logo from '../images/reEntrylogo_h.png'

class Header extends Component {

    render() {

      const styles = {
        headerBar: {
          backgroundColor: '#c1dceb'
        },
        smallLogo: {
          width: '50%',
          paddingTop: '10px'

        }
      }

        return (
            <div style={styles.headerBar}>
                <img style={styles.smallLogo} src={logo} alt='second chances'/>
                <Nav />
            </div>
        );
    }
}

export default Header;
