import { useState } from "react";
import { Container, Form, Col } from "react-bootstrap";
import StyledButton from "../common/Button";
import { testCCNum } from "../Utility/CreditCard";
import MonthSelectBox from './MonthSelectBox';
import YearSelectBox from './YearSelectBox';

const CreditCardForm = (props) => {
    const [validated, setValidated] = useState(false)
    const [ccNum, setCCNum] = useState('');
    const [expMonth, setExpMonth] = useState('01');
    const [expYear, setExpYear] = useState('21');
    const [secNum, setSecNum] = useState('');
    const [zip, setZip] = useState('');
    const [validCCNum, setValidCCNum] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        props.saveCCInfo({
            ccNum, expMonth, expYear, secNum, zip
        })
        setValidated(true);
    }

    const validateCCNnum = (e) => {
        const ccIsValid = testCCNum(e.target.value)
        console.log(ccIsValid);
        setValidCCNum(!ccIsValid);
    }

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId='formGroupCreditCard'>
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control 
                        type='text' 
                        value={ccNum} 
                        onChange={(e) => setCCNum(e.target.value)} 
                        onBlur={validateCCNnum} 
                        isInvalid={validCCNum}
                        required/>
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid card
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} md="auto" controlId='formGroupCCExpireDateMonth'>
                        <Form.Label>Expiration Month</Form.Label>
                        <MonthSelectBox value={expMonth} setExpMonth={(e) => setExpMonth(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} md="auto" controlId='formGroupCCExpireYear'>
                        <Form.Label>Expiration Year</Form.Label>
                        <YearSelectBox value={expYear} onChange={(e) => setExpYear(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupCCSecurityCode'>
                        <Form.Label>Security Code</Form.Label>
                        <Form.Control 
                            type='text'
                            maxLength={3}
                            minLength={3}
                            value={secNum}
                            onChange={(e) => setSecNum(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>
                            Enter the security code.
                        </Form.Control.Feedback>
                        <Form.Text id="secCodeHelpBlock" muted>
                            This code can usually be found on the back of your credit card.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupCCZip'>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type='text' value={zip} onChange={(e) => setZip(e.target.value)} required/>
                        <Form.Control.Feedback type='invalid'>
                            Enter the zip associated with your card
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <StyledButton type='submit'>Next</StyledButton>
            </Form>
        </Container>
    )
}

export default CreditCardForm;