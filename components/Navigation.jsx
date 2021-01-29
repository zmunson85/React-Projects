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
                onMouseOver={() => this.setState({ color: "green" })}

                //change color on hover off
                onMouseOut={() => this.setState({ color: "#6fa8dc" })}

                className="col-3 mr-4" style={{ height: "400px", backgroundColor: this.state.color }}>

            </div>
        )
    }
}