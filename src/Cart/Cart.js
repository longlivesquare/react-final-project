import { Container } from "react-bootstrap";
import { useCart } from "../hooks";

const Cart = () => {
    const { cart } = useCart();
    return (
        <Container>
            <h2>Your Shopping Cart</h2>
            
        </Container>
    )
}

export default Cart;