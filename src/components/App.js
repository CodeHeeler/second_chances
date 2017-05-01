import React, {Component} from 'react';
import '../stylesheets/reset.css';
import '../stylesheets/App.css';
import {browserHistory} from 'react-router';

import axios from 'axios';


class App extends Component {

  constructor() {
      super();
      this.setUser = this.setUser.bind(this);
      this.state = {
          username: '',
          userid: null,

          baseurl: 'http://arcane-hollows-70832.herokuapp.com'
      };
  }

  setUser(user, url) {
    console.log('in setUser');
    axios({
      method: 'post',
      url: url,
      auth: {
        username: 'admin',
        password: 'mypassword'
      },
      data: user
    }).then((response) => {
      console.log(response);
      let userid=response.data.id;
      this.setState({userid});
      this.setState(user);
      localStorage.setItem('userID', `${this.state.userid}`);
      localStorage.setItem('username', `${this.state.username}`);
      console.log('id: ', userid);
      console.log('user', user);
      browserHistory.push('/profile');
    })
    .catch(function(error) {
      console.log(error);
      if (error.response.status===401) {
        document.getElementById('errorMsg').innerHTML='<p style={styles.invalid}>--Invalid Login--</p>';
      } else {
        return;
      };
    });
    localStorage.getItem('userID');
    localStorage.getItem('username');
    this.setState(user);
  }

    render() {

      const childWithProp = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {
          setUser: this.setUser,
          username: this.state.username,
          userid: this.state.userid,
          email: this.state.email,
          baseurl: this.state.baseurl
        });
      });
        return (
              <main>
                {childWithProp}
              </main>
        );
    }
}

export default App;
