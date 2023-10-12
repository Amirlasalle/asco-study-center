import React from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
// import CarouselCaption from 'react-bootstrap/CarouselCaption'
// import CarouselItem from 'react-bootstrap/CarouselItem'
import { useState } from 'react';
import homepagecardsData from "../components/homepagecards.json"
import Card from 'react-bootstrap/Card';
import '../App.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';




const PageContainer = () => {
  const nextIconStyle = {
    fontSize: '10vw',
    fontWeight: 'bolder',
  };

  const [homepagecards] = useState(homepagecardsData)
  console.log(homepagecards)
  return (


    <div className="home">
      <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">

        <div id="carousel" className="carousel">
          <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}>

            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/nycshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h5 className='outlined-text'>ASCO Power Technologies ensures uninterrupted operational performance</h5>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}>
                    <a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1">Learn More </a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/asco7000bypassiso.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h5 className='outlined-text'>Keep seeking knowledge!</h5>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}>
                    <a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJez1dBGsC9SoOuQas0pFk2' target="_blank" rel="noreferrer" className="btn1">Start Learning <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/ascoworking.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h5 className='outlined-text'>Meet the people of ASCO, and hear their story. Strive to the top!</h5>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}>
                    <a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJd84_uDBxlwXH9_67b7o_Y' target="_blank" rel="noreferrer" className="btn1">Team ASCO <span><i class="fa fa-users" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/qcshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h5 className='outlined-text'>ASCO Quick Connects ensure a reliable way to connect generators to infrastructures.</h5>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}>
                    <a href='https://www.youtube.com/watch?v=lbs_BC8cQwo' target="_blank" rel="noreferrer" className="btn1">Learn More <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/ascodigitalbinder.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h5 className='outlined-text'>ASCO's Digital Binder provides a various source of information</h5>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}>
                    <a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1">Read More <span><i class="fa fa-book" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/short/datacenter-short.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h5 className='outlined-text'>Data Centers nationwide trust ASCO for unmatched reliability</h5>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '250px' }}>
                    <a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1">Customer Testimonials <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>


            <Carousel.Item className="carousel">
              <Image src={process.env.PUBLIC_URL + "/assets/ascohealthcare.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                <h5 className='outlined-text'>Residential Healthcare meets our Backup Power Solutions</h5>
                <div className="button-container">
                  <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '150px' }}>
                    <a href='https://www.youtube.com/watch?v=wdvqnmcBFpo&t=1s' target="_blank" rel="noreferrer" className="btn1">Watch Now <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a>
                  </Button>
                </div>
              </Carousel.Caption>

            </Carousel.Item>



          </Carousel>
        </div>


        <Row className='mt-4'>
          <div className="mt-5 mb-3 text-left welcome">
            <h3 className="" ><br></br><br></br>Welcome to the ASCO SDP Study Center! This is the starting point of your knowledge journey. Are you prepared?</h3>

            <div className="d-flex justify-content-center">
              <Button variant="info" size="md" className="carousel-btn   mx-auto m-2 " style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/watch?v=wdvqnmcBFpo&t=1s' target="_blank" rel="noreferrer" className="btn1" >Start Learning <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>
            </div>
          </div>
          <div id="homepageCards" className="d-flex flex-wrap justify-content-around ">
            {homepagecards.map((project, key) =>

              <Card key={key} variant="secondary" className="m-2 p-2 " style={{ width: '18rem', borderColor: "#fff", backgroundColor: "#3dcd58", boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}>
                <Card.Body>
                  <Card.Title className="text-light title">{project.title}</Card.Title><iframe width="240vw" height="auto" src={project.contentUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <Card.Text className="text-white">{project.description}
                  </Card.Text>
                  <Card.Text>{project.brief2}
                  </Card.Text>
                  <Card.Text>{project.brief3}
                  </Card.Text>
                  <Button variant="secondary" size="md" className="mb-1 mt-auto" ><a href={project.contentUrlButton} target="_blank" rel="noreferrer" className="btn1" >More information <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>
                  {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
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


export default PageContainer;