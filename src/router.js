import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Views
import Login from './components/Login/Login';
import Browse from './components/Browse/Browse';

export default(
    <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Browse} path="/browse" />
        {/* <Route component={Details} path="/details" />
        <Route component={EditBook} path="/edit" />
        <Route component={AddBook} path="/add" />
        <Route component={Cart} path="/cart" />
        <Route component={Bookshelf} path="/bookshelf" /> */}
    </Switch>
)