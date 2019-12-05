import React from 'react';
import ProfileHeading from './ProfileHeading';
import AboutUs from './AboutUs';
import Experience from './Experience';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Profile extends React.Component {
    state = { 
        profile: null
     }
     
    render() { 
        return ( 
               <Container>
            <Row>
                <Col xs={12} md={8}>
                <div className="profileWrapper">
                    <div className="topProfileWrapper">
                        <img src="https://static-exp1.licdn.com/sc/h/5qi38njir9vsm46ync2qjvrrs" alt=""/>
                    </div>
                    
                    <div className="botProfileWrapper">
                        { this.state.profile ? 
                        <> 
                        <ProfileHeading profile={this.state.profile}></ProfileHeading>
                        <AboutUs aboutUs={this.state.profile.bio}></AboutUs> </>
                        : <h1>Profile info still loading</h1>
                        }
                    </div>
                </div> 
                </Col>

                <Col xs={6} md={4}>
                <div className="rightSidebar">

                </div>
                </Col>
            </Row>
        </Container>
           
        
         
        );
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