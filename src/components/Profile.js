import React, {Component} from 'react';
import Header from './Header';
import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm';
import HeaderBar from './HeaderBar';

import axios from 'axios';

class Profile extends Component {

  constructor() {
    super();
    this.setProfile = this.setProfile.bind(this);
    this.state = {
      profile: {
        firstname: null,
        lastname: null,
        email: null,
        bio: null
      }
    }
  }

  setProfile(profile) {
    console.log('in setProfile');

    axios({
      method: 'put',
      url: 'http://arcane-hollows-70832.herokuapp.com/api/user_profile/',
      auth: {
        username: 'admin',
        password: 'mypasword'
      },
      data: profile
    }).then((response) => {
      console.log('success!', response);
      this.setState(profile);
    }).catch(function(error) {
      console.log(error);
    });
  }

  showProfileForm() {
    if (this.state.profile.firstname !== null) {
      return (
        <ProfileData currProfile={this.state.profile}/>
      )
    } else {
      return (
        <ProfileForm setProfile={this.setProfile} userid={this.props.userid} />
      )
    }
  }

    render() {

        const styles = {

            profileBody: {
                backgroundColor: '#ccc'
            },
            skillsContainer: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '20px 0'
            },
            skill: {
                backgroundColor: '#ccc',
                borderRadius: '10px',
                padding: '5px 10px',
                margin: '2px'
            },
            opportunities: {
                textAlign: 'left'
            },
            opportunity: {
                borderBottom: '1px solid #ccc',
                padding: '5px'
            }
        }

        return (
            <div>
                <Header/>
                <div style={styles.profileBody}>
                    <div>
                        <HeaderBar innerText='Profile Info' />
                        <div>
                          {this.showProfileForm()}
                        </div>
                    </div>

                    <HeaderBar innerText='Skills' />
                    <ul style={styles.skillsContainer}>
                        <li style={styles.skill}>Painting</li>
                        <li style={styles.skill}>Drawing</li>
                        <li style={styles.skill}>Needlepoint</li>
                        <li style={styles.skill}>Singing</li>
                        <li style={styles.skill}>Dancing</li>
                        <li style={styles.skill}>emcee</li>
                        <li style={styles.skill}>Popping Bottles</li>
                    </ul>

                    <HeaderBar innerText='Opportunities' />
                    <ol style={styles.opportunities}>
                        <li style={styles.opportunity}>This is an opportunity.</li>
                        <li style={styles.opportunity}>This is an opportunity.</li>
                        <li style={styles.opportunity}>This is an opportunity.</li>
                        <li style={styles.opportunity}>This is an opportunity.</li>
                        <li style={styles.opportunity}>This is an opportunity.</li>
                        <li style={styles.opportunity}>This is an opportunity.</li>
                    </ol>

                </div>

            </div>
        );
    }
}

export default Profile;
