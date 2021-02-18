import { useState } from "react"
import { Card, Container, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom";

const RegistrationPage = (props) => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if(form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
        history.push(props.targetURL);
    }

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId='formGroupEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}