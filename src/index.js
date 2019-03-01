import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//this is how store is created and this is where entire state of your application will live.
import {createStore} from 'redux';
import postReducer from './reducer/postReducer';
import {Provider} from 'react-redux';


const store = createStore(postReducer);

ReactDOM.render(
    // Let’s pass this store to our components.
    <Provider store={store}>
<App />
</Provider>
,document.getElementById('root'));