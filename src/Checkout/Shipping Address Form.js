import { Col, Form } from "react-bootstrap";

const ShippingAddressForm = (props) => {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId='formGroupShippingFirstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' required/>
                </Form.Group>
                <Form.Group as={Col} controlId='formGroupShippingLastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' required/>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default ShippingAddressForm;