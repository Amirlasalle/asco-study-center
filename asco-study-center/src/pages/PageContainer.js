import { useState } from 'react';
import React from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Row from "react-bootstrap/esm/Row";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import Button from 'react-bootstrap/Button';




const PageContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <div id="root">

      <div>
        <Container secondary fluid className="d-flex flex-wrap justify-content-around ">
        <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
      <Image src={process.env.PUBLIC_URL + "/assets/ascodefault.png"} className="img-fluid d-flex flex-wrap justify-content-around homepagePic. " />
        <Carousel.Caption>
          <h2 className='slide-title'>ASCO Power Technologies ensures uninterrupted operational performance.</h2><br></br>
          <Button variant="info"  size="md" ><a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1" >Learn More</a></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={process.env.PUBLIC_URL + "/assets/ascodefault.png"} className="img-fluid d-flex flex-wrap justify-content-around homepagePic. " />
        <Carousel.Caption>
          <h2 className='slide-title'>Second slide label</h2><br></br>
          <Button variant="success"  size="md" ><a href='https://www.youtube.com/embed/3zNO-2RBqKY?enablejsapi=1&rel=0' target="_blank" rel="noreferrer" className="btn1" >Learn More</a></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={process.env.PUBLIC_URL + "/assets/ascodefault.png"} className="img-fluid d-flex flex-wrap justify-content-around homepagePic. " />
        <Carousel.Caption>
          <h2 className='slide-title'>Third slide label</h2><br></br>
          <Button variant="success"  size="md" ><a href='https://www.youtube.com/embed/3zNO-2RBqKY?enablejsapi=1&rel=0' target="_blank" rel="noreferrer" className="btn1" >Learn More</a></Button>
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