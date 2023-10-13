import { useState } from 'react';
import "../App.css"
import ascotimelineData from "./ascotimeline.json"
import { Tab, Row, Col, ListGroup, Image, Card, Carousel, Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



const AboutAsco = () => {
  const [ascotimeline] = useState(ascotimelineData)
  console.log(ascotimeline)

  const nextIconStyle = {
    fontSize: '10vw',
    fontWeight: 'bolder',
  };

  return (
    <div className='asco'>
      <h2 className="text-center section-title ">
        About ASCO
        <span className="smaller-pt" style={{ display: 'inline-block', verticalAlign: 'top' }}>
          Power<br /> technologies<span><i class="fa fa-trademark" aria-hidden="true"></i></span>
        </span>
      </h2>
      <Container id="root" className='d-flex flex-wrap justify-content-around mt-4 about' >

        <Row>

          <Col >
            <Carousel slide={false} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyle}
              prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>

              <Carousel.Item className="carousel">
                <Image src={process.env.PUBLIC_URL + "/assets/short/nycshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />

                <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                  <h5 className='outlined-text'>ASCO Power Technologies ensures uninterrupted operational performance</h5>
                  {/* <Carousel slide={false} className='about'>
            <Carousel.Item className='carousel'>
            <Image src={process.env.PUBLIC_URL + "/assets/tokyostreetbright.jpg"} className="img-fluid d-flex flex-wrap justify-content-around about-slide-image about" />
            <Carousel.Caption className='position-relativeslide-title about-outlined-text'>
              <h5 className='position-relative slide-title about-outlined-text'>
                ASCO Power Technologies drives operational continuity
              </h5> */}
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="carousel">
                <Image src={process.env.PUBLIC_URL + "/assets/short/nycshort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />

                <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                  <h5 className='outlined-text'>ASCO Power Technologies ensures uninterrupted operational performance</h5>
                  {/* <Carousel.Item className='carousel'>
              <Image src={process.env.PUBLIC_URL + "/assets/nasa.jpg"} className="img-fluid d-flex flex-wrap justify-content-around about-slide-image" />
              <Carousel.Caption className='position-relativeslide-title about-outlined-cap'>
                <h5 className='position-relativeslide-title about-outlined-text'>
                  Enrich your backup power knowledge</h5> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>



          </Col>


        </Row>

        <Tab.Container id="list-group-tabs" defaultActiveKey="#link1">
  <Row className="mt-4 justify-content-center">
    <Col sm={12} md={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={12} md={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/RqFZ7Xeumuo?si=L9utuwueByryT-0T"
            title="YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/0LAsZU44VXc?si=VI9_w0WcUjV9ebsL"
            title="YouTube video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

        {/* <Tab.Container id="list-group-tabs" defaultActiveKey="#link1" >
          <Row className='mt-4 ml-2 mr-2 justify-content-center d-flex'>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Link 2
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/RqFZ7Xeumuo?si=L9utuwueByryT-0T"
                    title="YouTube video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0LAsZU44VXc?si=VI9_w0WcUjV9ebsL"
                    title="YouTube video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container> */}


        <div>
          <Row className='mt-4 custom-color about'>
            <h3 className="mt-3 about-asco-text about">At ASCO Power Technologies, we have a long history of innovation. We are on a constant drive to bring new technologies and new products to our customers to help them become more productive.<br></br><br></br></h3>

          </Row>
        </div>
        <div>
          <Row className='mt-4  custom-color-years'>
            <h3 className="mt-3 about-asco-text-years">For more than 125 years, ASCO Power Technologies has offered products and services for critical power applications.</h3>

          </Row>
        </div>
        <div>
          <Row className='mt-4 custom-color about'>
            <h className="mt-3 timeline-title about">Discover ASCO's Timeline</h>
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
        </div>
      </Container>



    </div>)

}
export default AboutAsco;
