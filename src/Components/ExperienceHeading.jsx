import React from 'react';

class ExperienceHeading extends React.Component {
    state = {  }
    render() { 
        return ( <div className="my-5">
            <h2>{this.props.experience.role}</h2>
            <h3>{this.props.experience.description}</h3>
            <h4>{this.props.experience.startDate} {this.props.profile.endDate}</h4>
            
        </div> );
    }
}
 
export default ExperienceHeading;