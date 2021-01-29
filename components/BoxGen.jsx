import React, { useState } from 'react';
import BoxGenDisplay from '../components/BoxGenDisplay';

const BoxGen = (props) => {
    //state variables
    const [colors, setcolors] = useState([]);
    const [color, setColor] = useState('');
    const [box_size, setBox_size] = useState(200);

    //Pick a color on form in BoxGenDisplay Color Input where user will type a color/
    // I WOULD LIKE A DROP DOWN HERE THOUGH FOR FUN!!!-import select
    const handleForm1 = e => {

        setColor(e.target.value);
    }

    const handleForm2 = e => {

        setBox_size(e.target.value);
    }

    //function to handle the form submission via submit button
    const handleSubmit = e => {
        //by default react wants to send the user somplace else, 
        e.preventDefault();
        //we handle that here preventing react from sending us somplace else, 
        //so boxes will be rendered on this same page using 2 compontnts.

        console.log(color);
        //this will test to see if the color is rendering on the page.... we can put it in a box later with demension too.
        const newColor = {
            color: color,
            box_size: box_size
        };

        //set colors so the user can input a color that will color the new box
        setcolors([...colors, newColor]);
        //spread will bring in all the colors that have already been inputed and each new color that is added, only after a user colored a box  picked the size and hit add button

        console.log(colors);

        // Clear out the form after the user selects Add. It will clear the box to allow another input to be added. 
        //to clear the input box after submission, we need to set the input box to an empty string
        setColor('');
        //I NEED TO FIGURE OUT HOW TO SET THE DEFAULT IN THE FORM TO A DROPDOWN TO LIMIT THE INPUT VARIABLES
        setBox_size(200);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>        
                    <h1>Color My Boxes & Pick A Size</h1>
                </div>
                <div>
                    <label htmlFor="colorInput">Pick A Color</label>
                    {/* "Looking" for user input-event listiner will let user type */}
                    <input
                        type="text" name="color" value={color}
                        onChange={handleForm1}
                        />
                </div>    

                    {/* Bonus Feature, ADD A SECOND INPUT TO SET BOX SIZE */}
                    <label htmlFor="boxSizeInput">Set Box Size Using Pixels</label>
                    <input
                        type="text" name="box_size" value={box_size}
                        onChange={handleForm2}
                    />

                    <button type="submit" >Add</button>
            </form>


            <BoxGenDisplay colors={colors} />
        </>
    );
}

export default BoxGen;