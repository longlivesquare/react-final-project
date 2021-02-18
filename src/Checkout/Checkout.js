import { Accordion, Card, Col, Container, Row, Button } from "react-bootstrap";
import ShippingAddressForm from "./ShippingAddressForm";
import CreditCardForm from "./CreditCardForm";
import styled from "styled-components";
import { useCart } from "../hooks";
import CartList from "../Cart/CartList";
import StyledButton from "../common/Button";
import { useState } from "react";
import BillingAddressForm from "./BillingAddressForm";
import { calcShipping, calcTaxes } from "../Utility/ShippingAndTaxes";

const CheckoutCard = styled(Card)`
    width: 90%;
`

const Checkout = (props) => {
    const { cartTotalPrice, cartQty, ClearCart } = useCart();
    const [shipAddresss, setShipAddress] = useState({});
    const [ccInfo, setccInfo] = useState({});
    const [billAddress, setBillAddress] = useState({});
    const [orderCompleteMessage, setOrderCompleteMessage] = useState('');

    const saveShipAddress = (newAdd) => {
        console.log(newAdd)
        setShipAddress(newAdd);
    }

    const saveBillAddress = (newAdd) => {
        setBillAddress(newAdd);
    }

    const saveCCInfo = (newCC) => {
        setccInfo(newCC);
    }

    const handleSubmitOrder = () => {
        if(Object.keys(shipAddresss).length &&
        Object.keys(ccInfo).length &&
        Object.keys(billAddress).length) {
            ClearCart();
            setShipAddress({});
            setccInfo({});
            setBillAddress({});
            setOrderCompleteMessage("Order complete.")
        }
    }

    return (
        <Container>
            <Row>
                <Accordion as={Col} md={8} defaultActiveKey="0">
                    <CheckoutCard>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Shipping Address
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ShippingAddressForm saveShipAddress={saveShipAddress}/>
                            
                        </Accordion.Collapse>
                    </CheckoutCard>
                    <CheckoutCard>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Credit Card Info
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <CreditCardForm saveCCInfo={saveCCInfo} />
                        </Accordion.Collapse>
                    </CheckoutCard>
                    <CheckoutCard>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Billing Address
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <BillingAddressForm {...shipAddresss} saveBillAddress={saveBillAddress}/>
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
                        <Card.Text>Items: ${cartTotalPrice.toFixed(2)}</Card.Text>
                        <Card.Text>Tax: ${calcTaxes(cartTotalPrice).toFixed(2)}</Card.Text>
                        <Card.Text>S/H: ${calcShipping(cartQty).toFixed(2)}</Card.Text>
                        Total: ${(cartTotalPrice+calcShipping(cartQty)+calcTaxes(cartTotalPrice)).toFixed(2)}
                    </Card.Body>
                    <Card.Footer>
                        <StyledButton onClick={handleSubmitOrder}>Submit Order</StyledButton>
                    </Card.Footer>
                </CheckoutCard>
            </Row>
            <h1>{orderCompleteMessage}</h1>
        </Container>
    )
}

export default Checkout;