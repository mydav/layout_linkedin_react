import React from 'react';
import {Container} from 'reactstrap';

class ExperienceHeading extends React.Component {
    state = {
        experiences: ""
    }

    render() {
        console.log(this.state.experiences);
        return (<>
            <Container fluid>
                <h3>Experience</h3> 
                <br/>
                <div className="col">
                    <h6>Jobtitle One</h6>

                    {this.state.experiences && this.state.experiences.map((experience, index)=>(
                         <div key={index} className="userexperience">
                         {experience.company}
                     </div>
                    ))}

                 </div>
                </Container>
        </>);
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

export default ExperienceHeading;