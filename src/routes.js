import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Signup from "./pages/signup";
import Login from './pages/login';
import App from "./app";
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* 
                <Route exact path="/" component={Login} />
	            <Route exact path="/signup" component={Signup}/> 
                <Route exact path="/main" component={Main} /> 
                <Route exact component={PageNotFound} />
          */}
                <Route exact path="/" component={App} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;