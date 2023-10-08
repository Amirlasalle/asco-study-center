import { useState } from 'react';
import "../App.css"
import ascotimelineData from "./ascotimeline.json"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutAsco = () => {
  const [ascotimeline] = useState(ascotimelineData)
  console.log(ascotimeline)
  return (<>

    <Container id="aboutasco" className=' mt-4 mb-auto' >
      <h2 className="text-center section-title">
        About ASCO
        <span className="smaller" style={{ display: 'inline-block', verticalAlign: 'top' }}>
          Power<br /> technologies
        </span>
      </h2>

      <Row>

        <Col xs={9} md={5}>
          <p className='abouttext'>

            At ASCO, we have a long history of innovation. In fact, it's part of our DNA. Since 1888, ASCO has prided itself on providing cutting edge technology and never compromising on quality.

          </p>

        </Col>


      </Row>

      <Row>
        <h3 className="text-left timeline-title">Discover ASCO's Timeline</h3>
        <div id="ascotimeline" className="d-flex flex-wrap justify-content-around ">
          {ascotimeline.map((project, key) =>

            <Card key={key} className="m-2 p-2" style={{ width: '18rem' }}>
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
    </Container>



  </>)

}
export default AboutAsco;
