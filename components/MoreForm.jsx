
const MoreForm = (props) => {
    const { inputs, handleChange } = props;


    return (
        <>
            {/* Bootstrap */}
            <form className="col-6 mx-auto my-8">

                <div className="input-group mb-3">
                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">First Name
                            <input
                                type="text"
                                className="form-control ml-3 col-8"
                                name="firstName"
                                value={inputs.firstName}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                        {/* adding in a validation inputs.firstName is a const variable, Im telling the user to input more than 2 characters */}
                        {/* the double ||  is a second condition to only show when input doesnt meet critera set by validation
                          is going to take in the user input and display a message only when input is started, but not when its blank */}
                        <p className="text-danger">{(inputs.firstName.length > 2 || inputs.firstName.length === 0) ? "" : "First Name Must Have More Than 2 Characters"}</p>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Last Name
                            <input
                                type="text"
                                className="form-control ml-3 col-8"
                                name="lastName"
                                value={inputs.lastName}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                        <span className="text-danger">{(inputs.lastName.length > 2 || inputs.lastName.length === 0) ? "" : "Last Name Must Have More Than 2 Characters"}</span>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Email
                            <input
                                type="text"
                                className="form-control ml-3 col-8"
                                name="email"
                                value={inputs.email}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                        <span className="text-danger">{(inputs.email.length > 5 || inputs.email.length === 0) ? "" : "Please Enter A Valid Email"}</span>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Password
                            <input
                                type="password"
                                encrypt="bcrypt"
                                className="form-control ml-3 col-8"
                                name="password"
                                value={inputs.password}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label>
                        <span className="text-danger"> {(inputs.password.length > 7 || inputs.password.length === 0) ? "" : "Your Password Must Be at Least 8 Characters in length."}</span>
                    </div>

                    <div className="input-group-prepend my-3 w-100">
                        <label className="input-group-text w-100 d-flex justify-content-between">Confirm Password
                            <input
                                type="password"
                                encrypt ="bcrypt"
                                salt= "abc..."
                                rounds = "4"
                                patterns=".{6,}"
                                className="form-control ml-3 col-8"
                                name="confirm_pw"
                                value={inputs.confirm_pw}
                                // adding event listener to the input to be able to see what is being typed in
                                onChange={handleChange}
                            />
                        </label> {/* THIS WAS TRICKY.... YOU HAVE TO SET THE CONDITION TO IS NOT EQUAL TO ONLY SHOW WHEN THE PASSWORD DOESNT MATCH.  */}
                        <span className="text-danger"> {inputs.password === inputs.confirm_pw ||  "Your Passwords Need To Match"}</span>
                    </div>
                </div>

                {/* add in button this will not really create a user, it will just refresh the page, it breaks if I remove from bootstrap form */}
                {/* <input type="submit" value="Create New User" className="btn btn-primary" /> */}


            </form>





        </>
    )

};

export default MoreForm;


