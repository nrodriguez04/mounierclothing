import React, { Component }from 'react';

//components
import Countdown from './Countdown';

//styles
import '../Styles/_new.scss';

class Wage extends Component {
    render() {
        return (
            <div className="container">
                <h2>Coming Soon</h2>
                <Countdown />
            </div>
        );
    }
};

export default Wage;