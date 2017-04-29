import React, {Component} from 'react';
import envelope from '../images/envelope.png';


class ProfileData extends Component {

  // constructor() {
  //   super();
  //
  // }

  render() {

    const styles = {
      envelope: {
          width: '30px'
      },
      initialCircle: {
          width: '45%',
          float: 'left',
          marginRight: '5px'
      },
      profileStory: {
          textAlign: 'left',
          padding: '5px'
      }
    }

    return(
      <div>
        <h1 style={styles.profileHeading}>Profile Info</h1>
        <div style={styles.headerBar}>
          <img style={styles.envelope} src={envelope} alt='messages'/>
        </div>
        <div style={styles.initialCircle}>
          <p>V</p>
          <p>H</p>
          </div>
        <p>Vallyre Hyers</p>
        <p>email: vallyre@vallyre.com</p>
        <p style={styles.profileStory}>Affogato tacos unicorn direct trade. Cred bicycle rights shabby chic four loko godard narwhal. Af enamel pin vegan disrupt. Hot chicken iceland drinking vinegar PBR&B godard umami, seitan freegan tbh selfies paleo woke pug occupy tote bag.</p>
      </div>
    );

  }
}

export default ProfileData;
