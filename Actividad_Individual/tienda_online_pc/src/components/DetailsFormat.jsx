import React, { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DetailsFormat = () => {
    const { itemId } = useParams();
    const { pcbuilds, laptops, gpus, fuentes, ssd, accesorios, carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CategoryContext);
    const location = useLocation();

    let items;
    let rutaRegreso;
    if (location.pathname.includes('/pcbuilds')) {
        items = pcbuilds;
        rutaRegreso = '/pcbuilds';
    } else if (location.pathname.includes('/laptops')) {
        items = laptops;
        rutaRegreso = '/laptops';
    } else if (location.pathname.includes('/gpus')) {
        items = gpus;
        rutaRegreso = '/gpus';
    } else if (location.pathname.includes('/fuentes')) {
        items = fuentes;
        rutaRegreso = '/fuentes';
    } else if (location.pathname.includes('/ssd')) {
        items = ssd;
        rutaRegreso = '/ssd';
    } else if (location.pathname.includes('/accesorios')) {
        items = accesorios;
        rutaRegreso = '/accesorios';
    } else {
        items = [];
    }

    const item = items.find(i => i.id === itemId);

    if (item && typeof item.description === 'string') {
        item.description = item.description.split('\n');
    }

    if (!item) {
        return <h2>Item no encontrado</h2>;
    }

    const itemEnCarrito = carrito.some(i => i.shortDescription === item.shortDescription);

    return (
        <div>
            <br />
            <Container>
                <Row>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img className='img-fluid rounded img__line' src={item.image} alt="Item" />
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Header><b>CARACTERÍSTICAS</b></Card.Header>
                            <Card.Body>
                                <ul>
                                    {

                                        item.description.map((line, index) => (

                                            <li key={index}>{line}</li>

                                        ))

                                    }
                                </ul>
                                <hr className='card__menu__line' />
                                <b>Precio: </b>${item.price}
                                <hr className='card__menu__line' />
                            </Card.Body>
                            <Card.Footer>
                                <Link to={rutaRegreso}>
                                    <Button variant="primary" className="me-2">Regresar</Button>
                                </Link>
                                {itemEnCarrito ? (
                                    <Button variant="danger" onClick={() => eliminarDelCarrito(item.shortDescription)}>Eliminar del carrito</Button>
                                ) : (
                                    <Button variant="success" onClick={() => agregarAlCarrito(item)}>Agregar al carrito</Button>
                                )}
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <br />
        </div>

    );
}

