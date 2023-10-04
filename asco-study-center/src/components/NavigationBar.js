import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

const NavigationBar = ({ page, handlePageChange }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand><Nav.Link href="#home"
                    onClick={() => handlePageChange("home")}
                    ><Image className='asco-logo' src={process.env.PUBLIC_URL + '/assets/asco-logo.png'} fluid /></Nav.Link></Navbar.Brand>
              
                <Navbar.Toggle aria-controls="navbarScroll" className='toggle' />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="ml-auto my-8 my-lg-4 navtext"
                        // style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#aboutme"
                            onClick={() => handlePageChange("aboutme")}
                        >About ASCO</Nav.Link>
                        <NavDropdown title="Contact" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="tel:+1(631)925-8216" onClick={() => handlePageChange()}>
                                Direct Phone: +1 (631)925-8216
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.linkedin.com/in/amirlasalle/" onClick={() => handlePageChange()}>
                                LinkedIn
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="mailto:mirolasalle@gmail.com" onClick={() => handlePageChange()}>
                                E-mail
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#resume"
                            onClick={() => handlePageChange("resume")}
                        >Resume</Nav.Link>
                        <Nav.Link href="#portfolio"
                            onClick={() => handlePageChange("portfolio")}
                        >Portfolio</Nav.Link>




                        <NavDropdown title="Links" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="https://www.github.com/amirlasalle" target="_blank" rel="noreferrer" onClick={() => handlePageChange()}>
                                Github
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.linkedin.com/in/amirlasalle/" target="_blank" rel="noreferrer" onClick={() => handlePageChange()}>
                                LinkedIn
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.instagram.com/ichigo23__/" target="_blank" rel="noreferrer" onClick={() => handlePageChange()}>
                                Instagram
                            </NavDropdown.Item>
                        </NavDropdown>


                        {/* <Nav.Link href="https://www.github.com/amirlasalle">
                            Github
                        </Nav.Link> */}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );


}
export default NavigationBar;
