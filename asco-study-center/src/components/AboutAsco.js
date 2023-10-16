import { useState } from 'react';
import "../App.css"
import ascotimelineData from "./ascotimeline.json"
import { Row, Col, Image, Card, Carousel, Container, Accordion } from 'react-bootstrap';
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
                <Image src={process.env.PUBLIC_URL + "/assets/short/tokyo-bannershort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />

                <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                  <h5 className='outlined-text'>ASCO Power Technologies drives operational continuity</h5>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="carousel">
                <Image src={process.env.PUBLIC_URL + "/assets/short/nasashort.jpeg"} className="img-fluid d-flex flex-wrap justify-content-center slide-image" />

                <Carousel.Caption className='mt-0 mb-auto d-flex flex-column justify-content-center outlined-text text-center'>
                  <h5 className='outlined-text'>Enrich your backup power knowledge</h5>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>



          </Col>


        </Row>

        <div>
          <Row className='mt-4  about'>
            <h3 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about-asco-text about">Empowering the World: A Journey Through the History of ASCO Power Technologies
            </h3>
            <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">At ASCO Power Technologies, we have a long history of innovation. We are on a constant drive to bring new technologies and new products to our customers to help them become more productive.
            </p>
            <h2 className="mb-2 mt-3 text-center section-divider w-100" >
                </h2>
            <h3 className="mt-3 pl-5 pr-5 justify-content-center about-asco-text about">Discover ASCO Transfer Switches
            </h3>
            <p className="mt-1 mb-1 pl-5 pr-5 justify-content-center about-asco-text-smaller about">Click on the tabs below to see our offerings and customer markets.
            </p>
           


          </Row>
        </div>
        {/* <div>
          <Row className='mt-4  about'>
            <h3 className="mt-3 mb-2 pl-5 pr-5 justify-content-center about-asco-text about">Empowering the World: A Journey Through the History of ASCO Power Technologies
            </h3>
            <p className="mt-1 mb-3 pl-5 pr-5 justify-content-center about-asco-text-smaller about">At ASCO Power Technologies, we have a long history of innovation. We are on a constant drive to bring new technologies and new products to our customers to help them become more productive.<br></br><br></br>
            Discover ASCO Transfer Switches: Click on the tabs below to see our offerings and customer markets.
            </p>


          </Row>
        </div> */}


        <div className='mt-5 mb-5 justify-content-center w-100'>
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header variant='success' className='justify-content-center text-center acord-header' ><h5 className='justify-content-center text-center'>ASCO Power Automatic Transfer Switch Basics</h5></Accordion.Header>
              <Accordion.Body>
                <div className='custom-youtube-video'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/RqFZ7Xeumuo?si=SlblQNZhfvUT9jiC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
                </div>
              </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className='justify-content-center' ><h5>ASCO Power Technologies - Market Segments</h5></Accordion.Header>

              <Accordion.Body><div className='custom-youtube-video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0LAsZU44VXc?si=Tuj7sifIgBd3W5Mv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              </Accordion.Body>

            </Accordion.Item>
          </Accordion>
        </div>


        <div>
          <Row className='mt-4  custom-color-years'>
            <h3 className="mt-3 mb-3 pl-5 pr-5 about-asco-text-years">For more than 125 years, ASCO Power Technologies has offered products and services for critical power applications.</h3>

          </Row>
        </div>
        <div>
          <Row className='mt-4 custom-color about'>
            <h className="mt-3 timeline-title about">Discover ASCO's Timeline</h>
            <div id="ascotimeline" className="d-flex flex-wrap justify-content-around ">
              {ascotimeline.map((project, key) =>

                <Card key={key} className="m-2 p-2 shadow-lg timeline-card" style={{ width: '18rem' }}>
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
