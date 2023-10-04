import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const AboutAsco = () => {
  return (<>
    <h3 className="text-center section-title">About ASCO</h3>
    <Container id="aboutasco">
      <Row>

        <Col xs={9} md={5}>
          <p className='abouttext'>
            **history of ASCO goes here**
          </p>

        </Col>
      </Row>
    </Container>



  </>)

}
export default AboutAsco;
