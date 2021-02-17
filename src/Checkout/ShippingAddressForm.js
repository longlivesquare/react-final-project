import { Col, Form, Container } from "react-bootstrap";
import { useState } from 'react'
import StyledButton from "../common/Button";

const ShippingAddressForm = (props) => {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId='formGroupShippingFirstName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='text' placeholder='First Name' required/>
                        <Form.Control.Feedback type='invalid'>
                            Please enter your name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupShippingLastName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text' placeholder='Last Name'/>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId='formGroupShippingAddress1'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' placeholder='PO Box or Street Address' required/>
                    <Form.Control.Feedback type='invalid'>
                        Enter your address
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='formGroupShippingAddress2'>
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control type='text' placeholder='Apt, building, suite, unit, floor, etc.'/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId='formGroupShippingCity'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder='city' required/>
                        <Form.Control.Feedback type='invalid'>
                            Enter your address
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupShippingState'>
                        <Form.Label>State</Form.Label>
                        <Form.Control type='text' placeholder='state' required/>
                        <Form.Control.Feedback type='invalid'>
                            Enter your state
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupShippingZip'>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type='text' placeholder='zip' required/>
                        <Form.Control.Feedback type='invalid'>
                            Enter your zip
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <StyledButton type='submit'>Next</StyledButton>
            </Form>
        </Container>
    )
}

export default ShippingAddressForm;