import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//styles
import '../Styles/_main.scss';

//images
import Cover from '../Images/Cover.png';
import Logo from '../Images/mounierLogo.png';

class Main extends Component {
    render() {
        return (
            <div className="content">
                <div className="main-img">
                    <img src={Cover} alt="cover"/>
                </div>
                <div className="logo-img">
                    <img src={Logo} alt="Logo"/>
                </div>
                <form className="search" action="action_page.php">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><ion-icon name="search-circle-outline"></ion-icon></button>
                </form>
                <div className="tag-container">
                    <div className="tagline">
                        <div>
                            <span>Elegant</span>
                        </div>
                        <div>
                            <span>Street</span>
                        </div>
                        <div>
                            <span>Fashion</span>
                        </div>
                    </div>
                    <Link to="/shop"><button className="shop">Shop Now</button></Link>
                    <Link to="/new"><button className="discover">Discover</button></Link>
                </div>
            </div>
        );
    }
};

export default Main;