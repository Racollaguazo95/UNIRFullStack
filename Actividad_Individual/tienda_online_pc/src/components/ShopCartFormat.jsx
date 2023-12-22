import React, { useContext } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { CategoryContext } from '../context/CategoryContext';

export const ShopCartFormat = () => {
    const { carrito, eliminarDelCarrito } = useContext(CategoryContext);

    const total = carrito.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return (
        <div>
            <br />
            <Container >
                {carrito.map((item, index) => (
                    <Card className="mb-3 border-black border-2 bg-light" key={index}>
                        <Row className="no-gutters">
                            <Col md={3} className="d-flex align-items-center justify-content-center">
                                <img className='img-fluid img__shop__cart' variant="top" src={item.image} />
                            </Col>
                            <Col md={3} className="d-flex align-items-center">
                                <Card.Body>
                                    <Card.Text>{item.shortDescription}</Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md={3} className="d-flex align-items-center">
                                <Card.Body>
                                    <Card.Text>
                                        <b>Precio: </b>${item.price}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md={3} className="d-flex align-items-center">
                                <Card.Body>
                                    <Button variant="danger" onClick={() => eliminarDelCarrito(item.shortDescription)}>Eliminar del carrito</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
                <Card className="mt-3 w-25 mx-auto">
                    <Card.Body>
                        <Row>
                            <Col className="d-flex align-items-center"><b>Total: </b>${total.toFixed(2)}</Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="success" disabled={total === 0}>Comprar</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
            <br />
        </div>
    )
}
