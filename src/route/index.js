import App from '../App'
import List from '../pages/List'
import Edit from '../pages/Edit'
import Means from '../pages/Means'
import Login from '../pages/Login'
import Register from '../pages/Register'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/' element={<App />}>
                <Route path='/list' element={<List />} />
                <Route path='/means' element={<Means />} />
            </Route>
            <Route path='/teacher' element={<App />}>
                <Route path='/teacher/list' element={<List />} />
                <Route path='/teacher/means' element={<Means />} />
            </Route>
            <Route path='/jwc' element={<App />}>
                <Route path='/jwc/list' element={<List />} />
                <Route path='/jwc/means' element={<Means />} />
            </Route>
        </Routes>
    </Router>
)

export default BaseRouter