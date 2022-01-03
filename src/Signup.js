import React, {useState, useContext} from "react";
import './Signup.css';
import { Form,  Button, Container, Row, Col } from "react-bootstrap";
// import { MovieContext } from "./context/MovieContext";
import store from "./Redux/store";
import { getHotels, userLogin } from "./Redux/Actions/action";
import axios from "axios";

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //console.log(MovieContext);
    // const [movies, setMovies] = useContext(MovieContext);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const SignupApi = () => {
        console.log(email);
        console.log(password);
        // setMovies(prevMovies => [...prevMovies, {name:email, price: password, id: 6}]);
        axios.post("http://localhost:3000/user/login", {
            "email": email,
            "password": password
        }).then((response) => {
            console.log(response.data);
            store.dispatch(userLogin(response.data.id, response.data.name, response.data.email))
            store.dispatch(getHotels(1));
        }).catch((err) => {
            console.log(err.message);
        })
        
    }
    // const removeUser = (id) => {
    //     setMovies(movies.filter(movie => movie.id !== id))
    // }
    //needs when type submit is set to prevent page reload
    // const handleSubmit = (e) => {
    //     e.preventDefault(); 
    //     console.log('You clicked submit.');
    // }
    return(
        <div>
            <Container >
                <Form className = "form-horizontal">
                <Row className="d-flex justify-content-center">
                    <Col md = {7} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  value={email} onChange={handleEmailChange}/>
                        </Form.Group>
                    </Col>
                    <Col md = {7}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                            <h1>{password}</h1>
                        </Form.Group>
                    </Col>
                    <Col md = {6}>
                        <Button variant="primary"  onClick={SignupApi}>
                            Submit
                        </Button>
                    </Col>
                    
                </Row>
                </Form>
            </Container> 
        </div>
    );
}
export default Signup;