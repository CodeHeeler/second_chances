import React, {Component} from 'react';
import Header from './Header'

import envelope from '../images/envelope.png';
import profilepic from '../images/profilepic.png';

class Profile extends Component {

    render() {

        const styles = {
            headerBar: {
                height: '5vh',
                backgroundColor: '#ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                color: '#000'
            },
            mainName: {
                textTransform: 'uppercase',
                fontSize: '1.2rem'
            },
            envelope: {
                width: '30px'
            },
            profileBody: {},
            profileHeading: {
                fontSize: '1.5rem',
                color: '#fff',
                backgroundColor: '#000',
                clear: 'both'
            },
            profilePic: {
                width: '45%',
                float: 'left',
                marginRight: '5px'
            },
            profileStory: {
                textAlign: 'left',
                padding: '5px'
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
                <h1 style={styles.profileHeading}>Welcome {username}</h1>
                <div style={styles.headerBar}>
                    <h1 style={styles.mainName}></h1>
                    <img style={styles.envelope} src={envelope} alt='messages'/>
                </div>
                <div style={styles.profileBody}>
                    <img style={styles.profilePic} src={profilepic} alt="profile"/>
                    <p style={styles.profileStory}>Affogato tacos unicorn direct trade. Cred bicycle rights shabby chic four loko godard narwhal. Af enamel pin vegan disrupt. Hot chicken iceland drinking vinegar PBR&B godard umami, seitan freegan tbh selfies paleo woke pug occupy tote bag.</p>
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
