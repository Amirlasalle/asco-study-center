import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import '../App.css';
import { Link } from 'react-router-dom';

const NavigationBar = ({ page, handlePageChange }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>
                    <Nav.Link
                        href="#home"
                    ><Link to="/" className='custom-link'> <Image className='asco-logo' src={process.env.PUBLIC_URL + '/assets/asco-logo.png'} fluid />
                        </Link>

                    </Nav.Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" className='toggle' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ml-auto mr-auto my-8 my-lg-4 outline-success navtext" navbarScroll>
                        <Nav.Link
                            href="#aboutasco"
                        >
                            <Link to="/aboutasco" className='custom-link'>
                                About Asco
                            </Link>
                        </Nav.Link>

                        <Nav.Link
                            href="#products"><Link to="/products" className='custom-link'>
                                Our Products
                            </Link>
                        </Nav.Link>

                        <Nav.Link
                            href="#studycenter"><Link to="/studycenter" className='custom-link'>
                                Study Center
                            </Link>

                        </Nav.Link>

                        <NavDropdown title="Quizes" id="navDropdown" className='custom-link'>
                            <NavDropdown.Item
                                href="#quizcenterone"
                            ><Link to="/quizcenterone" className='custom-link'>Quiz 1</Link>

                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                href="#quizcenterone"
                            ><Link to="/quizcenterone" className='custom-link'>Quiz 2</Link>

                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                href="#quizcenterone"
                            ><Link to="/quizcenterone" className='custom-link'>Quiz 3</Link>

                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Contact" id="navDropdown">
                            <NavDropdown.Item
                                href="tel:+1(631)925-8216"
                                onClick={() => handlePageChange()}
                                className="custom-link"
                            >
                                YouTube<span><i class="fa fa-youtube" aria-hidden="true"></i></span>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                href="https://www.linkedin.com/in/amirlasalle/"
                                onClick={() => handlePageChange()}
                                className="custom-link"
                            >
                                Contact 2
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                href="mailto:mirolasalle@gmail.com"
                                onClick={() => handlePageChange()}
                                className="custom-link"
                            >
                                Contact 3
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
