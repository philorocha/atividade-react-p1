import reactlogo from '../assets/react-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Container fluid>
            <Row>
                <Col lg={true}>
                    <Image src={reactlogo} fluid={true} />
                </Col>
                <Col className='mt-auto mb-auto border border-dark pb-2' lg={true}>
                    <h1 className='text-center'>Login</h1>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                <Link to={'/Home'} style={{ color: '#fff', textDecoration: 'none'}}>Acessar</Link>
                            </Button>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="danger" size="lg">
                            <Link to={'/Register'} style={{ color: '#fff', textDecoration: 'none'}}>Cadastre-se</Link>
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
