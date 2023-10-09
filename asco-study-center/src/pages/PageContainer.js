import React from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';




const PageContainer = () => {
  const nextIconStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
  };
  return (
    <div id="root">

      <div>
        <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around mt-3">


          <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
            prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/atslinedup.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h2 className='position-relativeslide-title outlined-text'>ASCO Power Technologies ensures uninterrupted operational performance</h2><br></br>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}>
                  <a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1">Learn More</a>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/7000bypass.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h2 className='position-relativeslide-title outlined-text'>Keep seeking knowledge!</h2><br></br>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJez1dBGsC9SoOuQas0pFk2' target="_blank" rel="noreferrer" className="btn1" >Start Learning <span><i class="fa fa-film" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascoworking.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h2 className='position-relativeslide-title outlined-text'>Meet the people of ASCO, and hear their story. Strive to the top!</h2><br></br>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJd84_uDBxlwXH9_67b7o_Y' target="_blank" rel="noreferrer" className="btn1" >Team ASCO <span><i class="fa fa-users" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/nts.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>

                <h2 className='position-relativeslide-title outlined-text'>ASCO offers the Non-Automatic Transfer Switch as a Manual Switch alternative</h2>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/watch?v=lbs_BC8cQwo' target="_blank" rel="noreferrer" className="btn1" >Learn More <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodigitalbinder.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />


              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h2 className='position-relativeslide-title outlined-text'>ASCO's Digital Binder provides a various source of information</h2><br></br>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://asco-power.cld.bz/ASCO-Power-Technologies-Products-Digital-Binder' target="_blank" rel="noreferrer" className="btn1" >Read More <span><i class="fa fa-book" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodatacenter.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h2 className='position-relativeslide-title outlined-text'>Data Centers nationwide trust ASCO for unmatched reliability</h2><br></br>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '220px' }}><a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1" >Customer Testimonials <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascohealthcare.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />

              <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center position-relativeslide-title outlined-text text-center'>
                <h2 className='position-relativeslide-title outlined-text'>Residential Healthcare meets our Backup Power Solutions</h2><br></br>
                <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '200px' }}><a href='https://www.youtube.com/watch?v=wdvqnmcBFpo&t=1s' target="_blank" rel="noreferrer" className="btn1" >Watch Now <span><i class="fa fa-film" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>



          <Row className='d-flex flex-wrap justify-content-around quotetext'>
            <Col xs={10} md={10}>
              <p className='d-flex flex-wrap justify-content-around quotetext'>Welcome to the ASCO SDP Study Center! This is the starting point of our knowledge journey. Are you prepared?</p>
            </Col>
          </Row>

          {/* <Row>
            <Carousel slide={false}>
              <Carousel.Item>
                <div className="m-5 video-container  justify-content-around">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XbeMdqJUh8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </Carousel.Item>
            </Carousel>
          </Row> */}
        </Container>
      </div>


    </div>)
}


export default PageContainer;