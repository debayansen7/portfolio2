import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './pages/home';
import NoMatch from './pages/NoMatch';

class Router extends Component{
    render(){
        return (
            <Switch>
                <Route exact path="/" render={() => <Home />} />

                <Route component={NoMatch} />
            </Switch>
        )
    }
};

export default Router;
