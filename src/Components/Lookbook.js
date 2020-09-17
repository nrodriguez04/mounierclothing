import React,  { Component } from 'react';

//images
import One from '../Images/LookBook/one.jpg';
import Two from '../Images/LookBook/two.jpg';
import Three from '../Images/LookBook/three.jpg';
import Four from '../Images/LookBook/four.jpg';
import Five from '../Images/LookBook/five.jpg';
import Seven from '../Images/LookBook/seven.jpg';

//styles
import '../Styles/_lookbook.scss';

class Lkbk extends Component {
    render() {
        return (
            <div className="lookbook">
                <img src={One} alt="one" className="img-1"/>
                <img src={Three} alt="three" className="img-3"/>
                <img src={Two} alt="two" className="img-2"/>
                <img src={Four} alt="four" className="img-4"/>
                <img src={Five} alt="five" className="img-5"/>
                <img src={Seven} alt="seven" className="img-7"/>
            </div>
        );
    }
};

export default Lkbk;