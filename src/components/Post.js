import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import BtnSubmit from './BtnSubmit';
import axios from 'axios';

class Post extends Component {

  constructor() {
    super();
    this.createJob = this.createJob.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
    this.state = {
      owner: localStorage.getItem("userID"),
      title: '',
      description: ''
    };
  }

  createJob(event) {
    event.preventDefault();
    console.log('in createJob');
    const job = {
      owner: this.state.owner,
      title: this.state.title,
      description: this.state.description
    };
    this.postJob(job);
  }

  postJob(job) {
    console.log('in postJob');

    axios({
      method: 'POST',
      url: `${this.props.baseurl}/api/job/`,
      data: job
    }).then((response) => {
      console.log('success! job posted', response);
      this.displayMessage();
    }).catch(function(error) {
      console.log(error);
    })
  }

  handleChange = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  displayMessage() {
    document.getElementById('message').innerHTML = '';
    document.getElementById('message').innerHTML = '--Job Posted! Post another?';
    document.getElementById("job-form").reset();
  }

    render() {

      const styles = {
          postForm: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#eee'
          },
          hintStyle: {
            width: '100%',
            textAlign: 'center',
          },
          underlineFocusStyle: {
            borderColor: '#d9b310',
          }
        }

        return (
            <div>
                  <form id='job-form' style={styles.postForm} onSubmit={this.createJob}>
                      <p style={styles.message} id='message'>Tell us about your job</p>
                          <TextField
                            type="text"
                            name='title'
                            id='title'
                            value={this.state.title}
                            onFocus={this.hideError}
                            onChange={this.handleChange}
                            hintText='job title'
                            hintStyle={styles.hintStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineFocusStyle}
                            required/>
                          <TextField
                            type="text"
                            name='description'
                            value={this.state.description}
                            onFocus={this.hideError}
                            onChange={this.handleChange}
                            multiLine={true}
                            rows={1}
                            hintText='describe this job'
                            hintStyle={styles.hintStyle}
                            underlineStyle={styles.underlineStyle}
                            underlineFocusStyle={styles.underlineFocusStyle}
                            required/>
                          <BtnSubmit type="submit" onClick={(e) => this.createJob(e)}>Create my Job</BtnSubmit>
                  </form>
            </div>
        );
    }
}

export default Post;
