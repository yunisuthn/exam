import React from 'react';
import axios from 'axios';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class Inscrire extends React.Component {
    constructor(props) {
      super(props);
      this.onChangeNom = this.onChangeNom.bind(this);
      this.onChangePrenom = this.onChangePrenom.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeTel = this.onChangeTel.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        nom: '',
        prenom: '',
        email: '',
        tel: ''

      }
    }
    onChangeNom(e) {
      this.setState({
        nom: e.target.value
      })
    }
    onChangePrenom(e) {
      this.setState({
        prenom: e.target.value
      })
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      })
    }
    onChangeTel(e) {
      this.setState({
        tel: e.target.value
      })
    }
    
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      tel: this.state.tel,
    };
    axios.post('http://localhost:8080/particulier', obj)
      .then(res => console.log(res.data));

    this.setState({
      nom: '',
      prenom: '',
      email: '',
      tel: '',
    })
  }
    render() {

        return (
            
            <div className="Login">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">

                            <FormGroup controlId="nom" bsSize="large">
                                <FormLabel>nom</FormLabel>
                                <FormControl autoFocus type="text" 
                                value={this.state.nom}
                                onChange={this.onChangeNom}/>
                            </FormGroup>
                            <FormGroup controlId="prenom" bsSize="large">
                                <FormLabel>Prénom</FormLabel>
                                <FormControl autoFocus type="text"
                                value={this.state.prenom}
                                 onChange={this.onChangePrenom} />
                            </FormGroup>
                            <FormGroup controlId="email" bsSize="large">
                                <FormLabel>email</FormLabel>
                                <FormControl autoFocus type="email" 
                                value={this.state.email} 
                                onChange={this.onChangeEmail} />
                            </FormGroup>
                            <FormGroup controlId="tel" bsSize="large">
                                <FormLabel>Numéro de téléphone</FormLabel>
                                <FormControl value={this.state.tel} 
                                onChange={this.onChangeTel} 
                                type="text" 
                                />
                            </FormGroup>

                            <Button
                                type="submit"
                                onClick={this.onSubmit}
                            >
                                Envoyer
                            </Button>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
                );
              }
            }
            
export default Inscrire;