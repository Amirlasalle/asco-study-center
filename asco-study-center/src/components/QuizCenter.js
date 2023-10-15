import React from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import quizzesData from './quizzes.json';
import examsData from './exams.json';
import Card from 'react-bootstrap/Card';
import '../App.css'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';




const Quizzes = ({ handlePageChange }) => {
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

    const [quizzes] = useState(quizzesData)
    console.log(quizzes)

    const [exams] = useState(examsData)
    console.log(exams)
    return (

        <div className="quizzes">
            <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around quizzes">

                <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around banner">


                    <div className="banner">
                        <Image src={process.env.PUBLIC_URL + "/assets/tokyostreetbright.jpg"} className="img-fluid d-flex flex-wrap justify-content-around banner-image banner" />
                        <h1 className='mt-0 mb-auto d-flex flex-column justify-content-center banner-text banner text-center'>QUIZ CENTER</h1>


                    </div>
                </Container>






                {/* Take the next steps to challenging what you've Learned so far. below you'll find and Abundance of test and quizzes to help you see where you're at. so are you ready to show off your ASCO knowledge */}
                <Row className='mt-4'>
                    <div className="mt-1 mb-4 pb-2 text-left quiz-welcome">
                        <h3 className="mt-2 m-2 text-center">Welcome to the Quiz Center! Explore & test your knowledge!</h3><br></br> <p className="m-4" > Get ready to take the next steps in challenging what you've learned so far. Below, you'll discover a wealth of tests and quizzes to evaluate your ASCO knowledge. Are you prepared to showcase your expertise?</p><br></br><p>Looking for some extra time to review? Explore the Study Center.</p>

                        <div className="d-flex justify-content-center">
                            <Link to="/studycenter" onClick={() => handleNavLinkClick('/studycenter')} className='custom-link'>
                                <Button variant="info" size="md" className="carousel-btn   mx-auto m-2 " style={{ maxWidth: '200px' }}><a href='#studycenter' className="btn1" >Study More <span><i class="fa fa-book" aria-hidden="true"></i></span></a></Button>
                            </Link>

                        </div>
                    </div>
                    {/* <h2 className="mb-2 mt-3 text-center section-divider w-100" >
                    </h2> */}
                    <div className="mb-2">
                        <h5 className="ml-3 smaller font-weight-normal">
                            Note: All quizzes will start once directed to the page.
                        </h5>

                    </div>

                    <div id="homepageCards" className="d-flex flex-wrap justify-content-around ">
                        <h2 className="mb-4 text-center section-title w-100" >
                            Quizzes
                        </h2>
                        {quizzes.map((quizzes, key) =>

                            <Card key={key} variant="secondary" className="m-2 p-2 quiz-cards" style={{ width: '18rem', backgroundColor: "#3dcd58", boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}>
                                <Card.Body>
                                    <Card.Title className="text-light title">{quizzes.title}</Card.Title> <Card.Text className="text-white">Difficulty Level:  {quizzes.difficultyLevel}
                                    </Card.Text>
                                    <Card.Text className="text-white">Duration: {quizzes.duration} mins
                                    </Card.Text>
                                    <Card.Text className="text-white">{quizzes.description}
                                    </Card.Text>
                                    <Button variant="info" size="md" className="mb-1 mt-auto" ><a href={quizzes.pageUrlButton} target="_blank" rel="noreferrer" className="btn1">{quizzes.quizNumber}</a></Button>

                                </Card.Body>
                            </Card>

                        )}
                    </div>
                </Row>
                <h2 className="mb-2 mt-3 text-center section-divider w-100" >
                </h2>

                <Row className='mt-4'>
                    <div className="mt-1 mb-4 pb-2 text-left quiz-welcome">
                        <h3 className="mt-2 ml-2 text-center">Are you ready to turn it up a notch?</h3><br></br>
                        <p className="text-left m-4 quiz-intruction">Below, you will discover a set of 20-question exams (some of which may include bonus questions) designed to evaluate your knowledge of ASCO. These exams span a spectrum from easy to challenging.</p>

                        <p className="text-left m-4 quiz-intruction">Here is a quick overview of the exam structure:</p>
                        <ul className="text-left m-4 quiz-intruction">
                            <li>10 multiple choice questions</li>
                            <li>10 True or False questions</li>
                            <li>You will have 20 minutes to finish each exam.</li>
                            <li>The time will be prominently displayed in seconds.</li>
                            <li>Please keep in mind that the timer begins as soon as you open the exam.</li>
                        </ul><br></br>


                        {/* <p className="text-left m-4 quiz-intruction" >Below, you'll find a series of 20-question  exams(exams may contain bonus questions) that will assess your ASCO knowledge, ranging from easy to challenging.<br></br><p>Here are the quick layout of the exams</p><li>10 multiple choice questions</li><li>10 True or False</li><li>You will be given 20 minutes to complete an exam. </li><li>Time will be displayed in seconds</li><li>Remember timer starts as soon as exam is open.</li><br></br></p><br></br> */}
                        <p className="text-center">Good Luck!</p><br></br><p>Be sure to review ASCO's Digital Binder</p>
                        <div className="d-flex justify-content-center">

                            <Button variant="info" size="md" className="carousel-btn   mx-auto m-2 " style={{ maxWidth: '200px' }}><a href='https://asco-power.cld.bz/ASCO-Power-Technologies-Products-Digital-Binder' target="_blank" rel="noreferrer" className="btn1" >Digital Binder <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>


                        </div>
                    </div>
                    <div id="homepageCards" className="d-flex flex-wrap justify-content-around ">
                        <h2 className="mb-4 text-center section-title w-100" >
                            Exams
                        </h2>
                        {exams.map((exams, key) =>

                            <Card key={key} variant="secondary" className="m-2 p-2 quiz-cards" style={{ width: '18rem', backgroundColor: "#3dcd58", boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}>
                                <Card.Body>
                                    <Card.Title className="text-light title">{exams.title}</Card.Title> <Card.Text className="text-white">Difficulty Level:  {exams.difficultyLevel}
                                    </Card.Text>
                                    <Card.Text className="text-white">{exams.bonus}
                                    </Card.Text>
                                    <Card.Text className="text-white">Duration: {exams.duration} mins
                                    </Card.Text>
                                    <Card.Text className="text-white">{exams.description}
                                    </Card.Text>
                                    <Button variant="info" size="md" className="mb-1 mt-auto" ><a href={exams.pageUrlButton} target="_blank" rel="noreferrer" className="btn1">{exams.quizNumber}</a></Button>

                                </Card.Body>
                            </Card>

                        )}
                    </div>
                </Row>

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



            </Container>
        </div>


    )
}


export default Quizzes;