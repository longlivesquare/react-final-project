import { useState } from "react";
import { Container, Form, Col } from "react-bootstrap";
import StyledButton from "../common/Button";
import MonthSelectBox from './MonthSelectBox';
import YearSelectBox from './YearSelectBox';

const CreditCardForm = (props) => {
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
            <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId='formGroupCreditCard'>
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control type='text' required/>
                    <Form.Control.Feedback type="invalid">
                        Please enter your payment card info.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} md="auto" controlId='formGroupCCExpireDateMonth'>
                        <Form.Label>Expiration Month</Form.Label>
                        <MonthSelectBox/>
                    </Form.Group>
                    <Form.Group as={Col} md="auto" controlId='formGroupCCExpireYear'>
                        <Form.Label>Expiration Year</Form.Label>
                        <YearSelectBox/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupCCSecurityCode'>
                        <Form.Label>Security Code</Form.Label>
                        <Form.Control 
                            type='text'
                            maxLength={3}
                            minLength={3}
                            required
                        />
                        <Form.Text id="secCodeHelpBlock" muted>
                            This code can usually be found on the back of your credit card.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupCCZip'>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type='text' required/>
                    </Form.Group>
                </Form.Row>
                <StyledButton type='submit'>Next</StyledButton>
            </Form>
        </Container>
    )
}

export default CreditCardForm;