import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Link, Switch} from 'react-router-dom'

import Layout from 'component/layout/layout.jsx'
//页面
import Home from 'page/home/home.jsx'
import Login from 'page/login/login.jsx'
import UserList from 'page/user/user.jsx'
import ErrorPage from 'page/error/error.jsx'


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let LayoutRouter = (<Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/product" component={Home}/>
                <Route path="/product-category" component={Home}/>
                <Route path="/user/user" component={UserList}/>
                <Redirect exact from="/user" to="user/user"></Redirect>
                <Route component={ErrorPage}/>
            </Switch>
        </Layout>);
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)