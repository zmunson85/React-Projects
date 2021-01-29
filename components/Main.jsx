import React, { Component } from 'react';


export default class Navigation extends Component {
    //create constructor for color change on hover
    constructor(props) {
        super(props);
        this.state = {
            color: "#6fa8dc"
        }
    }

    render() {
        return (
            <div
                //change color on hover
                onMouseOver={() => this.setState({ color: "Red" })}

                //change color on hover off
                onMouseOut={() => this.setState({ color: "#6fa8dc" })}

                className="col-3 mr-4" style={{ height: "500px", backgroundColor: this.state.color }}>

            </div>
        )
    }
}
// class Main extends React.Component {
//     render() {
//         const mystyle = {
//             color: "white",
//             backgroundColor: "DodgerBlue",
//             padding: "10px",
//             fontFamily: "Arial"
//         };
//         return (
//             <div>
//                 <h1 style={mystyle}>Hello Style!</h1>
//                 <p>Add a little style!</p>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Main />, document.getElementById('root'));
//this must be imported as well--->   import ReactDOM from 'react-dom';