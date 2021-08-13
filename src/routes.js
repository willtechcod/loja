import React, {useContext} from 'react';
import {AuthProvider} from './Context/AuthContext';
import {Router, Switch, Route, Redirect } from 'react-router-dom';

import history from './services/history';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Carrinho from './pages/Carrinho';
import Detalhes from './pages/Detalhes';
import Dashbord from './pages/Dashbord';

import { Context} from './Context/AuthContext';

function Routes(){

    function CustomRoute({isPrivate, ...rest}){
        const {authenticated} = useContext(Context);

        if(isPrivate && !authenticated){
            return <Redirect to="/login" />
        }

        return <Route {...rest} />
    }

    return(
        <div>
            <AuthProvider>
        <Router history={history}>
            <Switch>
                <CustomRoute  path="/" exact component={Home} />
                <CustomRoute  path="/contato" exact  component={Contato} />
                <CustomRoute  path="/login" exact component={Login} />
                <CustomRoute  path="/carrinho" exact component={Carrinho} />
                <CustomRoute  path="/detalhes" exact component={Detalhes} />
                <CustomRoute  isPrivate path="/dashbord" exact component={Dashbord} />
            </Switch>
        </Router>
        </AuthProvider>
        </div>
    );
};


export default Routes;
