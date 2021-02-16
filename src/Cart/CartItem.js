import { useState } from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import StyledButton from "../common/Button";
import { useCart } from "../hooks";

const CartItem =({index, title, image, qty, price}) => {
    const {RemoveItem, UpdateQty} = useCart();
    const [newQty, setNewQty] = useState(qty);

    const handleQtyChange = (e) => {
        e.preventDefault();
        UpdateQty(index, parseInt(e.target.previousElementSibling.value));
    }

    const handleDeleteProduct = (e) => {
        e.preventDefault();
        RemoveItem(index);
    }

    return (
        <Container>
            <Row style={{border: "2px"}}>
                <Col md={2}>
                    <Image src={image} alt={image} thumbnail></Image>
                </Col>
                <Col>
                    {title}
                </Col>
                <Col>
                    ${(price*qty).toFixed(2)}
                </Col>
                <Col>
                    <Form inline>
                        <input 
                            type='number' 
                            min='1' 
                            value={newQty} 
                            onChange={(e) => setNewQty(e.target.value)} 
                        />
                        <StyledButton onClick={handleQtyChange}>Update Quantity</StyledButton>
                    </Form>
                </Col>
                <Col>
                    <Image 
                        src={`${process.env.PUBLIC_URL}/x-circle-fill.svg`} 
                        alt='delete item'
                        onClick={handleDeleteProduct}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default CartItem;