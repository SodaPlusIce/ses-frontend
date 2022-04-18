import React from 'react'
import loadable from './utils/loadable'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import { Switch } from 'antd'


const Login = loadable(() => import('./views/Login'))


const App = () => (
    //test it 
    // <Router>
    //     <Switch>
    //         <Route path='login' component={Login}></Route>

    //     </Switch>
    // </Router>
    <>
        {/* <h1>hello</h1> */}
        <Login />
    </>
)

export default App