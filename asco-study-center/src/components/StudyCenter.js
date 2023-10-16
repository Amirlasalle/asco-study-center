import React, { useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';
import '../App.css'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import studycenterData from './studycenter.json';
import 'bootstrap/dist/css/bootstrap.min.css';



const StudyCenter = ({ handlePageChange }) => {
    useEffect(() => {
        const flCardEl = document.querySelector('.flip-card');
        const qEl = document.getElementById('studyQuestion');
        const aEl = document.getElementById('studyAnswer');
        let Qno = 0;

        function displayCard() {
            Qno = Math.floor(Math.random() * studycenterData.length);
            qEl.innerText = studycenterData[Qno].studyQuestion;
            aEl.innerText = studycenterData[Qno].studyAnswer;
        }

        document.getElementById('cardsButton').addEventListener('click', function () {
            flCardEl.style.display = 'block';
            displayCard();
        });

        displayCard();
    }, []);
    const nextIconStyle = {
        fontSize: '10vw',
        fontWeight: 'bolder',
    };
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

        <div className="quizzes">
            <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around quizzes">

                <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around banner">


                    <div className="banner">
                        <Image src={process.env.PUBLIC_URL + "/assets/short/booksshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around sc-banner-image banner" />
                        <h1 className='mt-0 mb-auto d-flex flex-column justify-content-center banner-text banner text-center'>STUDY CENTER</h1>


                    </div>
                </Container>

                <div>
                    <Row className='mt-4  about'>
                        <h3 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about-asco-text about">Seeking knowledge puts the power in  ASCO Power Technology
                        </h3>
                        <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">ASCO Power Technology offers a unique and rewarding journey into the world of cutting-edge power solutions. ASCO has been at the forefront of power transfer and control systems for decades, and delving into this field allows us to explore the intersection of innovation, reliability, and efficiency. ASCO technology provides an ideal subject of study. By engaging with ASCO's products, applications, and historical developments, we gain insights into the core principles of power management and the practical solutions that keep the world running smoothly.
                        </p>
                    </Row>
                </div>
                <div className='about'>
                    <Row className='mt-4'>
                        <div id="homepageCards" className="d-flex flex-wrap justify-content-around ">
                            <h2 className="mb-4 text-center section-title w-100" >
                                Flash Cards
                            </h2>
                        </div>
                        <Container className='mb-5'>
                            <h5 className="mt-3 mb-2 pl-5 pr-5 justify-content-center text-center about-asco-text-smaller">Hover over the flash card to reveal the answer
                            </h5>
                            <div className="d-flex flex-wrap justify-content-around">
                                <div className="m-2 p-2 flip-card" style={{ width: '25rem' }}>
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front" style={{ backgroundColor: '#fff', color: '#000' }}>
                                            <p id="studyQuestion" className='pl-3 pr-3'></p>
                                        </div>
                                        <div className="flip-card-back" style={{ backgroundColor: '#3dcd58', color: 'white' }}>
                                            <p id="studyAnswer"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-wrap justify-content-around align-items-center cardsButton'>
                                <Button id="cardsButton" variant='info'>Next Flash Card</Button>
                            </div>
                        </Container>

                    </Row>
                </div>
                <div>
                    <Row className='mt-4  about'>
                        <h2 className="mb-2 mt-3 text-center section-divider w-100" >
                        </h2>
                        <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Why it's Always constant learning at ASCO?
                        </h3>
                        <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">At ASCO Power technology, studying is what keeps us innovativing power solutions, providing insights into electrical engineering, automation, and critical power reliability. Constant Research allows ASCO's products and applications to be the number one solution in the power industry.
                        </p>
                        <h2 className="mb-2 mt-3 text-center section-divider w-100" >
                        </h2>
                      
                    </Row>
                </div>
                <div>
                    <Row className='mt-4  about'>
                        <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Explore the Quiz Center
                        </h3>
                        <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Take the next steps to challenging what you've Learned so far!
                        </p>
                        <div className="d-flex justify-content-center">
                            <Link to="/quizcenter" onClick={() => handleNavLinkClick('/quizcenter')} className='custom-link'>
                                <Button variant="info" size="md" className="carousel-btn   mx-auto m-2 " style={{ maxWidth: '200px' }}><a href='#studycenter' className="btn1" >Quiz Center  <span><i class="fa fa-book" aria-hidden="true"></i></span></a></Button>
                            </Link>

                        </div>
                      
                    </Row>
                </div>
            

                <div id="carousel" className="carousel">
                    <Row className="mt-3 mb-0" >
                        <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
                            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}>
                            <Carousel.Item className="carousel">
                                <Image src={process.env.PUBLIC_URL + "/assets/short/nycdayshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
                                <Carousel.Caption className='  about-outlined-cap'>
                                    <h5 className='about-outlined-cap'>
                                        Solutions in Critical Power,<br></br>Resolving every challenge,<br></br>
                                        Light in darkest hour.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="carousel">
                                <Image src={process.env.PUBLIC_URL + "/assets/short/tokyosdigitalshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
                                <Carousel.Caption className='  about-outlined-cap'>
                                    <h5 className='  about-outlined-cap'>
                                        Reliable and strong,<br></br>
                                        ASCO powers the future,<br></br>
                                        Innovation's song.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </div>



            </Container >
        </div >


    )
}


export default StudyCenter;