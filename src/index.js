import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import App from './components/App'
import Jokes from './components/Jokes'
import './index.css'
import Header from './components/Header'

ReactDOM.render( 
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact={true} path='/' render={() =>{return (<Header Component={App}/>)}} />
            <Route path='/jokes' render={() => {return (<Header Component={Jokes}/>)}}/>
        </Switch>
    </Router>
    , document.getElementById('root'))