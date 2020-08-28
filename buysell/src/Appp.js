import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Buy from './Buy/Buy';
import Sell from './Sell/Sell';
import './Appp.css';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';

class Appp extends Component {
    render() {
        return(
            <div className='bg'>
                <Router>
                    <Navigation />
                    <Route exact path='/' component={Content} />
                    <Route path='/about' component={AboutUs} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/buy' component={Buy} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/sell' component={Sell} />
                </Router>
            </div>
        );
    }
}
export default Appp;