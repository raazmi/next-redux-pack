import {ADD_TO_CART} from '../actions/action-types';

const initialState = {
    products:[
        {
            id: 1,
            name: 'Small T-shirt',
            price: 200
        },
        {
            id: 2,
            name: 'Blue Jeans Pant',
            price: 150
        },
        {
            id: 3,
            name: 'Casual Shirt',
            price: 450
        },
        {
            id: 4,
            name: 'Watch',
            price: 220
        },
        {
            id: 5,
            name: 'Shoe',
            price: 50
        }
    ],
    addedItems: [],
    total: 0
};

const cartReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem = state.products.find(item => item.id === action.payload);
            let isExisted = state.addedItems.find(item => item.id === action.payload);
            if(isExisted){
                addedItem.quantity += 1;
                addedItem.totalprice = addedItem.price * addedItem.quantity;
                return {
                    ...state,
                    total: state.total + addedItem.price 
                }
            } else {
                addedItem.quantity = 1;
                addedItem.totalprice = addedItem.price;
                let newTotal = state.total + addedItem.price;
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                }
            }

        default:
            return state;
    }
}

export default cartReducer;