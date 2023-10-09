import React from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Row from "react-bootstrap/esm/Row";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import Button from 'react-bootstrap/Button';




const PageContainer = () => {

  return (
    <div id="root">

      <div>
        <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around mt-3">


          <Carousel slide={false}>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/atslinedup.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h4 className='position-relativeslide-title outlined-text'>ASCO Power Technologies ensures uninterrupted operational performance.</h4><br></br>
                <Button variant="info" size="md" className="carousel-btn"><a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1" >Learn More</a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/7000bypass.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h2 className='position-relativeslide-title outlined-text'>Keep seeking knowledge!</h2><br></br>
                <Button variant="info" size="md" ><a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJez1dBGsC9SoOuQas0pFk2' target="_blank" rel="noreferrer" className="btn1" >Start Learning <span><i class="fa fa-film" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascoworking.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h2 className='position-relativeslide-title outlined-text'>Meet the people of ASCO, and hear their story. Strive to the top!</h2><br></br>
                <Button variant="info" size="md" ><a href='https://www.youtube.com/playlist?list=PLOm6FLTQtSyJd84_uDBxlwXH9_67b7o_Y' target="_blank" rel="noreferrer" className="btn1" >Team ASCO <span><i class="fa fa-users" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/nts.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption className=' mt-0 mb-auto  justify-content-center position-relativeslide-title outlined-text'>
                <h2 className='d-flex justify-content-space-around position-relativeslide-title outlined-text'>ASCO Power Technologies and the NTS{'(Non-Automatic Transfer Switch)'} and why it might be a great alternative for a Manual Transfer Switch.</h2>
                <Button variant="info" size="md" className="mt-0"><a href='https://www.youtube.com/watch?v=lbs_BC8cQwo' target="_blank" rel="noreferrer" className="btn1" >Learn More</a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodigitalbinder.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h2 className='position-relativeslide-title outlined-text'>ASCO's Digital Binder provides a various source of information.</h2><br></br>
                <Button variant="info" size="md" ><a href='https://asco-power.cld.bz/ASCO-Power-Technologies-Products-Digital-Binder' target="_blank" rel="noreferrer" className="btn1" >Read More <span><i class="fa fa-book" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodatacenter.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h2 className='position-relativeslide-title outlined-text'>Discover why Data Centers nationwide trust ASCO for unmatched reliability and seamless operations.</h2><br></br>
                <Button variant="info" size="md" ><a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1" >Customer Testimonials <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascohealthcare.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h2 className='position-relativeslide-title outlined-text'>Learn about our Back Up Power Solutions for Residential Healthcare Facilities</h2><br></br>
                <Button variant="info" size="md" ><a href='https://www.youtube.com/watch?v=wdvqnmcBFpo&t=1s' target="_blank" rel="noreferrer" className="btn1" >Watch Now <span><i class="fa fa-film" aria-hidden="true"></i></span></a></Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>




          <Col xs={10} md={10}>
            <p className='d-flex flex-wrap justify-content-around quotetext'>Welcome to the ASCO SDP Study Center! This is the starting point of our knowledge journey. Are you prepared?</p>
          </Col>

        </Container>
      </div>


    </div>)
}


export default PageContainer;