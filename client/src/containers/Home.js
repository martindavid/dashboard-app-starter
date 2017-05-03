import React, { Component } from 'react';

import CardStats from '../components/card/CardStats';

class Home extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <CardStats
                            backgroundColor="orange"
                            iconClass="fa-user"
                            category="Total Data"
                            title="10Gb" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;