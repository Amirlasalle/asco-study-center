import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer"
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/esm/Row";

const PageContainer = () => {
  return (
    <div id="root">
      {/* <Header /> */}
      <div>
        <Container fluid className="d-flex flex-wrap justify-content-around ">
          <Row>
            <Col xs={5} md={5}>
              <Image src={process.env.PUBLIC_URL + "/images/ProPic.png"} className="img-fluid d-flex flex-wrap justify-content-around homepageProPic" roundedCircle />
            </Col>  </Row>
          <Col xs={10} md={10}>
            <p className='d-flex flex-wrap justify-content-around quotetext'>"A journey of a thousand lines begins with a single code."</p>
          </Col>

        </Container>
      </div>

      {/* <Footer className="w-100 mt-auto mb-0 bg-secondary p-4 footer" /> */}
    </div>)
}


export default PageContainer;