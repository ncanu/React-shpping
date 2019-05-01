import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard' 
import { getProductList } from '../actions/catalogActions';
import {connect} from "react-redux";


class Catalog extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }
  
    componentDidMount()
    {
        if(this.props.products !=null)
        {
            const prods = this.props.products;
            this.setState({ products: prods})
        }
    }

    componentWillMount()
    {
        this.props.getProductList();
    }


    render()
    {
       
        return(
            <Container>
                <br />
                <Row>
        
                {this.props.products.map((product, index) => (
                    <Col sm={12} md={4} style={{marginBottom: '20px'}}> 
                        <ProductCard key={index} name={product.name} description={product.description} price={product.price} />
                    </Col>
                ))}
                
                    
                </Row>
            
            </Container>
        );
    }
    
}

const selectD = (state) =>{
    console.log(state.catalogReducer.productList);
    return state.catalogReducer.productList ? state.catalogReducer.productList : null;
} 

const mapStateToProps = state => ({
    products: selectD(state),
  })
  
  const mapDispatchToProps = dispatch => ({
    getProductList: () => dispatch(getProductList()),
  })

export default connect(mapStateToProps,mapDispatchToProps)(Catalog) 