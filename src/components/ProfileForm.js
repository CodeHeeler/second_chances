import React, {Component} from 'react';
import BtnSubmit from './BtnSubmit';
import DjangoCSRFToken from 'django-react-csrftoken'


class ProfileForm extends Component {

    constructor() {
        super();
        this.createProfile = this.createProfile.bind(this);
    }

    createProfile(event) {
      event.preventDefault();
        console.log('in createProfile');
        const profile = {
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            emailaddress: this.email.value,
            bio: this.bio.value,
            user: this.props.userid
          };
        console.log(profile);
        this.props.setProfile(profile);
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
                <DjangoCSRFToken/>
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
