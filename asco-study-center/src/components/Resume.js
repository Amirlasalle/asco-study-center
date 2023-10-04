import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import "../App.css"
// import Row from 'react-bootstrap/Row';
// import Col from "react-bootstrap/esm/Col";

const Resume = (handlePageChange)=> {
    return(<>
     <h3 className="text-center section-title">Resume</h3>
    <Container id='resume' className="d-flex flex-wrap justify-content-around ">
 
    <iframe
    height="900px"
    width="800px"
    title="resume"
    src="https://docs.google.com/document/d/e/2PACX-1vQu9Mr-Bk95x1yRw1h2qCVxrqEXUfWSyNPkLwqZtLvgNICUR1p_2EzDeKu8bmr5EbR9xpkRTaIuvUPD/pub?embedded=true"></iframe>
  </Container>
  <Container className="resumeBtn">
<Button variant="info" ><a href="./amir.pdf" target="_blank" rel="noreferrer" download className="btn1">Download Resume</a></Button></Container>

  
        </>)
}


export default Resume;
