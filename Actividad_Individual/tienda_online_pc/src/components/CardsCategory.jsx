import React from 'react'
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CardsCategory = ({ image, route }) => {
    return (
        <Col xs={12} md={4} className="mb-4">

            <Card className='border-black border-2'>
                <Link to={route}>
                    <Card.Img variant="top" src={image} />
                </Link>
            </Card>

        </Col>
    )
}
