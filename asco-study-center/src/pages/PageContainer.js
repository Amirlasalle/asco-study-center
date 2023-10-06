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
        <Container secondary fluid className="d-flex flex-wrap justify-content-around ">


          <Carousel slide={false}>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodefault.png"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h2 className='position-relativeslide-title'>ASCO Power Technologies ensures uninterrupted operational performance.</h2><br></br>
                <Button variant="info" size="md" ><a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1" >Learn More</a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodefault.png"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h2 className='position-relativeslide-title'>Keep seeking knowledge!</h2><br></br>
                <Button variant="info" size="md" ><a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1" >Learn More</a></Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/ascodefault.png"} className="img-fluid d-flex flex-wrap justify-content-around slide-image" />
              <Carousel.Caption>
                <h2 className='position-relativeslide-title'>Strive to the top!</h2><br></br>
                <Button variant="info" size="md" ><a href='https://www.youtube.com/watch?v=3zNO-2RBqKY' target="_blank" rel="noreferrer" className="btn1" >Learn More</a></Button>
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