import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';

class Nav extends Component {

    render() {
        const styles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '36px',
                height: '30px',
                right: '36px',
                top: '36px'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmCrossButton: {
                height: '25px',
                width: '100px'
            },
            bmCross: {
                background: '#000'
            },
            bmMenu: {
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em',
                height: '20vh',
                background: '#ccc',
                border: '1px solid #000'
            },
            bmItemList: {
                color: '#b8b7ad',
                textAlign: 'right'
            }
        }

        return (
                <Menu right noOverlay styles={styles} width={250}>
                    <a id="find" className="menu-item" href="/find">Find Opportunities</a>
                    <a id="post" className="menu-item" href="/post">Post Opportunities</a>
                    <a id="resources" className="menu-item" href="/resources">Resources</a>
                </Menu>
        );
    }
}

export default Nav;
