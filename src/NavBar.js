import React from "react";
import { Navbar,  Container, Nav} from "react-bootstrap";


function NavBar(props){
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            {props.headings.map((value)=>{
                return <Nav.Link href={value} key = {value} >{value}</Nav.Link>
            })}
            </Nav>
            </Container>
        </Navbar>
        <br />
        </>
    );
}
export default NavBar;