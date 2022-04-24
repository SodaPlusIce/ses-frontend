import React from 'react'
import loadable from './utils/loadable'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const Login = loadable(() => import('./views/Login'))
const Register = loadable(() => import('./views/Register/Register'))
const NavBar = loadable(() => import('./views/Index'))



const App = () => (
    //test it 
    <Router>
        <Switch>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={NavBar}></Route>
        </Switch>
    </Router>
)

export default App