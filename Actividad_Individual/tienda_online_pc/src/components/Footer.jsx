import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <Container fluid className='bg-black'>
            <Row className="justify-content-center">
                <Col md={6} className="text-center p-3">
                    <p className='footer__descripcion'><b>Autor: </b>Roberto Collaguazo</p>
                    <p className='footer__descripcion'>© 2023 Derechos reservados</p>
                </Col>
            </Row>
        </Container>
    )
}
