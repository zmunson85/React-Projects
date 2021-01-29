
import './App.css';
import MoreForm from "./components/MoreForm";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";//import bootstrap
import React, { useState } from 'react';//import hook

function App() {
    //initialize state variables by creating a dictionary and settng key-value pairs
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: '',
        password: "",
        confirm_pw: ''
    });

    //This will set state to what the user enters in the
    const handleFormChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="App">
            <MoreForm inputs={state} setInputs={setState} handleChange={handleFormChange} />
            {/* <Display inputs={state} /> */}

        </div>
    );
}

export default App;