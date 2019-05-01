import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ProductCard = (props) => {
  const {name, description, price} = props;
  
  return(
<Card border="secondary" >
    <Card.Img variant="top"  src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" 
    style={{ height: '120px', width: '130px', display: 'block', margin: '0 auto'}}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      {description}
      </Card.Text>
      <Row>
            <Col md={9} sm={9}> <b>$ {price} </b></Col>
            <Col md={3} sm={3}> <Button variant="success" className="" style={{borderRadius: '50%'}}><b>+</b></Button> </Col>
      </Row>

    </Card.Body>

    

  </Card>
  );

  }

export default ProductCard