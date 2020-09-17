import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

//components
import Main from './Main';
import Lkbk from './Lookbook';
import ContactForm from './Contact';
import Discover from './New';
import Wage from './Women';
import Mage from './Men';
import Shoppe from './Shop';


//styles
import '../Styles/_navigation.scss';

export default function Navigation() {

    const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
    `;

    return (
        <Router>
            <div>
                <nav className="navigation-main">
                    <div className="title">
                        <StyledLink to="/"><span>Mounier |</span></StyledLink>
                    </div>
                    <ul>
                        <li>
                            <StyledLink to="/new">New</StyledLink>
                            <span>||</span>
                        </li>
                        <li>
                            <StyledLink to="/women">Women</StyledLink>
                            <span>||</span>
                        </li>
                        <li>
                            <StyledLink to="/men">Men</StyledLink>
                            <span>||</span>
                        </li>
                        <li>
                            <StyledLink to="/lookbook">Lkbk21</StyledLink>
                            <span>||</span>
                        </li>
                        <li>
                            <StyledLink to="/contact">Contact</StyledLink>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/lookbook">
                        <Lookbook />
                    </Route>
                    <Route path="/men">
                        <Men />
                    </Route>
                    <Route path="/women">
                        <Women />
                    </Route>
                    <Route path="/new">
                        <New />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <Main />;
}

function New() {
    return <Discover />;
}

function Women() {
    return <Wage />;
}

function Men() {
    return <Mage />;
}

function Lookbook() {
    return <Lkbk />;
}

function Contact() {
    return <ContactForm />;
}

function Shop() {
    return <Shoppe />;
}