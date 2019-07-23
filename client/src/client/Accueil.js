

import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import axios from 'axios';
class Accueil extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/article')
            .then(response => {
                //console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })



    }
    inscrire = (x)=> {
        console.log('cccc == ', x);
        window.location = "/inscrire"
      
    }
    render() {
        return (
                <div>
            

            {
                (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                    return (
                        <MDBCol  id='colonne'className='col-md-3'>
                            <MDBCard  id='carte' key={obj._id}>
                                <MDBCardImage id='sary'cascade className="img-fluid" src={'http://localhost:8080/photos/' + obj.photo_profil} alt="pdp" />
                                <MDBCardBody cascade>
                                    <MDBCardTitle>{obj.titre}</MDBCardTitle>
                                    <MDBCardText>{obj.description}</MDBCardText>
                                    <MDBCardText>{obj.date}</MDBCardText>
                                    <MDBCardText>{obj.debut}</MDBCardText>
                                    <MDBBtn onClick={()=>this.inscrire(obj)} >
                                        S'inscrire
                                    </MDBBtn>
                                </MDBCardBody>
                                {/*console.log(obj)*/}
                            </MDBCard>
                        </MDBCol>)

                })) : ('')
            }
            </div>
        );
    }
}

export default Accueil;
