import React from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
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
    fontSize: '3rem',
    fontWeight: 'bolder',
  };
  const [homepagecards] = useState(homepagecardsData)
  console.log(homepagecards)
  return (
    <div id="root">

      <div>
        <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around mt-3">


          <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/atslinedup.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h className='position-relativeslide-title outlined-text'>ASCO Power Technologies ensures uninterrupted operational performance</h>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}>
                  <a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1">Learn More</a>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/7000bypass.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h className='position-relativeslide-title outlined-text'>Keep seeking knowledge!</h>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJez1dBGsC9SoOuQas0pFk2' target="_blank" rel="noreferrer" className="btn1" >Start Learning <span><i class="fa fa-film" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascoworking.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h className='position-relativeslide-title outlined-text'>Meet the people of ASCO, and hear their story. Strive to the top!</h>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJd84_uDBxlwXH9_67b7o_Y' target="_blank" rel="noreferrer" className="btn1" >Team ASCO <span><i class="fa fa-users" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/nts.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>

                <h className='position-relativeslide-title outlined-text'>ASCO offers the Non-Automatic Transfer Switch as a Manual Switch alternative</h>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/watch?v=lbs_BC8cQwo' target="_blank" rel="noreferrer" className="btn1" >Learn More <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodigitalbinder.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />


              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h className='position-relativeslide-title outlined-text'>ASCO's Digital Binder provides a various source of information</h>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://asco-power.cld.bz/ASCO-Power-Technologies-Products-Digital-Binder' target="_blank" rel="noreferrer" className="btn1" >Read More <span><i class="fa fa-book" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodatacenter.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h className='position-relativeslide-title outlined-text'>Data Centers nationwide trust ASCO for unmatched reliability</h>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '220px' }}><a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1" >Customer Testimonials <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascohealthcare.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h className='position-relativeslide-title outlined-text'>Residential Healthcare meets our Backup Power Solutions</h>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/watch?v=wdvqnmcBFpo&t=1s' target="_blank" rel="noreferrer" className="btn1" >Watch Now <span><i class="fa fa-film" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>



 <Row className='mt-4 custom-color'>
        <h3 className="mt-3 mb-3 bg-white text-left timeline-title">Welcome to the ASCO SDP Study Center! This is the starting point of our knowledge journey. Are you prepared?</h3>
        <div id="ascotimeline" className="d-flex flex-wrap justify-content-around ">
          {homepagecards.map((project, key) =>

            <Card key={key} className="m-2 p-2 shadow-lg" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{project.year}</Card.Title>
                <Card.Text>{project.brief}
                </Card.Text>
                <Card.Text>{project.brief2}
                </Card.Text>
                <Card.Text>{project.brief3}
                </Card.Text>

                {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>

          )}
        </div>
      </Row>
          <Row className="mt-3" >

<Col >
  <Carousel slide={false}><Carousel.Item>
    <Image src={process.env.PUBLIC_URL + "/assets/nasa.jpg"} className="img-fluid d-flex flex-wrap justify-content-around about-slide-image" />
    <Carousel.Caption className='position-relativeslide-title about-outlined-text'>
      <h5 className='position-relativeslide-title about-outlined-text'>
        At ASCO Power Technologies, we have a long history of innovation. We are on a constant drive to bring new technologies and new products to our customers to help them become more productive.</h5><br></br>
    </Carousel.Caption>
  </Carousel.Item>
    <Carousel.Item>
      <Image src={process.env.PUBLIC_URL + "/assets/nyc.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around about-slide-image" />
      <Carousel.Caption className='position-relativeslide-title about-outlined-cap'>
        <h5 className='position-relativeslide-title about-outlined-text'>
          At ASCO, we have a long history of innovation. In fact, it's part of our DNA. Since 1888, ASCO has prided itself on providing cutting edge technology and never compromising on quality.</h5><br></br>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Col>


</Row>
        </Container>
      </div>


    </div>)
}


export default PageContainer;