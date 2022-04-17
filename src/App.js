import React from 'react'
import loadable from './utils/loadable'
import { HashRouter as Router, Route,  Redirect } from 'react-router-dom'
import { Switch } from 'antd'


const Login = loadable(() => import('./views/Login'))


const App = () => (
    <h1>Hello World!</h1>
    // <Router>
    //     <Switch>
    //         <Route path='login' component={Login}></Route>

    //     </Switch>
    // </Router>
)

export default App