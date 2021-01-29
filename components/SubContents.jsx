import React, { Component } from "react";

export default class SubContents extends Component {

    // using synthetic events so when we hover over a subcontent it will change color and then change back once hovered off of it
    constructor(props) {
        super(props);
        this.state = {
            color: "#ffd966"
        }
    }

    render() {
        return (
            <div
                // synthetic event for hover On
                onMouseOver={() => this.setState({ color: "blue" })}

                //synthetic event for hover Off
                onMouseOut={() => this.setState({ color: "#ffd966" })}

                className="col-3 mr-5" style={{ backgroundColor: this.state.color, height: "300px" }}>

            </div>
        )
    }
}