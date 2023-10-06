import productinfoData from "./productinfo.json"
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css"


const Products = () => {
    const [productinfo] = useState(productinfoData)
    console.log(productinfo)
    return (<>
        <h3 className="text-center section-title">Our Products</h3>
        <Container id="productinfo" className="d-flex flex-wrap justify-content-around ">
            {productinfo.map((productinfo, key) =>

                <Card key={key} className="m-2 p-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + productinfo.screenshot} />
                    <Card.Body>
                        <Card.Title>{productinfo.appname}</Card.Title>
                        <Card.Text>{productinfo.breif}
                        </Card.Text>
                        <style type="text/css">
                            {`
    .btn-flat {
      background-color: #3dcd58;
      color: black;
    }
    .btn:hover{
    background-color: yellow;
    }
    `}
                        </style>
                        <Button variant="flat" size="md" ><a href={productinfo.github} target="_blank" rel="noreferrer" className="btn1" >Github <br></br>Repository</a></Button>&nbsp;&nbsp;&nbsp;
                        <Button variant="info"  ><a href={productinfo.deployment} target="_blank" rel="noreferrer" className="btn1"  >Live <br></br>Deployment</a></Button>
                    </Card.Body>
                </Card>
            )}
        </Container>
    </>

    )
}

export default Products;
