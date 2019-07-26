import React from 'react';
import { Button } from "react-bootstrap";

import TopNavigation from '../Dashboard/Admin/TopNavigation';
import SideNavigation from '../Dashboard/Admin/SlideNavigation';
import Footer from '../../tenaComponent/Footer';

import API from '../../utils/API';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return(
            <div className="row">
                <div className='col-md-3 divA'>
          <SideNavigation />
                divA
                </div>
                <div className=' col-md-8 divB'>
          <TopNavigation />
                    divB

                <div className='row divC'>

          <Footer />
                divC
                </div>
                <div className='row divD'>
          <Footer />
                divD
                </div>
                </div>
                
            </div>
        )
    }
}