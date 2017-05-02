import React, {Component} from 'react';
import Header from './Header';
import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm';
import SkillsForm from './SkillsForm';
import SkillsData from './SkillsData';
import HeaderBar from './HeaderBar';

import axios from 'axios';

class Profile extends Component {

  constructor() {
    super();
    this.getProfile = this.getProfile.bind(this);
    // this.getUserSkills = this.getUserSkills.bind(this);
    this.getSkills = this.getSkills.bind(this);
    this.getAllSkills = this.getAllSkills.bind(this);
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
      },
      skills: null,
      allSkills: []
      }
  }

  componentDidMount() {
    this.getProfile();
    // this.getUserSkills();
    this.getSkills();
    this.getAllSkills();
  }

  getProfile() {
    console.log('in getProfile');
    let stuff = {
        method: 'get',
        url: `${this.props.baseurl}/api/user_profile/${this.props.userid}/`,
        // url: `${this.props.baseurl}/api/user_profile/1/`,
    };

    axios(stuff).then((response) => {
        let profile = {profile: response.data};
        this.setState(profile);
        this.showProfileForm();
    }).catch(function(error) {
        console.log(error);
    });
  }

  getAllSkills() {
    console.log('in getAllSkills');
    let stuff = {
        method: 'get',
        url: `${this.props.baseurl}/api/skills`,
    };
    axios(stuff).then((response) => {
      console.log('skill response: ',response);
      let allSkills = {allSkills: response.data.results};
      console.log('allSkills: ', allSkills);
      this.setState(allSkills);

    }).catch(function(error) {
        console.log(error);
    });
  }

  getSkills() {
    console.log('in getSkills');
    let stuff = {
        method: 'get',
        // url: `${this.props.baseurl}/api/providedskill/1`,
        url: `${this.props.baseurl}/api/providedskill/${this.props.userid}`,
        // url: `${this.props.baseurl}/api/skills`,
    };
    axios(stuff).then((response) => {
      console.log('skill response: ',response);
      let skillsObj = response.data.results;
      let skillsArr = [];
      let skills = {};
      for (let i in skillsObj) {
        if (skillsObj.hasOwnProperty(i)){
          skillsArr.push(skillsObj[i].skill_string);
          console.log('skillsArr ', skillsArr);
          skills = {skills: skillsArr};
        };
      };
        this.setState(skills);
        this.showSkillsForm();
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

  showSkillsForm() {
    if (this.state.skills !== null) {
      return (
        <SkillsData baseurl={this.props.baseurl} userid={this.props.userid} skills={this.state.skills} />
      )
    } else {
      return (
        <SkillsForm baseurl={this.props.baseurl} userid={this.props.userid} allSkills={this.state.allSkills} />
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
            },
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

                    <div>
                      <HeaderBar innerText='Skills' />
                      <ul style={styles.skillsContainer}>
                        {this.showSkillsForm()}
                      </ul>
                    </div>

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
