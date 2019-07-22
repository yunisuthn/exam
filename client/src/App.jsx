import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
//import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Acceuil from './client/Accueil';
import Login from './users/Login/Login';
import PostFrontToBack from './users/Dashboard/postWithUpload_frontToBack';
import './App.css'
import AfficheProfil from './users/Dashboard/AfficheProfil'

// import { Dashboard } from './users/Dashboard/Dashboard.js';
import Signup from './users/Signup/Signup';
import { PrivateRoute } from './users/PrivateRoute.js';
import Inscrire from './client/Inscrire';
import Edit from './client/Edit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <Router>

          <div>
            <header>
              <MDBNavbar color="default-color" dark expand="md">
                <MDBNavbarBrand href="/">
                  <strong>E-commerce</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem className='MDBNavLink'>
                      <MDBNavLink to="/">Acceuil</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className='MDBNavLink'>
                      <MDBNavLink to="/login">Dashboard</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </header>
            <Switch>
              <Route exact path='/' component={Acceuil} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Signup} />
              <Route path='/inscrire' component={Inscrire} />

              <PrivateRoute path="/dashboard" component={PostFrontToBack} />
              {/* <PrivateRoute path="/profil" component={ListTous} /> */}
              <PrivateRoute path="/userArticle" component={AfficheProfil} />
              <PrivateRoute path="/edit/:id" component={Edit} />
              {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;