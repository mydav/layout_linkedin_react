import React from 'react';
import ExperienceHeading from './ExperienceHeading';

import AboutUs from './AboutUs';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Experience extends React.Component {
    state = { 
        experience: null
     }

    render() { 
        return ( 
               <Container>
            <Row>
                <Col xs={12} md={8}>
                <div className="profileWrapper">
                    
                    <div className="botProfileWrapper">
                        { this.state.experience ? 
                        <> 
                        <ExperienceHeading experience={this.state.experience}></ExperienceHeading>
                        <AboutUs aboutUs={this.state.experience.role}></AboutUs> </>
                        : <h1>Experience info still loading</h1>
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
        let resp = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user23/experiences", {
            method: "GET",
            headers: {
                "Authorization": "basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
      
            }
        })

        let exp = await resp.json()
        this.setState({
            experience: exp
        })
    }
}
 
export default Experience;