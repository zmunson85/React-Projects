import React from 'react';


const BoxGenDisplay = (props) => {
    //if I use destructure here we can condense the code needed in this section.
    const { colors } = props;
    console.log("Color My Boxes", colors)
    console.log("Color My Boxes") 

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Use map as a for loop to render all the boxes at the same time. Also utilizing display flex to allow our BoxGenDisplay to bee seen in realative locations on the page  */}


            {
                colors.map((color, i) => {
                    return (
                        //This should now render each user inputet box with margin 
                        //between boxes. boxes are set-size and color by user in form
                        <div key={i} className="block" style={{ backgroundColor: color.color, height: color.box_size + "px", width: color.box_size + "px", margin: '10px' }}>
                        {color.box_size +  "px"}
                        </div>
                    )
                })

            }


        </div>





    );

}

export default BoxGenDisplay;





   //LINE 19 Original Removed to change render//
  //Acting as a placeholder I can see that the boxes are displaying with correct demensions with css style block. A square box on the page fwith a background color, now we need to loop this...
                        // <div key={i} className="block" style={{ backgroundColor: color.color, height: '200px', width: '200px', margin: '4px' }}>
                        //      Color entered: {color.color}
                        // </div>