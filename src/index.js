import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './App';
import { FirebaseContext } from './context/firebase'


const config = {
    apiKey: "AIzaSyBvB35J_sIWzgw_KnaWHZNIsnMImqltwjw",
    authDomain: "streaming-project-3ecd8.firebaseapp.com",
    projectId: "streaming-project-3ecd8",
    storageBucket: "streaming-project-3ecd8.appspot.com",
    messagingSenderId: "757360880912",
    appId: "1:757360880912:web:bbe9da20882cf4dd24c995",
    measurementId: "G-QRQ1BDXEF6"
}

// Initialize Firebase
const firebase = window.firebase.initializeApp(config);




ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById("root")
)
