import React, { Component } from 'react';


class MyNewComponent extends Component {
    //The state variable will allow us to increase the birday value by 1 year.
    constructor(props) {
        const myDate = new Date()  
        super(props);
        this.state = {
            new_birthday: this.props.age, /* new birthday should add 1 year to age after clicking button */
            timesClicked: [],//For each click age will increase and it will be printed below the button.
            show: false
        };
    }

    handleClick = (event) => {
        /* When we add a method to handle the click 
        It will let us hold on to the info that belongs to that 
        method/setstate will update state from current + 1 in this case */
        this.setState({
            
            /* We want the year to increase by 1 year, 
            so here we use defult state 
            and increase after each click. (state+1) */
            new_birthday: this.state.new_birthday + 1,
            show: true,
            /* THIS IS JUST A TEST TO SEE IF I CAN GET 
            THE DATE TO PRINT AFTER EACH 
            CLICK/STACKOVERFLOW HELP!!! */
            timesClicked: [this.state.timesClicked]//We do not want to change state, 
                                                                                 //so notice, push or append is not used here....
                                                                                });
    };


    render() {
        return (
            <div className="MNC">
                <div className="main">
                    <div className="person">
                        <h1 className="user">{this.props.lastName}, {this.props.firstName}</h1>
                        <p className="age">Age: {this.state.new_birthday}</p>
                        <p className="hair">Hair Color: {this.props.hairColor}</p>
                        <button className="btn" onClick={this.handleClick}>
                        Birthday Button for {this.props.firstName} {this.props.lastName} 
                        </button>
                        
                    </div>    
                    {/* Say Happy __th Birthday for each person's new birdthda.*/}
                    <ul className="list">
                    {
                        this.state.show ?
                            <li className="item">Happy {this.state.new_birthday}th Birthday! {this.props.firstName} </li>
                            :""
                    }
                    </ul>
                </div>
            </div>

            
        );
    }
}

export default MyNewComponent;