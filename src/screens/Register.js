import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <Container fluid>
            <Row>
                <Col className='mt-auto mb-auto border border-dark pb-2 m-auto'  lg={6}>
                    <h1 className='text-center'>Cadastro</h1>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicNome'>
                            <Form.Control type="input" placeholder='Nome' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Control type="email" placeholder='E-mail' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder='Senha' />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                <Link to={'/'} style={{ color: '#fff', textDecoration: 'none' }}>Cadastrar</Link>
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
