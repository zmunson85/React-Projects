/* THIS IS THE FUNCTION BASED COMPONENT */

import React from 'react';
const PersonCard = props =>{
    return(
        <div>
             {/* //Note you no longer need this. because this is not a class. */}
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age:{props.age} </p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}
export default PersonCard;








/* 
//THIS IS A CLASS BASED COMPONENT//
// import React, {Component} from "react"

// class PersonCard extends Component {
//     render(){
//         return <div>
            
//             <h1>{this.props.firstName } { this.props.lastName}</h1>
//             <p>{this.props.age}</p>
//             <p>{this.props.hairColor}</p>
            
//         </div>
//     }
// }
// export default PersonCard; */