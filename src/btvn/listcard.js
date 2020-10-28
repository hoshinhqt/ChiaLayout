import React, { Component } from 'react';
import Itemcard from './itemcard';

class Listcard extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid pt-5 pb-5 bg-dark">
                    <h1 class="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            < Itemcard />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <Itemcard />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <Itemcard />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <Itemcard />
                        </div>
                    </div>
                </div>
                <div className = "container-fluid pt-5 pb-5 bg-light text-dark">
                    <h1 class="text-center">BEST LAPTOP</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <Itemcard />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <Itemcard />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <Itemcard />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <Itemcard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Listcard;