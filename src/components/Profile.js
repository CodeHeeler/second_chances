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
    this.componentDidMount = this.componentDidMount.bind(this);
    this.postSkill = this.postSkill.bind(this);
    this.postLocation = this.postLocation.bind(this);
    this.state = {
      profile: {
        firstname: null,
        lastname: null,
        email: null,
        bio: null
      },
      // userid: 1,
      userid: localStorage.getItem("userID"),
      userskills: [],
      userlocation: [],
      allskills: [],
      alllocations: []
    }
  }

  componentDidMount() {
    this.getData('profile');
    this.getData('userlocation');
    this.getData('userskills');
    this.getData('alllocations');
    this.getData('allskills');
  }

  getData(type) {
    let url;
    if (type==='profile') {
      url=`${this.props.baseurl}/api/user_profile/${this.state.userid}/`;
    } else if (type === 'userskills') {
      url=`${this.props.baseurl}/api/providedskill/${this.state.userid}`;
    } else if (type === 'userlocation') {
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
          localStorage.setItem('firstname',profile.firstname);
          this.showProfileForm();
        } else if (type === 'userskills') {
          console.log('got userskills');
          let skillObj = response.data.results;
          let arr = [];
            for (let i in skillObj) {
              arr.push(
                skillObj[i].skill_string);
            }
          this.setState({userskills: arr});
          return;
        } else if (type === 'userlocation') {
          console.log('got userlocation');
          let locationObj = response.data.results;
          let arr = [];
            for (let i in locationObj) {
              arr.push(
                locationObj[i].location_string);
            }
          this.setState({userlocation: arr});
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

  postSkill(skill) {
    axios({
      method: 'POST',
      url:`${this.props.baseurl}/api/providedskill/${skill.owner}/`,
      data: skill
    }).then((response) => {
      console.log('skillposted!!', response);
      this.getData('userskills');
    }).catch(function(error) {
      console.log(error);
    });
  }

  postLocation(location) {
    axios({
      method: 'POST',
      url:`${this.props.baseurl}/api/userlocation/${this.state.userid}/`,
      data: location
    }).then((response) => {
      console.log('locationposted!!', response);
      this.getData('userlocation');
    }).catch(function(error) {
      console.log(error);
    });
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
            opportunities: {
                textAlign: 'center'
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

                    <section className='skills-section'>
                      <HeaderBar innerText='Skills' />
                        <ChooseForm choose='skills' baseurl={this.props.baseurl} userid={this.state.userid} allskills={this.state.allskills} postSkill={this.postSkill}/>
                        <ul style={styles.skillsContainer}>
                        {Object
                          .keys(this.state.userskills)
                          .map(key => <ShowData choose='skills' key={key} userskill={this.state.userskills[key]}/>)
                        }
                      </ul>
                    </section>

                    <section className='location-section'>
                      <HeaderBar innerText='Locations' />
                        <ChooseForm choose='locations' baseurl={this.props.baseurl} userid={this.state.userid} alllocations={this.state.alllocations} postLocation={this.postLocation}/>
                        <ul style={styles.skillsContainer}>
                        {Object
                          .keys(this.state.userlocation)
                          .map(key => <ShowData choose='locations' key={key} userlocation={this.state.userlocation[key]}/>)
                        }
                      </ul>
                    </section>

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
