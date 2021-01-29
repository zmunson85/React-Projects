import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BoxGen from "./components/BoxGen";
import React, { useState } from 'react';//to use state


/* STOP THIS IS NOT A VALID APP!!!
YOU MUST RENAME THE JS FILE TO App.js, 
For space we are Renaiming to BoxGenApp.js
will place this App in the bacground and we can continue to create new projects.

Nothing will be renderd from this BoxGenApp.js, that is just a placeholder for space!! 
file until we put until we revert the name to App.js 
 where all the compentents are called.  */


function App() {

    return (
        <div className="App">
            <BoxGen />
        </div>
    );
}

export default App;