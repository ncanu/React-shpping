import catalogConstants from '../constants/catalogConstants';

const initialState = {
    productList: [],
    isLoading: false,
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case catalogConstants.GET_PRDOUCTS_LIST:
        return {
          ...state,
          isLoading: true
        };

        case catalogConstants.GET_PRDOUCTS_LIST_SUCCESS:
        return {
          ...state,
          productList: action.productList
        };
     
      default:
        return state
    }
  }

export default catalogReducer