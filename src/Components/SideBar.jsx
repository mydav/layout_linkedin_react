import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let divStyle = { 
    height: "90px",
    color: "black"
}

let imgStyle = {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "50%"
}

class SideBar extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div className="rightSidebar">
            <Row style={divStyle}>
                {this.props.user.image ? <Col ><img style={imgStyle} src={this.props.user.image} alt="Pic" /></Col> : <Col md="3"><img src="https://cdn3.iconfinder.com/data/icons/flat-pro-user-management-set-4/32/user-unknown-woman-512.png" /></Col>}
                <Col md="9" className="pt-2" style={{display: "inline-block"}}><span style={{fontWeight: "bold"}}>{this.props.user.name} {this.props.user.surname}</span> <br/> {this.props.user.title}</Col>
            </Row>
        </div> );
    }
}
 
export default SideBar;