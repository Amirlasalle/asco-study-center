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

                <Card key={key} className="m-2 p-2 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + productinfo.screenshot} />
                    <Card.Body>
                        <Card.Title className="card-titles">{productinfo.productname}</Card.Title>
                        <Card.Subtitle className="mb-2  card-subt">{productinfo.subtitle}</Card.Subtitle>
                        <Card.Subtitle className="mb-3 text-muted  card-subt2">{productinfo.subtitle2}</Card.Subtitle>
                        <Card.Text>{productinfo.brief}
                        </Card.Text>
                        <style type="text/css">
                        </style>
                        <Button variant="info" size="md" className="mb-1 mt-auto" ><a href={productinfo.product} target="_blank" rel="noreferrer" className="btn1" >More information <span><i class="fa fa-external-link" aria-hidden="true"></i></span></a></Button>
                        {/* &nbsp;&nbsp;&nbsp;
                        <Button variant="info"  ><a href={productinfo.deployment} target="_blank" rel="noreferrer" className="btn1"  >Contact <br></br>sales</a></Button> */}
                    </Card.Body>
                </Card>
            )}
        </Container>
    </>

    )
}

export default Products;
