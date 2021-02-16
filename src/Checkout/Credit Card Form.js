import { Container, Form, Col } from "react-bootstrap";
import MonthSelectBox from './MonthSelectBox';
import YearSelectBox from './YearSelectBox';

const CreditCardForm = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId='formGroupCreditCard'>
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control type='text' id='CreditCardField' />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId='formGroupCCExpireDateMonth'>
                        <Form.Label>Expiration Month</Form.Label>
                        <MonthSelectBox />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupCCExpireYear'>
                        <Form.Label>Expiration Year</Form.Label>
                        <YearSelectBox />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupCCSecurityCode'>
                        <Form.Label>Security Code</Form.Label>
                        <Form.Control 
                            type='text' 
                            id='CCSecurityCode' 
                            maxLength={3}
                            minLength={3}
                        />
                        <Form.Text id="secCodeHelpBlock" muted>
                            This code can usually be found on the back of your credit card.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGroupCCZip'>
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type='text' id='CCZip' />
                    </Form.Group>
                </Form.Row>
            </Form>
        </Container>
    )
}

export default CreditCardForm;