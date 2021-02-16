import StyledButton from "../common/Button"
import { Form } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import { useContext } from "react"
import CartContext from "../Contexts/CartContext"
import { useHistory } from "react-router-dom"
import { useState } from "react"

const AddToCart = (props) => {
    const { AddItem } = useContext(CartContext)
    const { push } = useHistory();
    const [qty, setQty] = useState(1);

    const handleAddProduct = (event) => {
        event.preventDefault();
        AddItem(
            props.id, 
            parseInt(event.target.previousElementSibling.value),
            props.title,
            props.image,
            props.price
        )
        push('/products');
    }

    return (

        <Modal
            show={props.show}
            onHide={props.onHide}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form inline>
                    <Form.Label htmlFor="AddToCartFormQuantity" srOnly>
                        Quantity
                    </Form.Label>
                    <input 
                        type='number' 
                        id="AddToCartFormQuantity" 
                        name="AddToCartFormQuantity" 
                        min="1"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                    />
                    <StyledButton onClick={handleAddProduct}>Add to Cart</StyledButton>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddToCart;