import React from 'react';
import ProfileHeading from './ProfileHeading';
import AboutUs from './AboutUs';

class Profile extends React.Component {
    state = { 
        profile: null
     }
    render() { 
        return ( <div>
            { this.state.profile ? 
            <> 
            <ProfileHeading profile={this.state.profile}></ProfileHeading>
            <AboutUs aboutUs={this.state.profile.bio}></AboutUs> </>
            : <h1>Profile info still loading</h1>
            }
           
        </div> );
    }

    componentDidMount = async ()=> {
        let resp = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/me", {
            headers: {
                "Authorization": "basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            }
        })

        let prof = await resp.json()
        this.setState({
            profile: prof
        })
    }
}
 
export default Profile;