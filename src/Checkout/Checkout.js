import { Accordion, Card, Col, Container, Row, Button } from "react-bootstrap";
import ShippingAddressForm from "./ShippingAddressForm";
import CreditCardForm from "./CreditCardForm";
import styled from "styled-components";
import { useCart } from "../hooks";
import CartList from "../Cart/CartList";
import StyledButton from "../common/Button";

const CheckoutCard = styled(Card)`
    width: 90%;
`

const Checkout = (props) => {
    const { cartTotalPrice } = useCart();

    return (
        <Container>
            <Row>
                <Accordion as={Col} md={8} defaultActiveKey="0">
                    <CheckoutCard>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Shipping Address
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ShippingAddressForm />
                            
                        </Accordion.Collapse>
                    </CheckoutCard>
                    <CheckoutCard>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Credit Card Info
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <CreditCardForm />
                        </Accordion.Collapse>
                    </CheckoutCard>
                    <CheckoutCard>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Billing Address
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Accordion.Toggle as={Button} eventKey="1">Next</Accordion.Toggle>
                        </Accordion.Collapse>
                    </CheckoutCard>
                    <CheckoutCard>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Cart
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <CartList />
                        </Accordion.Collapse>
                    </CheckoutCard>

                </Accordion>
                <CheckoutCard as={Col} md={4}>
                    <Card.Body>
                        <h3>Order Summary</h3>
                        <Card.Text>Items: ${cartTotalPrice}</Card.Text>
                        <Card.Text>Tax: $ 12.87</Card.Text>
                        <Card.Text>S/H: $ 6.78</Card.Text>
                        Total:
                    </Card.Body>
                </CheckoutCard>
            </Row>
        </Container>
    )
}

export default Checkout;