import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

// import Image2 from './cuisine2.jpeg';
// import Image3 from './cuisine3.png';
// import logo from './exam.png'; 
import Home from './Home';
import Visite from './Visitez';
import Photo from './Photo';
import Navbar from './Navbar';
import Footer from './Footer';

class Introduction extends Component {

    render() {
        return (

            <div class=" container-fluid " id='div'>
                <div class=" row ">
                    <Navbar />
                    <div class=" container ">
                        <div class=" row ">
                            <div class=" col-md-2 ">
                                <Photo />
                            </div>

                            <div class=" col-md-3 col-6 home">
                                <Home />
                            </div>

                            <div class=" col-md-6 col-5 ">

                                <div className='row soratra'>
                                    bjectif
                                    {/* Nous voulons une application web qui permette à des particuliers de s’inscrire aux ateliers
que nous proposons.
Nous voulons tester la viabilité de l’application, c’est pourquoi nous voulons une application
simple dans un premier temps.
Il est à noter qu’il n’est pas nécessaire de se soucier du paiement, car cela se fera sur place
avant le début des ateliers. */}
                </div>
                                <div class="row visiteIntro">
                                    <Visite />
                                </div>
                            </div>
                        </div>
                    </div>
                <div class=" container-fluid  "  id='div'>
                    <Footer />
                </div>
                </div>
            </div>


        );
    }
}

export default Introduction;
