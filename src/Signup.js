import React, {useState} from "react";
import './Signup.css';
import { Form,  Button, Container, Row, Col } from "react-bootstrap";

function Signup(){
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const [password, setPassword] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const SignupApi = () => {
        console.log(email);
        console.log(password);
    }
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
                        <Button variant="primary" type="submit"  onClick={SignupApi}>
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