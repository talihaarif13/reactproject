import React from "react";
import { Navbar,  Container, Nav} from "react-bootstrap";
import {Link } from "react-router-dom";

function NavBar(props){
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand > <Link to='/'> HBS </Link></Navbar.Brand>
            <Nav className="me-auto">
            {props.headings.map((value)=>{
                return <Nav.Link as={Link} to={'/'+value} key ={value} >{value}</Nav.Link>
            })}
            </Nav>
            </Container>
        </Navbar>
        <br />
        </>
    );
}
export default NavBar;