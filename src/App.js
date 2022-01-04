import React, { useEffect } from "react";
import NavBar from "./NavBar";
// import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Hotel from "./DynamicRouting/Hotel";
import About from "./Component/About";
import Signup from "./Signup";
import Room from "./DynamicRouting/Room";
import LifeCycle from './LifeCycle';
import ContextUsage from "./context/ContextComponent";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const payload = {
    email : "taliha@gmaill.com",
    password: "1234"
  }
  useEffect(() => {
    dispatch({type: "userLogin", payload});
  }, []);
  const user = useSelector(state => state.email);
  console.log("user", user);

  return (
    <div>

      {/* exact matchs exactly  but if not use will partially match*/}

      <NavBar headings={["Hotel", "Signup", "About", "Profile"]} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path = "/Hotel" element={ <Hotel/> } />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route path="/room/:id" element={< Room />}/>
        <Route path = '/lifecycle' element={< LifeCycle />}/>
        <Route path = '/context' element={< ContextUsage />}/>
        <Route path = '/Profile' element= {<Profile />} />

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