import { useState } from 'react';
import "../App.css"
import ascotimelineData from "./ascotimeline.json"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';



const AboutAsco = () => {
  const [ascotimeline] = useState(ascotimelineData)
  console.log(ascotimeline)
  return (<>
        <h2 className="text-center section-title">
          About ASCO
          <span className="smaller-pt" style={{ display: 'inline-block', verticalAlign: 'top' }}>
            Power<br /> technologies<span><i class="fa fa-trademark" aria-hidden="true"></i></span>
          </span>
        </h2>
    <Container id="root" className='d-flex flex-wrap justify-content-around mt-4' >
      <div>

      </div>
      <Row>

        <Col >
          <Carousel slide={false}><Carousel.Item>
            <Image src={process.env.PUBLIC_URL + "/assets/tokyostreetbright.jpg"} className="img-fluid d-flex flex-wrap justify-content-around about-slide-image" />
            <Carousel.Caption className='position-relativeslide-title about-outlined-text'>
              <h5 className='position-relativeslide-title about-outlined-text'>
                ASCO Power Technologies drives operational continuity
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/nasa.jpg"} className="img-fluid d-flex flex-wrap justify-content-around about-slide-image" />
              <Carousel.Caption className='position-relativeslide-title about-outlined-cap'>
                <h5 className='position-relativeslide-title about-outlined-text'>
                  Enrich your backup power knowledge</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>



        </Col>


      </Row>

      <Row className='mt-3 custom-color1'>

        <Col >
          <Carousel slide={false}>   <Carousel.Item>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/RqFZ7Xeumuo?si=L9utuwueByryT-0T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </Carousel.Item>
            <Carousel.Item>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0LAsZU44VXc?si=VI9_w0WcUjV9ebsL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </Carousel.Item>
          </Carousel>



        </Col>


      </Row>



      <Row className='mt-4 custom-color'>
        <h3 className="mt-3 about-asco-text">At ASCO Power Technologies, we have a long history of innovation. We are on a constant drive to bring new technologies and new products to our customers to help them become more productive.<br></br><br></br></h3>

      </Row>

      <Row className='mt-4  custom-color-years'>
        <h3 className="mt-3 about-asco-text-years">For more than 125 years, ASCO Power Technologies has offered products and services for critical power applications.</h3>

      </Row>


      <Row className='mt-4 custom-color'>
        <h className="mt-3 timeline-title">Discover ASCO's Timeline</h>
        <div id="ascotimeline" className="d-flex flex-wrap justify-content-around ">
          {ascotimeline.map((project, key) =>

            <Card key={key} className="m-2 p-2 shadow-lg timeline-card" style={{ width: '18rem', height: 'auto' }}>
              <Card.Body>
                <Card.Title className='year-size ' >{project.year}</Card.Title>
                <Card.Text className='brief'>{project.brief}
                </Card.Text>
                <Card.Text className='brief'>{project.brief2}
                </Card.Text>
                <Card.Text className='brief'>{project.brief3}
                </Card.Text>

                {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>

          )}
        </div>
      </Row>
    </Container>



  </>)

}
export default AboutAsco;
