import React, { Component }from 'react';

//components
import Countdown from './Countdown';

//styles
import '../Styles/_new.scss';

class Mage extends Component {
    render() {
        return (
            <div className="container">
                <h2>New Products Coming Soon</h2>
                <Countdown />
            </div>
        );
    }
};

export default Mage;