import React from 'react';

/* //We are not including a submit button, so we want to show the user input realtime
(This will be known as an event we are using onChange). 
onChange will detect a client that monitors what each user inputs inside each field.*/

const Form = props => {
    //we can use desctruturing here to help
    const { inputs, setInputs } = props;



    /* for onChange, we need to create a function that 
    says hey we need you to take that value and insert it into 
    our current state so that it will change dynamically. 
    Will capture the event of when the user presses a key down */
    const onChange = (e) => {
        /* //event is abreviated using an e, e is the parammeter we are pasing in(e=event) 
        //since we have more than one input field, we run the risk of overwriting some of the other state if we were to use 
        // setInputs({lastName: "target value inside input"})
        // we need to make sure we conserve what's already been touched, spread it out, and then take out just the key that we want to change.  */

        // so let's bring in inputs as the first argument- state=(all variables) and then the second argument allows us to change only what we want to change
        setInputs({
            ...inputs,//this makes sure you bring in everything spread the variables/bring them in
            [e.target.name]: e.target.value//this gets the target from the event so we know which input is being changed and then setting it to the target value
        });
    };

    return (


                <form>
                    <div class="container">
                        <h1>THIS IS MY FORM</h1>
                        {/* This will return in the results after the user inputs the data fields below */}
                        <div class="form-floating mb-3">
                            <label htmlFor="firstName">First Name</label>
                            {/* this form name will act as a key value pair.  */}
                            <input type="text" name="firstName" onChange={onChange} />
                        </div>
                        <div class="form-floating mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" onChange={onChange} />
                        </div>
                        <div class="form-floating mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" onChange={onChange} />
                        </div>
                        <div class="form-floating mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" onChange={onChange} />
                        </div>
                        <div class="form-floating mb-3">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" onChange={onChange} />
                        </div>
                    </div>
                </form>


    )
}

export default Form;