import { Col, Form, Container } from "react-bootstrap";
import { useState } from 'react'
import StyledButton from "../common/Button";

const BillingAddressForm = (props) => {
    const [validated, setValidated] = useState(false)
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {    
            event.stopPropagation();
        }

        setValidated(true);
        props.saveBillAddress({
            fName, lName, address1, address2, city, state, zip
        })
    }

    const handleUseShipAdd = (e) => {
        if(e.target.checked) {
            setFName(props.fName);
            setLName(props.lName);
            setAddress1(props.address1);
            setAddress2(props.address2);
            setCity(props.city);
            setState(props.state);
            setZip(props.zip);
        }
    }

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Check type="switch" id="use-ship-add-switch" label="Use Shipping Address?" onChange={handleUseShipAdd} />
                <Form.Row>
                    <Form.Group as={Col} controlId='formGroupShippingFirstName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='text' placeholder='First Name' value={fName} onChange={(e) => setFName(e.target.value)} required/>
                        <Form.Control.Feedback type='invalid'>
                            Please enter your name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupShippingLastName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text' placeholder='Last Name' value={lName} onChange={(e) => setLName(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId='formGroupShippingAddress1'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' placeholder='PO Box or Street Address' value={address1} onChange={(e) => setAddress1(e.target.value)} required/>
                    <Form.Control.Feedback type='invalid'>
                        Enter your address
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='formGroupShippingAddress2'>
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control type='text' placeholder='Apt, building, suite, unit, floor, etc.' value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId='formGroupShippingCity'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder='city' value={city} onChange={(e) => setCity(e.target.value)} required/>
                        <Form.Control.Feedback type='invalid'>
                            Enter your address
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupShippingState'>
                        <Form.Label>State</Form.Label>
                        <Form.Control type='text' placeholder='state' value={state} onChange={(e) => setState(e.target.value)} required/>
                        <Form.Control.Feedback type='invalid'>
                            Enter your state
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupShippingZip'>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type='text' placeholder='zip' value={zip} onChange={(e) => setZip(e.target.value)} required/>
                        <Form.Control.Feedback type='invalid'>
                            Enter your zip
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <StyledButton type='submit'>Save</StyledButton>
            </Form>
        </Container>
    )
}

export default BillingAddressForm;