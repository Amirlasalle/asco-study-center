import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';


const NavigationBar = ({ handlePageChange }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef(null);

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (navbarRef.current && !navbarRef.current.contains(e.target)) {
                closeNavbar();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    };


    const handleNavLinkClick = (url) => {
        scrollToTop();
        navigate(url);
    };


    return (
        <div role='navigation' className='bg-body-tertiary mar'>
            <Navbar className="fixed-top custom-links bg-body-tertiary" bg="light" expand="lg" ref={navbarRef} expanded={isNavbarOpen}>
                <Container fluid text-center>
                    <Navbar.Brand className='navbarBrand'>
                        <Nav.Link>
                            <Link to="/" onClick={() => handleNavLinkClick('/')}className='custom-link'> <Image className='asco-logo' src={process.env.PUBLIC_URL + '/assets/asco-power-logo.png'} fluid />
                            </Link>

                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='toggle' onClick={toggleNavbar} />
                    <Navbar.Collapse id="navbarScroll" className={`navbar-scroll ${isNavbarOpen ? 'show' : ''}`}>
                        <Nav className="ml-auto mr-auto my-8 my-lg-4 outline-success navtext" navbarScroll>
                            <Nav.Link>
                                <Link to="/aboutasco" onClick={() => handleNavLinkClick('/aboutasco')} className='custom-link'>
                                    About Asco
                                </Link>
                            </Nav.Link>


                            <Nav.Link>
                                <Link to="/products" onClick={() => handleNavLinkClick('/products')} className='custom-link'>
                                    Our Products
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/studycenter" onClick={() => handleNavLinkClick('/studycenter')}className='custom-link'>
                                    Study Center
                                </Link>

                            </Nav.Link>

                            <NavDropdown title="Quizzes" id="navDropdown" className='navbar-static  custom-links text'>
                                <NavDropdown.Item>
                                    <Link to="/quizcenterone" onClick={() => handleNavLinkClick('/quizcenterone')} style={{ textDecoration: 'none' }} className=' custom-links'>Quiz 1<span>{''}</span><span>{''}</span> <span className="smaller" style={{ display: 'inline-block', verticalAlign: 'top' }}>
                                    Difficulty<br /> Level
                                </span><i class="justify-content-between ml-2 fa fa-star" aria-hidden="true"></i></Link>

                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/quizcentertwo" onClick={() => handleNavLinkClick('/quizcentertwo')} className='custom-links'> <h >Quiz 2<span>{''}</span><span>{''}</span> <span className="smaller" style={{ display: 'inline-block', verticalAlign: 'top' }}> Difficulty<br /> Level
                                </span><i class="justify-content-between ml-2 fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></h></Link>

                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/quizcenterthree" onClick={() => handleNavLinkClick('/quizcenterthree')}className='custom-links'>Quiz 3<span>{''}</span><span>{''}</span> <span className="smaller" style={{ display: 'inline-block', verticalAlign: 'top' }}>
                                    Difficulty<br /> Level
                                </span><i class="justify-content-between ml-2 fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></Link>

                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Social Media" id="navDropdown" className=' pr-0 custom-links '>
                                <NavDropdown.Item
                                    href="https://www.youtube.com/@ASCOPowerTechnologies" target="_blank" rel="noreferrer"
                                    onClick={() => handlePageChange()}
                                    className="custom-links"
                                >
                                    YouTube<span>{' '}</span><span><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="https://www.linkedin.com/company/ascopowertechnologies/" target="_blank" rel="noreferrer"
                                    onClick={() => handlePageChange()}
                                    className="custom-links"
                                >
                                    LinkedIn<span>{' '}</span><span><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="https://twitter.com/ascopower?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer"
                                    onClick={() => handlePageChange()}
                                    className="custom-links"
                                >
                                    Twitter<span>{' '}</span><span><i class="fa fa-twitter-square" aria-hidden="true"></i></span>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
