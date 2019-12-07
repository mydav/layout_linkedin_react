import React from 'react';

class AboutUsers extends React.Component {
    state = {  }
    render() { 
        return ( <div className="my-5">{this.props.aboutUsers}</div> );
    }
}
 
export default AboutUsers;