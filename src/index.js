import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//wrap everything in provider after creating the store, children of provider have access to store
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
 
  </React.StrictMode>,
  document.getElementById('root')
);