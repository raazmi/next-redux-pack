import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function Home(props){
    const {products, total, addedItems, addToCart} = props;
    const handleAddToCart = (id) =>{
        addToCart('ADD_TO_CART', id)
        toast.success("Product is added to cart", {
            position: 'top-right',
            autoClose: 2000
        });
    }

    return(
        <div className="products">
            <h2>{total}</h2>
            <ToastContainer/>
            {products.map(product => (
                <div className="product" key={product.id}>
                    <h4>{product.name}</h4>
                    <span>{product.price}</span>
                    <br/>
                    <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
                </div>
            ))}

            <h2>Cartbox</h2>
            {addedItems.map(product => (
                <div className="product" key={product.id}>
                    <h4>{product.name}</h4>
                    <span>{product.totalprice}</span>
                    <br/>
                    <span>{product.quantity}</span>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        products: state.cart.products,
        addedItems: state.cart.addedItems,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart: (type, id) => dispatch({type: type, payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);