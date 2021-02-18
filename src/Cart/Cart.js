import { Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import StyledButton from "../common/Button";
import { useCart } from "../hooks";
import GoBackNavbar from "../Navbar/GoBackNavbar";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, cartTotalPrice } = useCart();
    const history = useHistory();

    const handleCheckout = (e) => {
        history.push('/checkout');
    }

    return (
        <>
            <GoBackNavbar />
            <Container>
                <Row><h2>Your Shopping Cart</h2></Row>
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
                <Row><b>Your Total: ${cartTotalPrice.toFixed(2)}</b></Row>
                <Row>
                    <Form inline>
                        <StyledButton onClick={handleCheckout}>Checkout</StyledButton>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Cart;