import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect, Route, Link, Switch} from 'react-router-dom'

import Layout from 'component/layout/layout.jsx'
//页面
import Home from 'page/home/home.jsx'


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/product" component={Home}/>
                        <Route exact path="/product-category" component={Home}/>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)