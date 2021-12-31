import React from "react";
import NavBar from "./NavBar";
// import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hotel from "./Hotel";
import About from "./About";
import Signup from "./Signup";
import Room from "./Room";
import LifeCycle from './LifeCycle';


function App() {
  return (
    <div>

      {/* exact matchs exactly  but if not use will partially match*/}

      <NavBar headings={["Hotel", "Signup", "About"]} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path = "/Hotel" element={ <Hotel/> } />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route path="/room/:id" element={< Room />}/>
        <Route path = '/lifecycle' element={< LifeCycle />}/>
      </Routes>

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