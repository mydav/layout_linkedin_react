import React from 'react';
import {Row, Col, Container} from 'reactstrap';

class Experience extends React.Component {
    state = {
        experiences: ""
    }

    render() {
        console.log(this.state.experiences);
        return (
            <Container>
            <Row>
                <Col xs={12} md={8}>
                <div className="profileWrapper">
                    
                    
                    <div className="botProfileWrapper">
                    {this.state.experiences && this.state.experiences.map((experience, index)=>(
                         <div key={index} className="userexperience">
                    <h3>{experience.company}</h3>
                    <h5>{experience.role}</h5>
                    <h6>{experience.description}</h6>
                    
                       
                    
                     </div>
                    ))}

                    </div>
                </div> 
                </Col>

                
            </Row>
        </Container>


        
        );
    }

    componentDidMount = async () => {
        let username = "user23";
        let password = "2ak9E5qqBKvV2wky";
        let token = btoa(username + ":" + password)
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/user23/experiences", {
            method: "GET",
            headers: {
                Authorization: "Basic " + token,
            }
        });
        let exp = await response.json()
        this.setState({
            experiences: exp
        });
    };

}

export default Experience;