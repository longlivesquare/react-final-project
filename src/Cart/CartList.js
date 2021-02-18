import { Row } from "react-bootstrap";
import { useCart } from "../hooks";
import CartItem from './CartItem';

const CartList = (props) => {
    const { cart } = useCart();
    return (
        <Row>
            {!cart.length ? 
                    <p>Your cart is empty.</p>: 
                    cart.map((product, index) => {
                    return(<CartItem
                        key={product.id}
                        index={index}
                        title={product.title}
                        image={product.image}
                        qty={product.qty}
                        price={product.price}
                    />)
                })}
        </Row>
    )
}

export default CartList