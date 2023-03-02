import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import userReducer from './Features/Users'

const preloadedState={
  user:{
    ids:[1,2,3],
    entities:{
      1:{
        id: 1,
        username: "Bret",
        email: "Leanne@gmail.com",
        password: "Bret1"
      },
      2:{
        id: 2,
        username: "Antonette",
        email: "Ervin@gmail.com",
        password: "Antonette2"
      },
      3:{
        id: 3,
        username: "clementine",
        email: "Clementine@gmail.com",
        password: "clementine3"
      }
    }
  }
}

const store = configureStore({
  reducer:{
    user : userReducer ,
  },
  preloadedState
})
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
      <Provider store = { store } >
          <App />
      </Provider>     
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();