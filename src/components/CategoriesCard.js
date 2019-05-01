import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CategoriesCard = () => (
    <Card border="dark">
    <Card.Header><Card.Title>Categories</Card.Title></Card.Header>
    <Card.Body>
      
      
        <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

    </Card.Body>
    </Card>
    )
    
    export default CategoriesCard