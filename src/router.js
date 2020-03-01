import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './pages';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/home' component={Page.Home}></Route>
            <Route path='/category' component={Page.Category }></Route>
            <Route path='/cart' component={Page.Cart}></Route>
            <Route path='/user' component={Page.User}></Route>
        </Switch>
    </BrowserRouter>
)
