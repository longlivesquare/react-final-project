import StyledButton from "../common/Button"
import { Form } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import { useContext } from "react"
import CartContext from "../Contexts/CartContext"
import { useHistory } from "react-router-dom"

const AddToCart = (props) => {
    const { AddItem } = useContext(CartContext)
    const { push } = useHistory();
    const handleAddProduct = (event) => {
        AddItem(
            props.id, 
            event.target.previousElementSibling.value,
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
                    <Form.Label htmlFor="AddToCartFormQuantity" sronly>
                        Quantity
                    </Form.Label>
                    <input 
                        type='number' 
                        id="AddToCartFormQuantity" 
                        name="AddToCartFormQuantity" 
                        min="1" 
                    />
                    <StyledButton onClick={handleAddProduct}>Add to Cart</StyledButton>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddToCart;