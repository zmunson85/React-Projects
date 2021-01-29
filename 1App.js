import MyNewComponent from "./components/MyNewComponent";   /* THIS WAS USED FOR Putting it together Assignment  */
import './App.css';
/* //import the components from components folder inside SRC folder, NOTICE THE PATH/components/(COMPONENT NAME) */
function App() {
  return (
    <div className="App">
      <MyNewComponent firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <MyNewComponent firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <MyNewComponent firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <MyNewComponent firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;




// import './App.css';
// import MoreForm from "./components/MoreForm";
// import Display from "./components/Display";
// import "bootstrap/dist/css/bootstrap.min.css";//import bootstrap
// import React, { useState } from 'react';//import hook

// function App() {
//   //initialize state variables by creating a dictionary and settng key-value pairs
//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     pw_confirm: ''
//   });

//   //function to capture event of keypress
//   const handleFormChange = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value
//     });
//   }

//   return (
//     <div className="App">
//       <MoreForm inputs={state} setInputs={setState} handleChange={handleFormChange} />
//       <Display inputs={state} />

//     </div>
//   );
// }

// export default App;










// function App() {
//   //define the state currently then pass in the info, 
//   //we can use destructure for the useState Function
//   //bring in current state and then set the initial value with user input
  
//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     pw_confirm: ''
//   });

//   const handleFormChange = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value
//     });
//   }

//   return (
//     <div className="App">
//       {/* Inputs can be named anything we like */}
//       {/* no need to pass any aditional info, the data is added from form, the results are the input with corresponding input label */}
//       <ValidForm Inputs={state} setInputs={setState} handleChange={handleFormChange} />
//       <ValidFormData data={state} />
//     </div>
//   );
// }

// export default App;


/* THIS CODE WAS USED FOR ALL THE COMPONENT ASSIGNMENTS */
/* I WILL BE USING DIFFERENT COMPONENTS ON EACH PROJECT SAME NAME */







/* 
//CODE FOR FIRST JSX
  // <h1>Hello Dojo</h1>
  //   <h3>Things I Need To  Do:</h3>
  //   <table>
  //     <ul>
  //       <li>Learn React</li>
  //       <li>Climb Mt. Everest</li>
  //       <li>Run a marathon</li>
  //       <li>Feed The Dogs</li>
  //     </ul>
  //   </table>
  //     <Example/>    


  //Ploting Blocks

// import React from 'react';
// import './App.css';
// import Header from './Components/Header';
// import Navigation from './Components/Navigation';
// import Main from './Components/Main';
// import SubContents from './Components/SubContents';
// import Advertisement from './Components/Advertisement';


// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <Navigation />
//       <Main>
//         <SubContents />
//         <SubContents />
//         <SubContents />
//         <Advertisement />
//       </Main>
//     </div>
//   );
// }

// export default App; */