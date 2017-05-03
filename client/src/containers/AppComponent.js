import React, { Component } from 'react';
import CardStats from '../components/card/CardStats';

class AppComponent extends Component {

    render() {
        return (
            <div>
                <h3>Card</h3>
                <div className="row">
                    <div className="col-md-4">
                        <CardStats
                            backgroundColor="orange"
                            iconClass="fa-calendar"
                            category="Revenue"
                            title="$40,000" />
                    </div>
                    <div className="col-md-4">
                        <CardStats
                            backgroundColor="blue"
                            iconClass="fa-clone"
                            category="Revenue"
                            title="$40,000" />
                    </div>
                    <div className="col-md-4">
                        <CardStats
                            backgroundColor="red"
                            iconClass="fa-shopping-cart"
                            category="Revenue"
                            title="$40,000" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AppComponent;