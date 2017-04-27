import React, {Component} from 'react';
import '../stylesheets/reset.css';
import '../stylesheets/App.css';
import {browserHistory} from 'react-router';

import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";

class App extends Component {

  constructor() {
      super();
      this.postUser = this.postUser.bind(this);
      this.setUser = this.setUser.bind(this);
      this.state = {
          username: ''
      };
  }

  setUser(user) {
    console.log('in setUser', user);
    this.setState(user);
    browserHistory.push('/profile');
  }


  postUser(user) {
    console.log('in postUser');
    console.log('user: ', user);

    axios({
      method: 'post',
      url: 'https://arcane-hollows-70832.herokuapp.com/api/user/',
      auth: {
        username: 'admin',
        password: 'mypassword'
      },
      data: user
    })
    .then((response) => {
        console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

    render() {

      const childWithProp = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {
          setUser: this.setUser,
          postUser: this.postUser,
          username: this.state.username
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
