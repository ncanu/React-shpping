import React from "react";
import Header from '../containers/Header'
import Catalog from '../containers/Catalog'
import Sidebar from '../containers/Sidebar'
import { Row, Col } from 'react-bootstrap';



const App = () => (
  <div>
    <Header />
    <Row>
            <Col md={9} sm={12}> <Catalog/> </Col>
            <Col md={3} sm={12}> <Sidebar/> </Col>
    </Row>
    
  </div>
);
export default App;