import React from "react";
import NavBar from "./NavBar";
import Signup from "./Signup";

function App(){
  return(
    <div>
      <NavBar headings = {["Hotel", "Login", "About"]} />
      <Signup/>
    </div>
  );
}
export default App;

//state 
//some kind of data on based of which app renders 


// //set the initial state to 0
// const [count, setCount] = useState(0);

// //whenever clicks on button value of count will be incremented.
// const increment = () => {
//   setCount(count+1);
// }

// return(
//   <div>
//     <Hello name = "hello1" />
//     <Hello name = "hello2" /><br></br>
//     <button onClick={increment}>Increment</button>
//     <h1>{count}</h1>
//   </div>
// );