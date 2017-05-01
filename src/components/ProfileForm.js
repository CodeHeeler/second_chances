import React, {Component} from 'react';
import BtnSubmit from './BtnSubmit';

import axios from 'axios';


class ProfileForm extends Component {

    constructor() {
        super();
        this.createProfile = this.createProfile.bind(this);
        this.setProfile = this.setProfile.bind(this);
    }

    createProfile(event) {
      event.preventDefault();
        console.log('in createProfile');
        const profile = {
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            emailaddress: this.email.value,
            bio: this.bio.value,
          };
        console.log(profile);
        this.setProfile(profile);
    }

    setProfile(profile) {
      console.log('in setProfile');

      axios({
        method: 'PATCH',
        url: `${this.props.baseurl}/api/user_profile/${this.props.userid}/`,
        data: profile
      }).then((response) => {
        console.log('success!', response);
        let currProfile = response.data;
        console.log('current profile', currProfile);
        this.props.getProfile();
      }).catch(function(error) {
        console.log(error);
      });
    }

    render() {

        const styles = {
            profileForm: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            inputBox: {
                textAlign: 'center',
                border: '1px solid #ccc',
                padding: '10px',
                margin: '5px',
                fontSize: '1rem',
                minWidth: '46%'
            },
            textareaBox: {
                textAlign: 'center',
                border: '1px solid #ccc',
                padding: '10px',
                margin: '5px',
                fontSize: '1rem',
                width: '80%'
            }
        }

        return (
            <form id='profile-form' style={styles.profileForm}>
                <p>Tell us a little about yourself</p>
                <div>
                    <input style={styles.inputBox} ref={(input) => this.firstname = input} type="text" placeholder='first name' required/>
                    <input style={styles.inputBox} ref={(input) => this.lastname = input} type="text" placeholder='last name' required/>
                </div>
                <input style={styles.inputBox} ref={(input) => this.email = input} type="email" placeholder='email'/>
                <textarea style={styles.textareaBox} ref={(input) => this.bio = input} type='text' placeholder='Share your story'/>
                <BtnSubmit type="submit" ref={(input) => this.profileForm = input} onClick={(e) => this.createProfile(e)}>Make my Profile</BtnSubmit>
            </form>
        );
    }

}
export default ProfileForm;
