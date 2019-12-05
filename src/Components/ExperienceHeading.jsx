import React from 'react';

class ExperienceHeading extends React.Component {
    state = {  }
    render() { 
        return ( <div className="my-5">
            <h2>Experience</h2>
            <h4>{this.props.experience.role}</h4>
            <h5>{this.props.experience.description}</h5>
            <h5>{this.props.experience.startDate} {this.props.experience.endDate}</h5>
        </div> );
    }
}
 
export default ExperienceHeading;