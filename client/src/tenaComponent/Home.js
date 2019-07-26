import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import { Redirect } from 'react-router-dom'

class Home extends Component {
    // introduction= () =>{
    //     window.location = '/introduction'
    //         /* this.props.history.push('/dashboard'); */

    // }

    // introduction = () => {
    //     //window.location = '/introduction'
    //     <Redirect to='/introduction' />
    // }
    state = {
        redirectIntr: false,
        redirectbbj: false,
        redirectAtel: false,
     
    }
    setRedirect = () => {
        this.setState({
            redirectIntr: true,
            redirectbbj : true
        })
    }
    introduction = () => {
        if (this.state.redirectIntr) {
            console.log('this.state.redirect intrdu');
            
            return <Redirect to='/introduction' />
        }
    }
    Objectif = () => {
        if (this.state.redirectbbj) {
            return <Redirect to='/objectif' />
        }
    }

    Atelier = () => {
        if (this.state.redirectAtel) {
            console.log('this.state.redirect intrdu');
            
            return <Redirect to='/atelier' />
        }
       // window.location = '/atelier'
    }

    render() {
        return (
            <div class=" home col-md-6  ">
                <ul class="col-md-2 list-group ">
            <div>
                    <li className='li li1 list-group-item-action'
                        onClick={this.setRedirect}>

                        {this.introduction()}
                        INTRODUCTION
                    </li>
            </div>
                    <li className='li li2 list-group-item-action '
                        onClick={this.setRedirect}>

                        {this.Objectif()}
                        OBJECTIF
                    </li>
                    <li className='li li3 list-group-item-action'
                        onClick={this.setRedirect}>
                        {this.Objectif()}
                        ATELIER
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
