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
import Footer from "./FooterPage";



class MainPage extends React.Component {
    state = {  }
    render() { 
        return ( <div>
        <NavigationBar></NavigationBar>

        <Router>
          <Route path="/">
            <Profile />
            <Experience />
            <Footer />
          </Route>
        </Router>
        </div> );
    }
}
 
export default MainPage;