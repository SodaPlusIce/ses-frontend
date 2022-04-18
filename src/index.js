import React from "react";
import App from './App'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'

const AppView = (
    // <Provider store={store}>
    //     <App />
    // </Provider>
    <App />
)

// ReactDOM.render(AppView, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);