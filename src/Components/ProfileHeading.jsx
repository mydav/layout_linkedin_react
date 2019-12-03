import React from 'react';

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( <div className="my-5">
            <img className="ava" src={this.props.profile.image}></img>
            <h2>{this.props.profile.name} {this.props.profile.surname}</h2>
            <h5>{this.props.profile.title}</h5>
            <h5>{this.props.profile.area}</h5>
        </div> );
    }
}
 
export default ProfileHeading;