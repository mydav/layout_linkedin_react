import React from 'react';

class AboutUs extends React.Component {
    state = {  }
    render() { 
        return ( <div className="my-5">{this.props.aboutUs}</div> );
    }
}
 
export default AboutUs;