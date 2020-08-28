import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Buy from './Buy/Buy';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
constructor() {
    super();
    this.state = {
        route: 'home'
    }
}

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    render() {
        return(
            <div className='bg'>
                <Router>
                    <Switch>
                        
                        <Route eact path="/signup" component={SignUp} />
                        <Route path="/signin" component={SignIn } />
                        
                    </Switch>
                </Router>
     
                <Navigation onRouteChange={this.onRouteChange}/>
                { this.state.route === 'home'
                    ? <div>
                        <Content onRouteChange={this.onRouteChange}/>      
                        <Footer />
                    </div>   
                    
                    : ( this.state.route === 'buy'
                        ? <Buy onRouteChange={this.onRouteChange}/>
                        : (
                            this.state.route === 'signin' 
                                ? <SignIn onRouteChange={this.onRouteChange}/>
                                : <SignUp onRouteChange={this.onRouteChange}/>
                        )
                    ) 
                    
   
                }
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/buy" component={Buy} />
                    </Switch>
                </div>
            </BrowserRouter>
                
                
            </div>
            
        );
    }
}
export default App;