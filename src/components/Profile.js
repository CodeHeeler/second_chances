import React, {Component} from 'react';
import Header from './Header';
import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm';
import HeaderBar from './HeaderBar';

import axios from 'axios';

class Profile extends Component {

  constructor() {
    super();
    this.getProfile = this.getProfile.bind(this);
    this.state = {
      // profile: {
      //   firstname: 'Vallyre',
      //   lastname: 'Hyers',
      //   email: 'val@myspace.com',
      //   bio: 'This is my bio.  I am really cool and everyone wants to be like me cause I can do nearly anything.'
      // }
      profile: {
        firstname: null,
        lastname: null,
        email: null,
        bio: null
      }
    }
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile() {
    console.log('in getProfile');
    let stuff = {
        method: 'get',
        url: `${this.props.baseurl}/api/user_profile/${this.props.userid}/`,
    };

    axios(stuff).then((response) => {
        let profile = {profile: response.data};
        console.log(profile);
        this.setState(profile);
        this.showProfileForm();
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

        <ProfileForm getProfile={this.getProfile} baseurl={this.props.baseurl} userid={this.props.userid} />
      )
    }
  }

  getSkills() {
    console.log('in getSkills');
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
                backgroundColor: '#083c5d',
                borderRadius: '10px',
                padding: '5px 10px',
                margin: '2px',
                color: '#fff'
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
