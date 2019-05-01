import catalogConstants from '../constants/catalogConstants';
import axios from 'axios';


const getProductsListRequest = () => ({ type: catalogConstants.GET_PRDOUCTS_LIST });
const getProductsListSuccess = (productList) => ({ type: catalogConstants.GET_PRDOUCTS_LIST_SUCCESS, productList });
const getProductsListerror = error => ({ type: catalogConstants.GET_PRDOUCTS_LIST_ERROR, error, });

const products = [{name: "Product 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "90.00"},
                {name: "Product 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "90.00"},
                {name: "Product 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "90.00"},
                {name: "Product 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "90.00"},
                {name: "Product 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "90.00"},
                {name: "Product 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "90.00"}]

export const getProductList = () => async (dispatch) => {
    dispatch(getProductsListRequest());
    dispatch(getProductsListSuccess(products));
    // axios.get('http://jsonplaceholder.typicode.com/todos')
    // .then(function (response) {
    //     console.log(response.data);
        

    // })
    // .catch(function (error) {
    //    console.log("Error");
    // });
}