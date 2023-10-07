import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "../App.css"

const AboutAsco = () => {
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
       
        <Col>
        <Image className='asco-logo' src={process.env.PUBLIC_URL + '/assets/nasa.jpg'} fluid /></Col>

      </Row>
    </Container>



  </>)

}
export default AboutAsco;
