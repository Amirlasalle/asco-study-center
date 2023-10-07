import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import '../App.css'

const NavigationBar = ({ page, handlePageChange }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid >
                <Navbar.Brand><Nav.Link href="#home"
                    onClick={() => handlePageChange("home")}
                ><Image className='asco-logo' src={process.env.PUBLIC_URL + '/assets/asco-logo.png'} fluid /></Nav.Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" className='toggle' />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="ml-auto mr-auto my-8 my-lg-4 outline-success navtext"
  
                        navbarScroll
                    >
                        <Nav.Link
                            href="#aboutasco"
                            onClick={() => handlePageChange("aboutasco")} className="custom-link"
                        >About Asco
                        </Nav.Link>
                        <NavDropdown title="Contact" id="navDropdown">
                            <NavDropdown.Item href="tel:+1(631)925-8216" onClick={() => handlePageChange()} className="custom-link">something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.linkedin.com/in/amirlasalle/" onClick={() => handlePageChange()} className="custom-link">something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="mailto:mirolasalle@gmail.com" onClick={() => handlePageChange()} className="custom-link">something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#study-center"
                            onClick={() => handlePageChange("studycenter")} className="custom-link"
                        >Study Center</Nav.Link>
                        <Nav.Link href="#Proucts"
                            onClick={() => handlePageChange("products")} className="custom-link"
                        >Our Products</Nav.Link>




                        <NavDropdown title="Links" id="navDropdown">
                            <NavDropdown.Item href="https://www.github.com/amirlasalle" target="_blank" rel="noreferrer" onClick={() => handlePageChange()} className="custom-link">something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.linkedin.com/in/amirlasalle/" target="_blank" rel="noreferrer" onClick={() => handlePageChange()} className="custom-link">
                                something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.instagram.com/ichigo23__/" target="_blank" rel="noreferrer" onClick={() => handlePageChange()} className="custom-link">something
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );


}
export default NavigationBar;
