import React from 'react';

class ProfileHeading extends React.Component {
    state = {  }
    render() { 
        return ( <div className="my-5">
            <img src={this.props.profile.image}></img>
            <h2>{this.props.profile.name} {this.props.profile.surname}</h2>
        </div> );
    }
}
 
export default ProfileHeading;