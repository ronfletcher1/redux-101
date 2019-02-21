import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Import the store from redux so we can use it
// The store IS Redux.

import { createStore } from 'redux';

// import the provider component from react-redux so that react
// and redux can talk. they talk through "connect", buy the
// Provider component makes that happen
import { Provider } from 'react-redux';

// We need a master/root reducer to give to the store
import reducers from './reducers/index';
import rootReducer from './reducers/index';
// make a store for Redux to use. pass it reducers, which is the 
//export of the rootreducer file. the rootreducer is just all the 
// little reducers

const theStore = createStore(reducers);

// Provider is the component that makes the connect work (connect is inside
// the containers). It takes a prop of the store, which is the reduxStore.
// the redux store was made by createStore and giving it the rootReducer

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider> ,
    document.getElementById('root')
    );


