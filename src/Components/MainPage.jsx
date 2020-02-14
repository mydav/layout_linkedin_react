import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from "./Profile";
import NavigationBar from "./NavigationBar";
import '../index.css';
import Experience from "./Experience";
import LoginComponent from "./LoginComponent"
import Footer from "./FooterPage";
import { connect } from "react-redux"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    setUserToken: base64 => dispatch({
        type: "SET_USERBASE64",
        payload: base64
    })
})

class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( <div>
        <NavigationBar></NavigationBar>
        
        <Router>
          <Route path="/login">
            <LoginComponent />{/* setUserAuth={(userAuth) => this.setState({ userAuth: userAuth})} */}
          </Route>
          <Route path="/">
            <Profile />
            <Experience />
            <Footer />
          </Route>
        </Router>
        </div> );
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)