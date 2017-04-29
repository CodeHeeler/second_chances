import React, {Component} from 'react';
import Header from './Header'
import ProfileData from './ProfileData'


class Profile extends Component {

    render() {

        const styles = {
            headerBar: {
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            },

            profileBody: {
              backgroundColor: '#ccc'
            },
            profileHeading: {
                fontSize: '1.5rem',
                color: '#fff',
                backgroundColor: '#000',
                clear: 'both'
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
        let username = this.props.username;

        return (
            <div>
                <Header/>
                <div style={styles.profileBody}>

                  <ProfileData />

                      <h1 style={styles.profileHeading}>{username}&#39;s Skills</h1>
                      <ul style={styles.skillsContainer}>
                        <li style={styles.skill}>Painting</li>
                        <li style={styles.skill}>Drawing</li>
                        <li style={styles.skill}>Needlepoint</li>
                        <li style={styles.skill}>Singing</li>
                        <li style={styles.skill}>Dancing</li>
                        <li style={styles.skill}>emcee</li>
                        <li style={styles.skill}>Popping Bottles</li>
                      </ul>


                      <h1 style={styles.profileHeading}>{username}&#39;s Opportunities</h1>
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
