import React, {Component} from 'react';
import Header from './Header';
import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm';
import ChooseForm from './ChooseForm';
import ShowData from './ShowData';
import HeaderBar from './HeaderBar';

import axios from 'axios';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    // this.getSkills = this.getSkills.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      profile: {
        firstname: null,
        lastname: null,
        email: null,
        bio: null
      },
      userid: 1,
      // userid: this.props.userid,
      userskills: [],
      userlocations: null,
      allskills: [],
      alllocations: []
    }
  }

  componentDidMount() {
    this.getData('profile');
    this.getData('userskills');
    this.getData('userlocations');
    this.getData('alllocations');
    this.getData('allskills');
  }

  getData(type) {
    let url;
    if (type==='profile') {
      url=`${this.props.baseurl}/api/user_profile/${this.state.userid}/`;
    } else if (type === 'userskills') {
      url=`${this.props.baseurl}/api/providedskill/${this.state.userid}`;
    } else if (type === 'userlocations') {
      url=`${this.props.baseurl}/api/userlocation/${this.state.userid}`;
    } else if (type === 'alllocations') {
      url=`${this.props.baseurl}/api/location`;
    } else if (type === 'allskills') {
      url=`${this.props.baseurl}/api/skills`;
    }

    axios
      .get(url).then((response) => {

        if (type === 'profile') {
          console.log('got profile');
          let profile = {profile: response.data};
          this.setState(profile);
          this.showProfileForm();
        } else if (type === 'userskills'){
          console.log('got userskills', response);
          let userskills = {userskills: response.data.results};
          this.setState(userskills);
        } else if (type === 'userlocations') {
          console.log('got userlocations');
          let userlocations = response.data.results;
          this.setState(userlocations);
        } else if (type === 'allskills'){
          console.log('got allskills');
          let allskills = {allskills: response.data.results};
          this.setState(allskills);
        } else if (type === 'alllocations') {
          console.log('got alllocations');
          let alllocations = {alllocations: response.data.results};
          this.setState(alllocations);
        } else {return};
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

        <ProfileForm getProfile={this.getProfile} baseurl={this.props.baseurl} userid={this.state.userid} />
      )
    }
  }

  // showSkillsForm() {
  //   if (this.state.skills !== null) {
  //     return (
  //       <ShowData type={'skills'} baseurl={this.props.baseurl} userid={this.state.userid} skills={this.state.skills} />
  //     )
  //   } else {
  //     return (
  //       <SkillsForm baseurl={this.props.baseurl} userid={this.state.userid} allSkills={this.state.allSkills} />
  //     )
  //   }
  // }

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
                        <ChooseForm choose={'skills'} baseurl={this.props.baseurl} userid={this.state.userid} allskills={this.state.allskills} />
                        <ShowData show={'skills'} baseurl={this.props.baseurl} userid={this.state.userid} skills={this.state.userskills} />
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
