import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import {rootReducer} from './redux/rootReducer'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'


const store = createStore(rootReducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

