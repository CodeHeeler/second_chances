import React, {Component} from 'react';
import envelope from '../images/envelope.png';


class ProfileData extends Component {

makeInitials(first, last) {
    let firstArr = (first).toLowerCase().split('');
    let firstInitial = firstArr[0];
    let secondArr = (last).toLowerCase().split('');
    let secondInitial = secondArr[0];
    let initials = [firstInitial, secondInitial];

    return (
      <p className='initials'>{initials}</p>)
  }

  render() {

    const styles = {
      envelope: {
          width: '30px'
      },
      profileStory: {
          textAlign: 'left',
          padding: '5px'
      }
    }

    return(
      <div>
          <img style={styles.envelope} src={envelope} alt='messages'/>
        <div className='initial-circle'>
          {this.makeInitials(this.props.currProfile.firstname, this.props.currProfile.lastname)}
        </div>
        <p>{this.props.currProfile.firstname} {this.props.currProfile.lastname}</p>
        <p>{this.props.currProfile.email}</p>
        <p style={styles.profileStory}>{this.props.currProfile.bio}</p>
      </div>
    );

  }
}

export default ProfileData;
